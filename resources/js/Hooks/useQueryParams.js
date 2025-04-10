import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/react";

/**
 * Custom Hook: Get & update URL query parameters using Inertia.js
 */
export const useQueryParams = () => {
    const { url } = usePage(); // ✅ Get the current URL

    /**
     * Get a query parameter from the current URL
     */
    const getQueryParam = (key, defaultValue = null) => {
        const params = new URLSearchParams(url.split("?")[1] || "");
        return params.get(key) || defaultValue;
    };

    /**
     * Update query parameters dynamically using Inertia.js
     */
    const updateQueryParams = (params) => {
        const currentParams = new URLSearchParams(url.split("?")[1] || "");

        Object.keys(params).forEach((key) => {
            if (params[key] === null) {
                currentParams.delete(key); // Remove parameter if value is null
            } else {
                currentParams.set(key, params[key]); // Update/Add parameter
            }
        });

        Inertia.visit(`${url.split("?")[0]}?${currentParams.toString()}`, {
            replace: true, // Prevents adding a new history entry
        });
    };

    return { getQueryParam, updateQueryParams };
};
