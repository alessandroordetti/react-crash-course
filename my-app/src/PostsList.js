/* Al posto di passare tutti i props e assegnarli a delle variabili o costanti 
    si può scrivere direttamente tra parentesi quello che vogliamo usare. In questo caso posts!! */
const PostsList = ({posts, handleDelete}) => {
/*  const posts = props.posts;
    const title = props.title; */


    return ( 
    <div className="postsList mx-auto d-flex justify-content-between mb-5">
        {posts.map((post) => (
            <div className="blog-preview" key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>

                <button onClick={() => handleDelete(post.id)}>Delete</button>
            </div>
        ))}
    </div>
    );
}

export default PostsList;