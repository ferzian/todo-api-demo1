import express from "express";
import { collection, addDoc, getDocs } from "firebase/firestore";
import {db} from "./firebase-config.js";
import {Todo} from "./todo-shema.js";
import bodyParser from "body-parser";

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const todosCollection = collection(db, "todos");

app.post("/todos", async (req, res) => {
  try {
    const todo = new Todo(
      req.body.author,
      req.body.title,
      req.body.description,
    );
 
    await addDoc(
      todosCollection,
      JSON.parse(JSON.stringify(todo)),
    );

    res.send('Document has been saved');
  } catch (e) {
    console.error("Error adding document: ", e);
  }
});

// Route untuk mendapatkan semua todos
app.get("/todos", async (req, res) => {
  try {
    const todosCollectionRef = todosCollection;
    const todosSnapshot = await getDocs(todosCollectionRef);
    const todos = todosSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    res.json(todos);
  } catch (error) {
    console.error(error);
    res.status(500).send("Terjadi kesalahan saat mengambil data todos");
  }
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})