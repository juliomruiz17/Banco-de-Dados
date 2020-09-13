import task from "../models/task";
 
class TasksController {
  async store(req, res) {
    const tasks = await tasks.create(req.body);
    return res.json(tasks)
  }
  async index(req, res) {
    const tasks = await tasks.findAll();
    return res.json(tasks)
  }
  async update(req, res) {
    let tasks = await tasks.findByPk(req.params.id)
    tasks = await tasks.update(req.body)
    return res.json(tasks)
  }
  async delete(req, res) {
    let tasks = await tasks.findByPk(req.params.id)
    tasks = await tasks.destroy(req.body)
    return res.json(tasks)
  }
  async show(req, res) {
    let tasks = await tasks.findByPk(req.params.id)
    return res.json(tasks)
  }
}
 
export default new TasksController();