export default async function PostDetails({ postId }) {
     
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate a delay of 1 seconds
 
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`,
     {
       next: {
         revalidate: 120,
 },
 });
   const posts = await response.json();
 
         
 
      return(
       <div>
           <h2 style={{ fontSize: '20px', marginBottom: '10px', color: '#555' }}>{posts.title}</h2>
           <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#777' }}>{posts.body}</p>
       </div>
         )
   }