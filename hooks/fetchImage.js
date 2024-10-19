import { useState } from "react";

const fetchImage = (url, type = "medium") => {

    const params = {
        _fields: 'media_details',
    }

    fetch(url +'?'+ new URLSearchParams(params))
    .then(res => {
        if(res.status === 200 && res.ok === true) return res.json();
    })
    .then(data => { 
        return data.media_details.sizes[type].source_url;
    })
    .catch(err => console.error(err));
}

export default fetchImage;