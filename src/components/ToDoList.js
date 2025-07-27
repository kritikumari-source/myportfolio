// import React, { useState, useEffect } from "react";
// import { format, differenceInMinutes, isPast, isFuture } from "date-fns";

// function App(props) {
//   const [todos, setTodos] = useState(() => {
//     const saved = localStorage.getItem("todos");
//     return saved ? JSON.parse(saved) : [];
//   });
//   const [text, setText] = useState("");
//   const [priority, setPriority] = useState("low");
//   const [reminder, setReminder] = useState("");
//   const [editId, setEditId] = useState(null);
//   const audio = new Audio("/reminder.mp3");

//   useEffect(() => {
//     localStorage.setItem("todos", JSON.stringify(todos));
//   }, [todos]);

//   // useEffect(() => {
//   //   const dropdowns = document.querySelectorAll('[data-bs-toggle="dropdown"]');
//   //   dropdowns.forEach((dropdown) => {
//   //     new bootstrap.Dropdown(dropdown);
//   //   });
//   // }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTodos((prevTodos) =>
//         prevTodos.map((todo) => {
//           if (
//             todo.reminder &&
//             !todo.reminded &&
//             new Date(todo.reminder) <= new Date()
//           ) {
//             if (Notification.permission === "granted") {
//               new Notification("⏰ Reminder", {
//                 body: todo.text,
//               });
//             }
//             audio.play();
//             if (navigator.vibrate) {
//               navigator.vibrate([200, 100, 200]);
//             }
//             return { ...todo, reminded: true };
//           }
//           return todo;
//         })
//       );
//     }, 30000);

//     return () => clearInterval(interval);
//   }, []);

//   const handleAdd = () => {
//     if (!text.trim()) return;

//     if (editId !== null) {
//       setTodos((prev) =>
//         prev.map((item) =>
//           item.id === editId
//             ? {
//                 ...item,
//                 text: text.trim(),
//                 priority,
//                 reminder,
//                 reminded: false,
//                 updated: new Date().toISOString(),
//               }
//             : item
//         )
//       );
//       setEditId(null);
//     } else {
//       const newItem = {
//         id: Date.now(),
//         text: text.trim(),
//         priority,
//         created: new Date().toISOString(),
//         reminder,
//         reminded: false,
//       };
//       setTodos((prev) => [...prev, newItem]);
//     }

//     setText("");
//     setReminder("");
//   };

//   const handleDelete = (id) => {
//     setTodos((prev) => prev.filter((item) => item.id !== id));
//   };

//   const handleEdit = (item) => {
//     setText(item.text);
//     setPriority(item.priority);
//     setReminder(item.reminder || "");
//     setEditId(item.id);
//   };

//   const priorityOrder = { high: 1, medium: 2, low: 3 };
//   const sortedTodos = [...todos].sort(
//     (a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]
//   );

//   const getReminderClass = (reminder) => {
//     if (!reminder) return "";
//     const time = new Date(reminder);
//     const diff = differenceInMinutes(time, new Date());
//     if (diff <= 1 && isFuture(time)) return "border-warning";
//     if (isPast(time)) return "border-danger text-danger";
//     return "";
//   };

//   return (
//     <div
//       className="todo-container container mt-4"
//       style={{
//                 borderRadius: "20px",
//         marginTop: "10px",
//         backgroundColor: props.mode === "dark" ? "#13466e" : "white",
//         color: props.mode === "dark" ? "white" : "#042743",
//       }}
//     >
//       <h3 style={{ textAlign: "center" }}>TO-DO List</h3>

//       <div
//         className="todo"
//         style={{
//           height: "300px",
//           marginTop: "120px",
//           textAlign: "center",
//           backgroundColor: props.mode === "dark" ? "#13466e" : "white",
//           color: props.mode === "dark" ? "white" : "#042743",
//         }}
//       >
//         <div
//           className="card"
//           style={{
//             width: "34rem",
//             textAlign: "center",
//             marginLeft: "25%",
//             height: "300px",
//             backgroundColor: props.mode === "dark" ? "#13466e" : "white",
//             color: props.mode === "dark" ? "white" : "#042743",
//           }}
//         >
//           <div className="card-body">
//             <div className="input-group mb-4 mt-4">
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="New task…"
//                 value={text}
//                 onChange={(e) => setText(e.target.value)}
//                 onKeyDown={(e) => e.key === "Enter" && handleAdd()}
//               />
//               <button className="btn btn-success" onClick={handleAdd}>
//                 {editId !== null ? (
//                   <i className="fas fa-save" title="Update"></i>
//                 ) : (
//                   <i className="fa fa-plus" aria-hidden="true" title="Add"></i>
//                 )}
//               </button>
//             </div>

