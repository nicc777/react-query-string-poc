/*

    Original concept from Brett Fisher - https://dev.to/brettfishy/the-easiest-way-to-use-query-parameters-in-react-1ioe or https://github.com/bandrewfisher/use-query-param

*/

import { useState } from 'react';

const getQuery = () => {
    if (typeof window !== 'undefined') {
        return new URLSearchParams(window.location.search);
    }
    return new URLSearchParams();
};

const getQueryStringVal = key => {
    return getQuery().get(key);
};

const useQueryParam = (key, defaultVal) => {
    const [query, setQuery] = useState(getQueryStringVal(key) || defaultVal);

    const updateUrl = (newVal) => {
        setQuery(newVal);

        const query = getQuery();

        if (newVal.trim() !== '') {
            query.set(key, newVal);
        } else {
            query.delete(key);
        }

        // This check is necessary if using the hook with Gatsby
        if (typeof window !== 'undefined') {
            const { protocol, pathname, host } = window.location;
            const newUrl = `${protocol}//${host}${pathname}?${query.toString()}`;
            window.history.pushState({}, '', newUrl);
        }
    };

    return [query, updateUrl];
};

export default useQueryParam;