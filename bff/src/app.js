const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const port = 3000;

app.get("/api/data", async (req, res) => {
  try {
    const responseTodos = await axios.get(
      "https://jsonplaceholder.typicode.com/todos?_limit=10"
    );
    const responsePosts = await axios.get(
      "https://jsonplaceholder.typicode.com/posts?_limit=3"
    );

    const response = {
      todos: responseTodos.data,
      posts: responsePosts.data,
    };
    res.json(response);
  } catch (error) {
    res.status(500).send("Erro ao buscar dados");
  }
});

app.post("/api/repository", async (req, res) => {
  const name = req.body.name;
  try {
    const response = await axios.get(
      `https://api.github.com/users/${name}/repos`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).send("Erro ao buscar repositórios");
  }
});

app.listen(port, () => {
  console.log(`BFF rodando em http://localhost:${port}`);
});
