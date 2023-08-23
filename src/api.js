import axios from "axios";

export const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});


// CRUD
// Create - создание ресурса
// api.post("/posts", {
//   title: "foo",
//   body: "bar",
//   userId: 1,
// });

// Read - получение данных
// api.get("/posts");

// let id = 20;
// api.get(`/posts/${id}`);

// Update - изменение данных
// api.put(`/posts/${id}`, {
//   id: 1,
//   title: "xxxx xx",
//   body: "rrrrrr",
//   userId: 1,
// });
// Delete
// api.delete(`/posts/${id}`);
