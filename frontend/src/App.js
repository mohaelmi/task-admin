import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Toaster } from 'react-hot-toast';
import { useApplicationData } from './hooks/useApplicationData';
import TaskList from './components/TaskList';
import NewTask from './components/NewTask';
import EditTask from './components/EditTask';
import Header from './components/Header';


function App() {
  const [state, createTask, handleDeleteTask, showEditTask, toggleModal] = useApplicationData();



  return (
    <>
      <Toaster />
      <Header />
      <div className="bg-slate-100 w-9/12 flex flex-col justify-center items-center pt-32 pb-10 mx-auto gap-16 rounded-md">
        <NewTask createTask={createTask} />
        {/* <p>tasklist is below</p> */}
        {/* <TaskList tasks={state.taskData} deleteTask={handleDeleteTask} /> */}
        <TaskList tasks={state.taskData} deleteTask={handleDeleteTask} openModal = {toggleModal} showEditTask = {showEditTask} />
        {state.showModel && <EditTask taskToEdit = {state.taskToEdit} closeModal= {toggleModal} /> }
      </div>
    </>
  );
}

export default App;

