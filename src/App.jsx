import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (!input.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: input, done: false }]);
    setInput("");
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "500px", margin: "0 auto" }}>
      <h1>Трекер завдань</h1>
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyDown={e => e.key === "Enter" && addTask()}
        placeholder="Нове завдання..."
        style={{ padding: "0.5rem", width: "70%" }}
      />
      <button onClick={addTask} style={{ padding: "0.5rem 1rem", marginLeft: "0.5rem" }}>
        Додати
      </button>
      <ul style={{ marginTop: "1rem", listStyle: "none", padding: 0 }}>
        {tasks.map(t => (
          <li
            key={t.id}
            onClick={() => toggleTask(t.id)}
            style={{
              padding: "0.5rem",
              cursor: "pointer",
              textDecoration: t.done ? "line-through" : "none",
              color: t.done ? "gray" : "inherit"
            }}
          >
            {t.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;