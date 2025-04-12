import { defineConfig, loadEnv } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
    // Load environment variables from `.env`
    const env = loadEnv(mode, process.cwd(), "VITE");
    const isProduction = env.VITE_APP_ENV === "production";
    const usUbuntu = env.VITE_APP_IS_UBUNTU;

    return {
        server: !isProduction
            ? {
                  // host: "127.0.0.1",
                  // port: 5173,
                  // hmr: {
                  //     host: "127.0.0.1",
                  //     protocol: "ws",
                  // },
                  host: usUbuntu ? "0.0.0.0" : "127.0.0.1",
                  port: 5173,
                  hmr: {
                      host: usUbuntu ? "westlandpublishers.local" : "127.0.0.1",
                      protocol: "ws",
                  },
                //   host: "0.0.0.0",
                //   port: 5173,
                //   hmr: {
                //       host: "westlandpublishers.local",
                //       protocol: "ws",
                //   },
              }
            : {},

        plugins: [
            laravel({
                input: isProduction
                    ? ["resources/css/app.css", "resources/js/app.jsx"] // Production includes CSS
                    : ["resources/js/app.jsx"], // Local only JS
                refresh: true,
            }),
            react(),
        ],
        esbuild: {
            loader: "jsx",
            include: [/resources\/js\/.*\.js$/, /resources\/js\/.*\.jsx$/], // Ensure JSX transformation
        },
        build: isProduction
            ? {
                  outDir: "public/build",
                  emptyOutDir: true,
              }
            : {},
    };
});

// import { defineConfig } from "vite";
// import laravel from "laravel-vite-plugin";
// import react from "@vitejs/plugin-react";

// export default defineConfig({
//     server: {
//         host: "0.0.0.0",
//         port: 5173,
//         hmr: {
//             host: "westlandpublishers.local",
//             protocol: "ws",
//         },
//     },
//     plugins: [
//         laravel({
//             input: ["resources/js/app.jsx"],
//             refresh: true,
//         }),
//         react(),
//     ],
// });

// import { defineConfig } from "vite";
// import laravel from "laravel-vite-plugin";
// import react from "@vitejs/plugin-react";

// export default defineConfig({
//     plugins: [
//         laravel({
//             input: ["resources/css/app.css", "resources/js/app.jsx"],
//             refresh: true,
//         }),
//         react(),
//     ],
//     build: {
//         outDir: "public/build", // Output the built assets here
//         emptyOutDir: true,
//     },
// });
