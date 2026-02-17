import { useContext } from "react";
import StickyNote from "./StickyNote";
import { AppContext } from "../AppContext";

const Notes = () => {
  const { notes } = useContext(AppContext);

  return (
    <ul className="mx-auto place-items-center flex flex-wrap gap-4">
      {notes.map((noteItem) => {
        return <StickyNote key={noteItem.id} note={noteItem} />;
      })}
    </ul>
  );
};

export default Notes;
