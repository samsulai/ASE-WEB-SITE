import { useState } from "react";

const useFetchPost = (params = {  }) => {
    const [statusText, setStatusText ] = useState(null);
    const [result, setResult ] = useState(null);

    const uri = 'https://benin.africanschoolofeconomics.com/wp-json/wp/v2/posts?';
    const defaultParams = {
        _fields: 'id,date,date_gmt,modified,modified_gmt,slug,status,title,excerpt,featured_media,_links.wp:featuredmedia,_embedded.wp:featuredmedia.id',
        ...params
    }

    fetch(uri+new URLSearchParams(defaultParams))
    .then(res => {
        if(res.status === 200 && res.ok === true) return res.json();
        
        return setStatusText(res.statusText);
    })
    .then(data => setResult(data))
    .catch(err => console.error(err));

    return [statusText, result];
}

export default useFetchPost;