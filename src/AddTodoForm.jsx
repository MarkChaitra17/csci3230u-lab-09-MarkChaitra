import { useState } from "react";

function handleSubmit(event, onAdd, text, setText) {
  event.preventDefault();
  // …call onAdd with input.value (trimmed), then input.value = ""
  onAdd(text.trim());
  setText("");
}

export default function AddTodoForm({ onAdd }) {

  const [text, setText] = useState("");

  return (
    // <form onSubmit={handleSubmit}>: an <input name="text" placeholder="Add a todo…"> + an "Add" button
        <form onSubmit={(e) => handleSubmit(e, onAdd, text, setText)}>
            <input name="text" placeholder="Add a todo…" value={text} onChange={(e) => setText(e.target.value)}/>
            <button type="submit">Add</button>
        </form>
  )
}