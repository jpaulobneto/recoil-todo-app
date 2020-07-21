import React from "react";
import { useRecoilValue } from "recoil";
import { filteredTodoListState } from "../../state";
import { TodoItem } from "../TodoItem";
import { TodoItemCreator } from "../TodoItemCreator";
import { TodoListFilters } from "../TodoListFilters";
import { TodoListStats } from "../TodoListStats";

export function TodoList() {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />

      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
}
