import { useEffect } from 'react';

function useTimeout(func, delay) {
    useEffect(() => {
        const timer = setTimeout(() => {
            func();
        }, delay);

        return () => clearTimeout(timer);
    }, [func, delay]);
}
export default useTimeout;
