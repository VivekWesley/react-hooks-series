// import React, { useState, useEffect } from 'react';

// export const useFetch = url => {
//     const [state, setState] = useState({ data: null, loading: true });

//     useEffect(() => {
//         setState(state => ({ data: state.data, loading: true }));
//         fetch(url)
//             .then(x => x.text())
//             .then(y => {
//                 setState({ data: y, loading: false });
//             })
//     }, [url]);
//     return state;
// }

import React, { useState, useEffect } from 'react';

export const useFetch = (url) => {
    const [state, setState] = useState({
        data: null,
        loading: true
    });

    useEffect(() => {
        setState(state => ({ data: state.data, loading: true }));
        fetch(url).then(x => x.text())
            .then(y => {
                setState({ data: y, loading: false });
            })

    }, [url]);
    return state;
}