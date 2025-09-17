// import '../css/app.css';
// import './bootstrap';
import '../css/global.css';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import { Toaster } from 'react-hot-toast';

// const appName = import.meta.env.VITE_APP_NAME || 'Laravel';
const appName = window?.AppConfig?.appName || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob('./Pages/**/*.jsx'),
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<>
        <App {...props} />
        <Toaster position='top-center' reverseOrder={false} />
        </>);
    },
    progress: {
        color: '#D90000',
    },
});
