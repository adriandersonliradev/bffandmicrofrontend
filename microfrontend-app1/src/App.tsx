import { useEffect, useState } from "react";
import axios from "axios";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface Data {
  todos: Todo[];
  posts: Post[];
}

function App() {
  const [data, setData] = useState({ todos: [], posts: [] } as Data);

  useEffect(() => {
    axios.get("http://localhost:3000/api/data").then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Micro-frontend App 1</h2>

      <h3 style={{ marginLeft: "20px" }}>Todos</h3>
      {data.todos.length === 0 && <div>Loading...</div>}
      <ul>
        {data.todos.map((todo) => (
          <li key={todo.id}>
            <strong>{todo.title}</strong>
            <input type="checkbox" defaultChecked={todo.completed} />
          </li>
        ))}
      </ul>

      <h3 style={{ marginLeft: "20px" }}>Posts</h3>
      {data.posts.length === 0 && <div>Loading...</div>}
      <ul>
        {data.posts.map((post) => (
          <li style={{ listStyle: "none" }} key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
