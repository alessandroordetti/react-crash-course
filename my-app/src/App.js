import { useState, useEffect } from 'react';
import './App.css';
import PostList from './PostsList';

function App() {

  /* HOOK EXAMPLE! */
/*   const [name, setName] = useState('Blog di Alessandro');

  const changeName = () => {
    setName('Blog di Alex')
  }; */

  const [posts, setPosts] = useState([
    /* L'id utilizzato per la key deve essere unico */
    {title: 'Hello World! 1', body: 'lorem ipsum', author: 'Alex', id: 1},
    {title: 'Hello World! 2', body: 'lorem ipsum', author: 'Paolo', id: 2},
    {title: 'Hello World! 3', body: 'lorem ipsum', author: 'Alex', id: 3}
  ]);

  const title = 'Here you see all the posts!';

  const handleDelete = (id) => {
    const newPosts = posts.filter(post => post.id !== id );
    setPosts(newPosts);
  }

  const [name, setName] = useState ('Alessandro');

/* Viene invocato ogni qualvolta c'è un re-render della pagina */
  useEffect(() => {
    console.log('effect running');

    /* In questo caso il console.log verrà stampato solo se cambia il valore di name */
  }, [name]);


  return (
    <div className="App">
      <h1 className='mb-5'>{title}</h1>
      <div className="home">
        <PostList  posts={posts} title={title} handleDelete={handleDelete} />

        <button className='btn btn-primary' onClick={() => setName('Paperino')}>Change Name</button>
        <h3>{name}</h3>

        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX2AIbq7VRiZIZGN7qIEBIPsde13TV-2OMZA&usqp=CAU" />



      </div>
    </div>
  );
}

export default App;
