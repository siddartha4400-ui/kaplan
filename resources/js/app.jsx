// import '../css/app.css';
import './bootstrap';
import './services/apiRequest';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import '../css/theme/theme.min.css'; // bootstarp
// import '../css/vendor/tiny-slider/dist/tiny-slider.css';

import '../css/vendor/bootstrap/dist/js/bootstrap.bundle.min.js';
// import '../css/vendor/bootstrap/dist/simplebar.min.js'
// import '../css/vendor/tiny-slider/dist/min/tiny-slider.js'
import '../css/vendor/smooth-scroll/dist/smooth-scroll.polyfills.min.js'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import '../css/common.css'

const appName = import.meta.env.VITE_APP_NAME;
createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob('./Pages/**/*.jsx'),
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<App {...props} />);
    },
    progress: {
        color: '#4B5563',
    },
});
