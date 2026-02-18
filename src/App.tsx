import { useEffect, useState } from "react";
import "./App.css";
// import Todos from './components/Todos'
// import { getTodos } from './todos-api';
import type { Note } from "./types";
import { AppContext } from "./AppContext";
import Notes from "./components/Notes";
import useWindowResize from "./hooks/useWindowResize";
import useFetch from "./hooks/useFetch";

function App() {
  // const [todos, settodos] = useState<Todo[]>([]);
  // const [finishedCount, setFinishedCount] = useState(0);
  const [notes, setNotes] = useState<Note[]>([]);
  const size = useWindowResize();
  const { data, loading } = useFetch<Note[]>(
    "https://jsonplaceholder.typicode.com/todos",
  );

  useEffect(() => {
    setNotes(data ? data : []);
  }, [data]);

  // useEffect(() => {
  //   console.log('App mounted')
  //   getTodos().then((todos)=>{
  //     console.log(todos)
  //     settodos(todos);
  //   })
  // },[]);

  // useEffect(() => {
  //   const count = todos.filter(todo => todo.completed).length;
  //   setFinishedCount(count);
  // }, [todos]);

  const deleteNote = (noteId: number) => {
    setNotes(
      notes.filter((noteItem) => {
        return noteItem.id !== noteId;
      }),
    );
  };

  const toggleStar = (noteId: number) => {
    setNotes(
      notes.map((noteItem) => {
        if (noteItem.id === noteId) {
          return {
            ...noteItem,
            completed: !noteItem.completed,
          };
        }
        return noteItem;
      }),
    );
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <AppContext.Provider
      value={{
        notes,
        deleteNote,
        toggleStar,
      }}
    >
      {/* <p className='text-2xl mb-2'>Finished Todos {finishedCount}</p> */}
      {/* <Todos todoArray={todos} /> */}
      {size.width < 300 ? <h2>Resolution not supported</h2> : <Notes />}
    </AppContext.Provider>
  );
}

export default App;
