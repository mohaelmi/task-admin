const fs = require('fs');
const express = require('express');
const router = express.Router();
const {tasksData, users} = require('../data.js')



// get all tasksData 
router.get('/', (req, res) => {
  res.json(tasksData);

});

// get tasksData for specific user 
router.get('/:id', (req, res) => {

  const data = tasksData.filter(task => task.userId === Number(req.params.id))
  res.json(data);

});

// add a new task 
router.post("/new", (req, res) => {

  const newTask = req.body
  tasksData.push(newTask)
  res.json({message: "added successfully!!"});
  
});


// edit a new task 
router.get("/edit/:id", (req, res) => {
  const id = parseInt(req.params.id)
  const task = tasksData.find(task => task.id === id)
  if(task) { 
    res.json(task)
  }
  res.json({message: "task not found"});
  
});



module.exports = router;
