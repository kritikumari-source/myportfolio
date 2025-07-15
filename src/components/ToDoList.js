import React, { useState, useEffect } from "react";
import { format, differenceInMinutes, isPast, isFuture } from "date-fns";
import { gapi } from "gapi-script";
import "bootstrap/dist/css/bootstrap.min.css";
import * as bootstrap from "bootstrap/dist/js/bootstrap.bundle";
window.bootstrap = bootstrap;

const SCOPES = "https://www.googleapis.com/auth/calendar.events";

function App(props) {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [priority, setPriority] = useState("low");
  const [reminder, setReminder] = useState("");
  const audio = new Audio("/reminder.mp3"); // Add your audio file in public folder



     // Google Calendar Init
  useEffect(() => {
    function start() {
      gapi.client
        .init({
          apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
          clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
          discoveryDocs: [
            "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
          ],
          scope: SCOPES,
        })
        .then(() => {
          gapi.auth2.getAuthInstance().signIn();
        });
    }
    gapi.load("client:auth2", start);
  }, []);

  // Add to Google Calendar
  const addToGoogleCalendar = (todo) => {
    const event = {
      summary: todo.text,
      description: "Task from To-Do App",
      start: {
        dateTime: new Date(todo.reminder || new Date()).toISOString(),
        timeZone: "Asia/Kolkata",
      },
      end: {
        dateTime: new Date(
          new Date(todo.reminder || new Date()).getTime() + 30 * 60 * 1000
        ).toISOString(),
        timeZone: "Asia/Kolkata",
      },
    };

    gapi.client.calendar.events
      .insert({
        calendarId: "primary",
        resource: event,
      })
      .then(() => alert("✅ Added to Google Calendar!"))
      .catch((err) => {
        console.error(err);
        alert("❌ Failed to add to Google Calendar.");
      });
  };

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

  //dropdown
  useEffect(() => {
  const dropdowns = document.querySelectorAll('[data-bs-toggle="dropdown"]');
  dropdowns.forEach((dropdown) => {
    new bootstrap.Dropdown(dropdown);
  });
}, []);


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

  // useEffect(() => {
  //   const popoverTriggerList = document.querySelectorAll(
  //     '[data-bs-toggle="popover"]'
  //   );
  //   const popoverList = [...popoverTriggerList].map(
  //     (el) => new bootstrap.Popover(el)
  //   );
  //   return () => popoverList.forEach((p) => p.dispose());
  // }, []);

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
    <div className="todo-container container mt-4" style= {{height: '600px', backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}}>
       <h4>TO-DO List</h4>
     
    <div className="todo" style={{ height: '300px', marginTop: '90px', textAlign: 'center' }}>
           
            <div className="card" style={{width: '24rem', backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}}>
     <div className="card-body" style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}}>
          <div className="input-group mb-2" style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}}>  
            
 
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
             


       
           <div className="btn-group" style={{width:'22rem', marginTop: '1rem', backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}}>
            
  <button type="button" className="btn  dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" style= {{width:'22rem', marginTop: '1rem', backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}} >

     
 🎯 Prioritize your task
     <ul className="dropdown-menu dropdown-menu-end" > 
 
    <li><a className= {`btn ${
              priority === "high" ? "btn-danger" : "btn-outline-danger"
            }`}
            onClick= {() => setPriority("high")}
            href="/"> </a>High</li>
    <li><a className= {`btn ${
              priority === "medium" ? "btn-warning" : "btn-outline-warning"
            }`}
            onClick= {() => setPriority("medium")}
          href="/"></a>Medium</li>
    <li><a type="button"
            className= {`btn ${
              priority === "low" ? "btn-success" : "btn-outline-success"
            }`}
            onClick= {() => setPriority("low")}
          href="/"></a>Low</li>
          
      </ul>
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

        {/* <button
          type="button"
          className="btn btn-primary mb-2 me-2"
          data-bs-toggle="popover"
          data-bs-title="List"
          data-bs-content="Hi here is your set of task"
        >
          See Tasks
        </button> */}



        

       </div> 
        </div>
 </div>

      <ul className="list-group">
        {sortedTodos.map((item) => (
          <li
            key={item.id}
            className={`list-group-item d-flex justify-content-between align-items-start ${getReminderClass(
              item.reminder
            )}`}
          >
            <div style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}}>
              <div style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}}>
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
                <div style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}}>
                  <small>
                    Reminder: {format(new Date(item.reminder), "PPpp")}
                  </small>
                </div>
              )}
            </div>
            <div style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}}>
               <button
                className="btn btn-outline-primary btn-sm me-2"
                onClick={() => addToGoogleCalendar(item)}
                title="Add to Google Calendar"
              >
                <i className="fas fa-calendar-plus"></i>
              </button>
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

