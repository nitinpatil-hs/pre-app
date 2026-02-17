import type { Todo } from "./types";

export const getTodos = async () => {
    const response = await fetch ('https://jsonplaceholder.typicode.com/todos');
    const jsonResp = await response.json();
    return jsonResp as Todo[];
}