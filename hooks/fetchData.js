export async function fetchData(){

    try {
    const response = await fetch(`https://ase-backend.onrender.com/posts`);
    const data = await response.json();
    const posts = data
    return posts;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch posts');
  }
    
}