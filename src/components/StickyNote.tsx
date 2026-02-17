import { useContext, type FC } from "react";
import type { Note } from "../types";
import { AppContext } from "../AppContext";

type StickyNoteProps = {
  note: Note;
};
const StickyNote: FC<StickyNoteProps> = ({ note }) => {
  const { deleteNote, toggleStar } = useContext(AppContext);
  return (
    <li className="min-w[200px] min-h[200px] w-[32%] h-60 bg-gray-100 border border-gray-400 rounded-md p-4 py-6 relative flex flex-col justify-between">
      <div className="max-w-sm absolute top-1 right-1 text-xl text-green-500">
        {note.completed && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
            />
          </svg>
        )}
      </div>
      <h2 className="text-xl font-bold">{note.title}</h2>
      <div className="flex gap-3 justify-center mt-4">
        <button
          onClick={() => {
            deleteNote(note.id);
          }}
          className="text-white bg-red-500 box-border border border-transparent hover:bg-red-600 focus:ring-4 focus:ring-red-300 shadow-xs font-medium leading-5 rounded-md text-sm px-4 py-2.5 focus:outline-none"
        >
          Delete
        </button>

        <button
          onClick={() => {
            toggleStar(note.id);
          }}
          className="text-body bg-blue-300 box-border border border-default-medium hover:bg-blue-400 hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-md text-sm px-4 py-2.5 focus:outline-none"
        >
          Toggle
        </button>
      </div>
    </li>
  );
};

export default StickyNote;
