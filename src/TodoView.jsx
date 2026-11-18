import { useParams } from "react-router-dom";
import TodoList from "./TodoList.jsx";

// This component is rendered by the route "/:filter" (see App.jsx). Read the
// filter straight from the URL and show only the matching todos.
//
// TODO:
//   const { filter } = useParams()   // "all" | "active" | "completed"
//   build `visible` from `todos`: active = not done, completed = done, all = everything
//   render <TodoList todos={visible} ... />
export default function TodoView({ todos, onToggle, onDelete }) {
  // right now it ignores the filter and shows everything — fix that:
  const { filter } = useParams();

  //const visible = filter === "active" ? todos.filter(todo => !todo.done) : filter === 'completed' ? todos.filter(todo => todo.done) : todos;

  const visible = todos.filter((t) => filter === "active" ? !t.done : filter === "completed" ? t.done : true);

  return <TodoList todos={visible} onToggle={onToggle} onDelete={onDelete} />;
}