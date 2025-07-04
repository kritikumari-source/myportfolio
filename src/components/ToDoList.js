import React, { useState, useEffect } from "react";
import { format, differenceInMinutes, isPast, isFuture } from "date-fns";
import "bootstrap/dist/css/bootstrap.min.css";
import * as bootstrap from "bootstrap/dist/js/bootstrap.bundle";
window.bootstrap = bootstrap;

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [priority, setPriority] = useState("low");
  const [reminder, setReminder] = useState("");
  const audio = new Audio("/reminder.mp3"); // Add your audio file in public folder

  // Request notification permission on mount
  useEffect(() => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission();
    }
  }, []);

  useEffect(() => {
    const stored = localStorage.getItem("todos");
    if (stored) setTodos(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Reminder checker
  useEffect(() => {
    const interval = setInterval(() => {
      setTodos((prevTodos) =>
        prevTodos.map((todo) => {
          if (
            todo.reminder &&
            !todo.reminded &&
            new Date(todo.reminder) <= new Date()
          ) {
            // 🔔 Trigger system notification
            if (Notification.permission === "granted") {
              new Notification("⏰ Reminder", {
                body: todo.text,
              });
            }

            // 🔊 Play sound
            audio.play();

            // 📳 Vibrate if supported
            if (navigator.vibrate) {
              navigator.vibrate([200, 100, 200]);
            }

            return { ...todo, reminded: true };
          }
          return todo;
        })
      );
    }, 30000); // every 30s

    return () => clearInterval(interval);
  }, []);

  const handleAdd = () => {
    if (!text.trim()) return;
    const newItem = {
      id: Date.now(),
      text: text.trim(),
      priority,
      created: new Date().toISOString(),
      reminder,
      reminded: false,
    };
    setTodos((prev) => [...prev, newItem]);
    setText("");
    setReminder("");
  };

 

  const handleDelete = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  const priorityOrder = { high: 1, medium: 2, low: 3 };
  const sortedTodos = [...todos].sort(
    (a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]
  );

  useEffect(() => {
    const popoverTriggerList = document.querySelectorAll(
      '[data-bs-toggle="popover"]'
    );
    const popoverList = [...popoverTriggerList].map(
      (el) => new bootstrap.Popover(el)
    );
    return () => popoverList.forEach((p) => p.dispose());
  }, []);

  // 🔥 Helper to highlight reminders
  const getReminderClass = (reminder) => {
    if (!reminder) return "";
    const time = new Date(reminder);
    const diff = differenceInMinutes(time, new Date());
    if (diff <= 1 && isFuture(time)) return "border-warning";
    if (isPast(time)) return "border-danger text-danger";
    return "";
  };

  return (
    
    <div className="todo-container container mt-4">
     
        <h3> <strong>Schedule your day</strong></h3> 
      
          {/* <h1>To‑Do List</h1>    */}

         <div className="add-todo mb-3">  
        

<div className="input-group mb-2">
  <input
    type="text"
    className="form-control"
    placeholder="New task…"
    value={text}
    onChange={(e) => setText(e.target.value)}
    onKeyDown={(e) => e.key === "Enter" && handleAdd()}
  />
  <button className="btn btn-success" onClick={handleAdd}>
    <i className="fa fa-plus" aria-hidden="true"></i>
  </button>
</div>


        <h5 className="mb-2 mt-3">
          <strong>🎯 Prioritize your task</strong>
        </h5>
         <div className="btn-group mb-2"
          role="group"
          aria-label="Priority selector"
        >
          <button
            type="button"
            className={`btn ${
              priority === "high" ? "btn-danger" : "btn-outline-danger"
            }`}
            onClick={() => setPriority("high")}
          >
            High
          </button>
          <button
            type="button"
            className={`btn ${
              priority === "medium" ? "btn-warning" : "btn-outline-warning"
            }`}
            onClick={() => setPriority("medium")}
          >
            Medium
          </button>
          <button
            type="button"
            className={`btn ${
              priority === "low" ? "btn-success" : "btn-outline-success"
            }`}
            onClick={() => setPriority("low")}
          >
            Low
          </button>
        </div>  

         <h5 className="mb-2 mt-3">
          <strong>Add Reminder</strong>
        </h5>
        <input
          type="datetime-local"
          className="form-control mb-2"
          value={reminder}
          onChange={(e) => setReminder(e.target.value)}
        />

        <button
          type="button"
          className="btn btn-primary mb-2 me-2"
          data-bs-toggle="popover"
          data-bs-title="List"
          data-bs-content="Hi here is your set of task"
        >
          See Tasks
        </button>

          
         
        </div> 

      <ul className="list-group">
        {sortedTodos.map((item) => (
          <li
            key={item.id}
            className={`list-group-item d-flex justify-content-between align-items-start ${getReminderClass(
              item.reminder
            )}`}
          >
            <div>
              <div>
                
                <strong>{item.text}</strong>
              </div>
              <div>
                <small>Created: {format(new Date(item.created), "PPpp")}</small>
              </div>
              <div>
                <small>
                  Priority: <strong>{item.priority}</strong>
                </small>
              </div>
              {item.reminder && (
                <div>
                  
                  <small>
                    Reminder: {format(new Date(item.reminder), "PPpp")}
                  </small>
                </div>
              )}
             </div> 
            <div>
              <button
                className="btn btn-outline-danger btn-sm"
                onClick={() => handleDelete(item.id)}
                title="Delete"
              >
                <i className="fas fa-trash"></i>
              </button>
              </div> 
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
