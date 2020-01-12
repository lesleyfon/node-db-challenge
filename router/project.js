const express = require("express");
const { findProjects, findResources, findProjectById} = require("./../helper/helperMethods");
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
    console.log(project)
  res.status(200).json(project);
});

module.exports = router;
