import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
import { TodoItemsContext } from "../store/todo-item-store";

const TodoItems = () => {
  const { todoItems } = useContext(TodoItemsContext);
  return (
    <>
      <div className={styles.itemcontainer}>
        {todoItems.map((item) => (
          <TodoItem
            key={item.name}
            todoDate={item.dueDate}
            todoName={item.name}
          ></TodoItem>
        ))}
      </div>
    </>
  );
};
export default TodoItems;