//             <div
//               className="btn-group"
//               style={{
//                 width: "22rem",
//                 marginTop: "1rem",
//                 backgroundColor: props.mode === "dark" ? "#13466e" : "white",
//                 color: props.mode === "dark" ? "white" : "#042743",
//               }}
//             >
//               <button
//                 type="button"
//                 className="btn dropdown-toggle"
//                 data-bs-toggle="dropdown"
//                 aria-expanded="false"
//               >
//                 🎯 Prioritize your task
//               </button>
//               <ul className="dropdown-menu dropdown-menu-end">
//                 <li>
//                   <a
//                     className={`dropdown-item ${
//                       priority === "high" ? "active text-danger fw-bold" : ""
//                     }`}
//                     onClick={() => setPriority("high")}
//                     href="#"
//                   >
//                     🔴 High
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     className={`dropdown-item ${
//                       priority === "medium" ? "active text-warning fw-bold" : ""
//                     }`}
//                     onClick={() => setPriority("medium")}
//                     href="#"
//                   >
//                     🟠 Medium
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     className={`dropdown-item ${
//                       priority === "low" ? "active text-success fw-bold" : ""
//                     }`}
//                     onClick={() => setPriority("low")}
//                     href="#"
//                   >
//                     🟢 Low
//                   </a>
//                 </li>
//               </ul>
//             </div>

//             <h5 className="mb-2 mt-3">
//               <strong>Add Reminder</strong>
//             </h5>
//             <input
//               type="datetime-local"
//               className="form-control mb-2"
//               value={reminder}
//               onChange={(e) => {
//                 setReminder(e.target.value);
//                 e.target.blur();
//               }}
//             />
//           </div>
//         </div>
//       </div>

//       <ul className="list-group">
//         {sortedTodos.map((item) => (
//           <li
//             key={item.id}
//             className={`list-group-item d-flex justify-content-between align-items-start ${getReminderClass(
//               item.reminder
//             )}`}
//           >
//             <div>
//               <div>
//                 <strong>{item.text}</strong>
//               </div>
//               <div>
//                 <small>Created: {format(new Date(item.created), "PPpp")}</small>
//               </div>
//               <div>
//                 <small>
//                   Priority: <strong>{item.priority}</strong>
//                 </small>
//               </div>
//               {item.reminder && (
//                 <div>
//                   <small>
//                     Reminder: {format(new Date(item.reminder), "PPpp")}
//                   </small>
//                 </div>
//               )}
//               <button
//                 className="btn btn-outline-primary btn-sm me-2"
//                 onClick={() => handleEdit(item)}
//                 title="Edit"
//               >
//                 <i className="fas fa-edit"></i>
//               </button>
//               <button
//                 className="btn btn-outline-danger btn-sm"
//                 onClick={() => handleDelete(item.id)}
//                 title="Delete"
//               >
//                 <i className="fas fa-trash"></i>
//               </button>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;


import React, { useState, useEffect } from "react";
import { format, differenceInMinutes, isPast, isFuture } from "date-fns";

