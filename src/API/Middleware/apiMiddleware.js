export default class ApiMiddleware {

    onRequest(config) {
        return {
            ...config,
            headers: {
                ...config.headers,
                token: JSON.parse(localStorage.getItem('token'))
            }
        };
    }

    onResponseError(err) {
        if(err.response.status === 401 && err.config && !err.config.hasRetriedRequest) {
            localStorage.removeItem('token')
        }
        return err;
    }
}
