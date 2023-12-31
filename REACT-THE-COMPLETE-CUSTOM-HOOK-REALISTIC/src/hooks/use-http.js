import { useState, useCallback } from 'react';

const useHttp = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendRequest = useCallback(async (requestConfig, applyData) => {
        setIsLoading(true);
        setError(null);
        try {
        const response = await fetch(
            requestConfig.url, {
                method: requestConfig.method ? requestConfig.method : 'GET',
                headers: requestConfig.headers ? requestConfig.headers : {},
                body: requestConfig.body ?  JSON.stringify(requestConfig.body) : null,
            }
        );

        if (!response.ok) {
            throw new Error('Request failed!');
        }

        const data = await response.json();

        applyData(data);
        } catch (err) {
        setError(err.message || 'Something went wrong!');
        }
        setIsLoading(false);
    }, []);

    return {
        isLoading,
        error,
        sendRequest

        // javascript 문법 key-value 값이 같으면 위에 처럼 하나만 써도 됨.
        // isLoading: isLoading,
        // error: error,
        // sendRequest: sendRequest
    };
};

export default useHttp;