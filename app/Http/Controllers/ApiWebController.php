<?php

namespace App\Http\Controllers;

use App\Models\BrokerContactMessage;
use App\Models\Listing;
use App\Models\ListingContact;
use App\Models\State;
use App\Models\User;
use App\Models\UserSaveListing;
use App\Models\UserSaveSearch;
use App\Services\ListingService;
use Illuminate\Http\Request;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;

class ApiWebController extends Controller
{
    public function BusinessLocation(Request $request)
    {
        $location = $request->location;
        if (is_numeric($location)) {
            // $response = file_get_contents('http://api.geonames.org/postalCodeSearchJSON?postalcode=' . $location . '&country=AU&maxRows=10&username=rupam847');
            $response = $this->getpostcodes('postcode', $location);
            return $response;
        } else {
            // $response = file_get_contents('http://api.geonames.org/searchJSON?q=' . $location . '&country=AU&maxRows=50&username=rupam847');
            $response = $this->getpostcodes('place', $location);
            return $response;
        }
    }

    public function getpostcodes($type = null, $location = null, $page = 1)
    {
        $path = public_path('australian_postcodes.json');

        if (!File::exists($path)) {
            return response()->json(['error' => 'File not found'], 404);
        }

        $json = File::get($path);

        $data = json_decode($json, true);

        $collection = collect($data);
        // $type = 'place';
        // $location = 'qld';
        // $type = 'state';
        // $location = 'Melbourne';

        if ($type == 'place') {
            $filteredCollection = $collection->filter(function ($item) use ($location) {
                // return $item['locality'] == $location;
                return Str::contains(Str::lower($item['locality']), Str::lower($location));
            })->take(30);
            $filteredCollection1 = $collection->filter(function ($item) use ($location) {
                return Str::contains(Str::lower($item['state']), Str::lower($location));
            })->take(30);
            $filteredCollection2 = $collection->filter(function ($item) use ($location) {
                return Str::contains(Str::lower($item['dc']), Str::lower($location));
            })->take(30);
            // dd($filteredCollection);
            $filteredCollection = $filteredCollection->merge($filteredCollection1);
            $filteredCollection = $filteredCollection->merge($filteredCollection2);
        } else if ($type == 'postcode') {
            $filteredCollection = $collection->filter(function ($item) use ($location) {
                return $item['postcode'] == $location;
            })->take(30);
        } else if ($type == 'allcities') {
            $filteredCollection = $collection->filter(function ($item) use ($location) {
                return $item['ced'] != $location;
            })->unique('ced');
        } else if ($type == 'allplace') {
            $filteredCollection = $collection->filter(function ($item) use ($location) {
                return $item['locality'] != $location;
            })->unique('locality')->take(5000);
            // dd($filteredCollection);
        }

        if ($type == 'allplace') {
            $perPage = 1000;
            $currentPageItems = $filteredCollection->slice(($page - 1) * $perPage, $perPage)->values();

            $paginated = new LengthAwarePaginator(
                $currentPageItems,
                $filteredCollection->count(),
                $perPage,
                $page,
                ['path' => url()->current(), 'pageName' => 'page', 'query' => request()->query()]
            );

            $filteredCollection = $filteredCollection->map(function ($item) {
                return [
                    'ced' => $item['ced'],
                    'postcode' => $item['postcode'],
                    'locality' => $item['locality'],
                    'state' => $item['state'],
                    'long' => $item['long'],
                    'lat' => $item['lat'],
                    'address' => $item['locality'] . ', ' . $item['state'] . ' ' . $item['postcode'],
                ];
            });
            return $filteredCollection;
        } else if ($type == 'allcities') {
            $filteredCollection = $filteredCollection->map(function ($item) {
                return [
                    'ced' => $item['ced'],
                    'postcode' => $item['postcode'],
                    'locality' => $item['locality'],
                    'state' => $item['state'],
                    'long' => $item['long'],
                    'lat' => $item['lat'],
                    'address' => $item['locality'] . ', ' . $item['state'] . ' ' . $item['postcode'],
                ];
            });
            return $filteredCollection;
        }
        // Map to select specific fields
        $filteredCollection = $filteredCollection->map(function ($item) {
            return [
                'ced' => $item['ced'],
                'postcode' => $item['postcode'],
                'locality' => $item['locality'],
                'state' => $item['state'],
                'long' => $item['long'],
                'lat' => $item['lat'],
                'address' => $item['locality'] . ', ' . $item['state'] . ' ' . $item['postcode'],
            ];
        });

        $filteredCollection = array_values($filteredCollection->toArray());

        return response()->json($filteredCollection);
    }

}
