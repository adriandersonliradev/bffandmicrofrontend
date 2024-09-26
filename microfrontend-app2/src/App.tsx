import { useEffect, useState } from "react";
import axios from "axios";

interface Data {
  id: number;
  name: string;
}

function App() {
  const [data, setData] = useState([] as Data[]);
  const [searchName, setSearchName] = useState("");

  useEffect(() => {}, []);

  return (
    <div style={{ padding: "20px", width: "100%" }}>
      <h2 style={{ width: "100%", textAlign: "center" }}>
        Micro-frontend App 2
      </h2>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          console.log(searchName);

          axios
            .post("http://localhost:3000/api/repository", {
              name: searchName,
            })
            .then((response) => {
              setData(response.data);
            })
            .catch(() => {
              setData([
                {
                  id: 0,
                  name: "API rate limit exceeded for 187.19.225.228.",
                },
              ]);
            });
        }}
        style={{
          marginBottom: "20px",
        }}
      >
        <input
          type="text"
          name="search"
          placeholder="Pesquisar"
          value={searchName}
          onChange={(event) => setSearchName(event.target.value)}
          style={{
            padding: "10px",
          }}
        />
        <button type="submit">Pesquisar</button>
      </form>

      {data.length === 0 ? (
        <div>Digite o nome de um usuário</div>
      ) : (
        <>
          <h3 style={{ marginLeft: "20px" }}>Repositórios</h3>

          <ul>
            {data.map((item) => (
              <li key={item.id}>
                <strong>{item.name}</strong>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default App;
