export {};

declare global {
    interface Window {
        apiRequest: (url: string, method?: string, data?: any, headers?: Record<string, string>) => Promise<any>;
    }
}