function App(props) {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });
  const [text, setText] = useState("");
  const [priority, setPriority] = useState("low");
  const [reminder, setReminder] = useState("");
  const [editId, setEditId] = useState(null);
  const audio = new Audio("/reminder.mp3");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTodos((prevTodos) =>
        prevTodos.map((todo) => {
          if (
            todo.reminder &&
            !todo.reminded &&
            new Date(todo.reminder) <= new Date()
          ) {
            if (Notification.permission === "granted") {
              new Notification("⏰ Reminder", {
                body: todo.text,
              });
            }
            audio.play();
            if (navigator.vibrate) {
              navigator.vibrate([200, 100, 200]);
            }
            return { ...todo, reminded: true };
          }
          return todo;
        })
      );
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const handleAdd = () => {
    if (!text.trim()) return;

    if (editId !== null) {
      setTodos((prev) =>
        prev.map((item) =>
          item.id === editId
            ? {
                ...item,
                text: text.trim(),
                priority,
                reminder,
                reminded: false,
                updated: new Date().toISOString(),
              }
            : item
        )
      );
      setEditId(null);
    } else {
      const newItem = {
        id: Date.now(),
        text: text.trim(),
        priority,
        created: new Date().toISOString(),
        reminder,
        reminded: false,
      };
      setTodos((prev) => [...prev, newItem]);
    }

    setText("");
    setReminder("");
  };

  const handleDelete = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  const handleEdit = (item) => {
    setText(item.text);
    setPriority(item.priority);
    setReminder(item.reminder || "");
    setEditId(item.id);
  };

  const priorityOrder = { high: 1, medium: 2, low: 3 };
  const sortedTodos = [...todos].sort(
    (a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]
  );

  const getReminderClass = (reminder) => {
    if (!reminder) return "";
    const time = new Date(reminder);
    const diff = differenceInMinutes(time, new Date());
    if (diff <= 1 && isFuture(time)) return "border-warning";
    if (isPast(time)) return "border-danger text-danger";
    return "";
  };

  return (
    <div
      className="container mt-4 p-4 rounded shadow"
      style={{
        backgroundColor: props.mode === "dark" ? "#13466e" : "#f8f9fa",
        color: props.mode === "dark" ? "#ffffff" : "#042743",
      }}
    >
      <h3 className="text-center mb-4">📝 TO-DO List</h3>

      <div className="card mx-auto mb-4 p-3" style={{ maxWidth: "600px", backgroundColor: props.mode === "dark" ? "#13466e" : "#f8f9fa",
        color: props.mode === "dark" ? "#ffffff" : "#042743", }}>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="New task…"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleAdd()}
          />
          <button className="btn btn-success" onClick={handleAdd}>
            {editId !== null ? (
              <i className="fas fa-save" title="Update"></i>
            ) : (
              <i className="fa fa-plus" aria-hidden="true" title="Add"></i>
            )}
          </button>
        </div>

        <div className="dropdown mb-3" style={{  backgroundColor: props.mode === "dark" ? "#13466e" : "#f8f9fa",
        color: props.mode === "dark" ? "#ffffff" : "#042743", }}>
          <button
            className="btn btn-outline-secondary dropdown-toggle w-100"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            🎯 Priority: {priority.charAt(0).toUpperCase() + priority.slice(1)}
          </button>
          <ul className="dropdown-menu w-100">
            <li>
              <a
                className="dropdown-item text-danger fw-bold"
                onClick={() => setPriority("high")}
                href="#"
              >
                🔴 High
              </a>
            </li>
            <li>
              <a
                className="dropdown-item text-warning fw-bold"
                onClick={() => setPriority("medium")}
                href="#"
              >
                🟠 Medium
              </a>
            </li>
            <li>
              <a
                className="dropdown-item text-success fw-bold"
                onClick={() => setPriority("low")}
                href="#"
              >
                🟢 Low
              </a>
            </li>
          </ul>
        </div>

        <label className="form-label fw-bold">⏰ Add Reminder</label>
        <input
          type="datetime-local"
          className="form-control"
          value={reminder}
          onChange={(e) => {
            setReminder(e.target.value);
            e.target.blur();
          }}
        />
      </div>

      <ul className="list-group">
        {sortedTodos.map((item) => (
          <li
            key={item.id}
            className={`list-group-item d-flex justify-content-between align-items-start flex-wrap  ${getReminderClass(
              item.reminder 
            )}`}
          >
            <div className="flex-grow-1" style={{  backgroundColor: props.mode === "dark" ? "#13466e" : "#f8f9fa",
        color: props.mode === "dark" ? "#ffffff" : "#042743", }}>
              <h5>{item.text}</h5>
              <div>
                <small>🕒 Created: {format(new Date(item.created), "PPpp")}</small>
              </div>
              <div>
                <small>⭐ Priority: {item.priority}</small>
              </div>
              {item.reminder && (
                <div>
                  <small>🔔 Reminder: {format(new Date(item.reminder), "PPpp")}</small>
                </div>
              )}
            {/* </div> */}
            <div className="btn-group">
              <button
                className="btn btn-outline-primary btn-sm"
                onClick={() => handleEdit(item)}
                title="Edit"
              >
                <i className="fas fa-edit"></i>
              </button>
              <button
                className="btn btn-outline-danger btn-sm"
                onClick={() => handleDelete(item.id)}
                title="Delete"
              >
                <i className="fas fa-trash"></i>
              </button>
            </div></div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

