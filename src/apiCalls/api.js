import { makeRequest } from './api-utils';

function makeApi(request = makeRequest()) {
    function signUp(headers, body) {
        return request({
            url: '/sign-up',
            requestMethod: 'POST',
            headers,
            body,
        });
    }

    function signOut(headers) {
        return request({
            url: '/sign-out',
            requestMethod: 'POST',
            headers,
        });
    }

    function login(headers) {
        return request({
            url: '/login',
            requestMethod: 'GET',
            headers,
        });
    }

    function saveTraining(headers, body) {
        return request({
            url: '/training/save-training',
            requestMethod: 'POST',
            headers,
            body,
        });
    }

    return {
        signUp,
        signOut,
        login,
        saveTraining,
    };
}

export default makeApi();
