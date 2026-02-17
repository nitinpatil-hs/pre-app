import type { FC } from "react";
import type { Todo } from "../types";
import TodoItem from "./TodoItem";

type todosProps = {
    todoArray: Todo[]
}

const Todos:FC<todosProps> = ({todoArray}) => {
    return (
        <ul>
            {
                todoArray.map((todo) => {
                    return <TodoItem item={todo} key={todo.id} />
                })
            }
        </ul>
    )
}

export default Todos;