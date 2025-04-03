import Todo from "../components/todo";
import Link from "next/link";

export const metadata = {
  title: "Posts Page",
};


export default async function PostsPage() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts',
    {
      next: {
        revalidate: 120,
},
});
  const posts = await response.json();
  const postJSX = posts.map((posts) => {
    
    return (
      <Link href={`/posts/${posts.id}`}>
      <div style={{ backgroundColor: "#f0f8ff", padding: "15px", margin: "10px", borderRadius: "10px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
      <h1 style={{ color: "#333", fontSize: "1.5rem", marginBottom: "10px" }}>{posts.title}</h1>
      <p style={{ color: "#555", fontSize: "1rem", lineHeight: "1.5" }}>{posts.body}</p>
      </div>
      </Link>
    )}
  )
  
  
  
  return (
    <div style={{backgroundColor: "Highlight",  height: "100vh"}}>
      <h1>Posts page</h1>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px", padding: "20px" }}>
        {postJSX.map((post, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#000",
              color: "#0f0",
              fontFamily: "'Press Start 2P', cursive",
              padding: "15px",
              borderRadius: "10px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.81)",
              border: "2px solid #0f0",
              textAlign: "center",
            }}
          >
            {post}
          </div>
        ))}
      </div>

      {/* <div>
        <Todo />
        </div> */}
    </div>
  );
  
}