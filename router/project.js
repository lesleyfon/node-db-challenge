const express = require("express");
const { findProjects, postProject, findProjectById} = require("./../helper/helperMethods");
const router = express.Router();
const taskRoute = require("./task");
const resourcesRoute = require("./resources");

router.use('/task', taskRoute)
router.use('/resources', resourcesRoute)


router.get("/", async (req, res) => {
  const projects = await findProjects();
  res.status(200).json(projects);
});

router.get("/:id",  async (req, res) => {
    const { id } = req.params
  const project = await findProjectById(id);
  res.status(200).json(project);
});

router.post('/', async (req, res, next)=> {
    const { project_name, project_description, project_completed } = req.body;

    const project = await postProject({project_name, project_description, project_completed })
    res.status(200).json({
        message: 'successful',
        project
    })
})

module.exports = router;
