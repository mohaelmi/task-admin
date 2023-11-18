import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import { useApplicationData } from "./hooks/useApplicationData";
import TaskList from "./components/TaskList";
import NewTask from "./components/NewTask";
import EditTask from "./components/EditTask";


function App() {
  const [state, createTask, handleDeleteTask, showEditComponent] = useApplicationData();



  return (
    <>
      <Toaster />
      <div className="bg-slate-200 w-9/12 flex flex-col justify-center items-center pt-5 pb-10 mx-auto gap-16 rounded-md">
        <NewTask createTask={createTask} />
        {/* <p>tasklist is below</p> */}
        {/* <TaskList tasks={state.taskData} deleteTask={handleDeleteTask} /> */}
        <TaskList tasks={state.taskData} deleteTask={handleDeleteTask} showEditComponent = {showEditComponent} />
        { state.showEdit && <EditTask taskToEdit = {state.taskToEdit}  /> }
      </div>
    </>
  );
}

export default App;
