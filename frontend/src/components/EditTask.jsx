import React, { useEffect, useState } from "react";

function EditTask({ taskId, taskToEdit, closeModal, updateTask }) {
  // console.log("task to edit", taskToEdit);
  const [task, setTask] = useState(taskToEdit);

  useEffect(() => {
    setTask(taskToEdit);
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // const { title, description } = e.target.elements
    // console.log("updated title", task);
    updateTask(task)
    
  };

  // console.log("task", task.estimatedStartTime);

  return (
    <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative p-4 w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <button
            onClick={() => closeModal(null)}
            type="button"
            className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            {/* <span className="sr-only">Close modal</span> */}
          </button>
          <div className="p-4 md:p-5 text-center">
            {/* content starts here */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 mt-10">
              <div className="">
                <label
                  className="text-gray-700 text-sm font-bold mb-2 mr-16"
                  htmlFor="title"
                >
                  Title
                </label>
                <input
                  type="text"
                  className=" border-2 border-slate-400 bg-slate-100 rounded-md mr-4 h-10 w-64 px-1"
                  name="title"
                  value={task.title}
                  onChange={(e) => setTask({ ...task, title: e.target.value })}
                />
              </div>
              <div>
                <label
                  className="text-gray-700 text-sm font-bold mb-2 mr-5"
                  htmlFor="description"
                >
                  Description
                </label>
                <input
                  type="text"
                  className=" border-2 border-slate-400 bg-slate-100 rounded-md mr-4 h-14 w-64 px-1"
                  name="description"
                  value={task.description}
                  onChange={(e) =>
                    setTask({ ...task, description: e.target.value })
                  }
                />
              </div>
              <div>
                <label
                  className="text-gray-700 text-sm font-bold mb-2 mr-6"
                  htmlFor="start_level"
                >
                  Start time
                </label>
                <input
                  type="date"
                  id="task_start"
                  className=" border-2 border-slate-400 bg-slate-100 rounded-md h-10 w-64 px-1"
                  name="task_start"
                  value={task.estimatedStartTime}
                  onChange={(e) =>
                    setTask({ ...task, estimatedStartTime: e.target.value })
                  }
                />
              </div>
              <div className="flex items-center justify-end mr-3">
                <button
                  type="submit"
                  className="bg-cyan-500 rounded-md px-4 h-12 text-white w-4/12 "
                >
                  EDIT
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    // <div>{taskId}</div>
  );
}

export default EditTask;
