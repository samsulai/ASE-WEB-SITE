export async function fetchNews(params = { }){

    const uri = 'https://benin.africanschoolofeconomics.com/wp-json/wp/v2/posts?';
    const defaultParams = {
        _fields: 'id,date,date_gmt,slug,status,title,excerpt,featured_media',
        categories: '7',
        per_page: '4',
        ...params
    }
    
    const res = await fetch(uri + new URLSearchParams(defaultParams));
    const totalpages = new Headers(res.headers).get('x-wp-totalpages') || 0;
    const data = await res.json();

    let finalNews = await Promise.all(data.map(news => {
      return fetch('https://benin.africanschoolofeconomics.com/wp-json/wp/v2/media/'+news.featured_media+'?'+ new URLSearchParams({_fields: 'media_details'}))
      .then(res => res.json())
      .then(data => ({
        image: data?.media_details?.sizes?.["medium"]?.source_url || '/static/img/bg.png',
        ...news
      }))
      .catch(err => console.error(err));
    }))

    return { finalNews, totalpages }; 
}