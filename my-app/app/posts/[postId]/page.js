import PostDetails from "@/app/components/postDetails";
import { Suspense } from "react";

export default async function PostDetailsPage({ params }) {
    
   const postId = params.postId;
  console.log(`======== ${params.postId}`);

  const lodJSX = (
    <div><h1>Loading.......-.-</h1></div>
  );

    
     return(
      <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '5px', margin: '20px 0' }}>

          <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px', color: '#333' }}>Post Details</h1>
      <Suspense fallback={lodJSX}>
      <PostDetails postId={postId} />

      </Suspense>
      </div>
        )
  }