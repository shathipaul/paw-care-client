import { useEffect } from 'react';

const useTitleHook = title => {
    useEffect(() =>{
        document.title = `${title} - Paw Care`
    }, [title])
};

export default useTitleHook;