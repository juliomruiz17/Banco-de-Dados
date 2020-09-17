const express = require('express')
const { Sequelize, DataTypes } = require('sequelize')
const task = require('./models/task')
const Task = require('./models/task')

const app = express()
const sequelize = new Sequelize('postgres://postgres:example@db:5432/task-list')
const tasks = Task(sequelize, DataTypes)

// We need to parse JSON coming from requests
app.use(express.json())

// List tasks
app.get('/tasks', async (req, res) => {
  tasks = await  Task.findAll();
  return res.json(tasks)
  }),

// Create task
app.post('/tasks', async(req, res) => {
  const { description, done} = req.body;
  tasks = await tasks.create({description, done});
  return res.json(tasks)
}),

// Show task
app.get('/tasks/:id', async (req, res) => {
  const { description,done } = req.body;
  tasks = await tasks.findByPk(req.params.id)
  return res.json(tasks)
}),

// Update task
app.put('/tasks/:id', async (req, res) => {
  const { description,done } = req.body;
  tasks = await tasks.update({description, done})
  return res.json(tasks)
}),

// Delete task
app.delete('/tasks/:id', async (req, res) => {
  const{description} = req.params;
  const{done} = req.body;
   task = await Task.destroy(req.bosy)
  return res.json(tasks)
}),

app.listen(3000, () =>  {
    console.log('Iniciando o Express JS na porta 3000')
})
