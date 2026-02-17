import { createContext } from "react";
import type { Note } from "./types";

export interface AppContext {
    notes: Note[],
    deleteNote: (noteId: number) => void
    toggleStar: (noteId: number) => void
}

export const AppContext = createContext<AppContext>({
    notes:[],
    deleteNote: () => {},
    toggleStar: () => {}
});