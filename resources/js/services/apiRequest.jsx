window.apiRequest = async function (url, method = 'GET', data = null, headers = {}) {
    const defaultHeaders = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        ...headers
    };

    const options = {
        method,
        headers: defaultHeaders,
        credentials: 'include' // Ensures cookies (for Laravel Sanctum)
    };

    if (data) {
        options.body = JSON.stringify(data);
    }

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        if (!response.ok) {
            throw new Error(result.message || 'Request failed');
        }
        return result;
    } catch (error) {
        console.error('API Request Error:', error.message);
        return { success: false, message: error.message };
    }
};
