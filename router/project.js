const express = require("express");
const { findProjects, findResources} = require("./../helper/helperMethods");
const router = express.Router();

router.get("/", async (req, res) => {
  const projects = await findProjects();
  res.status(200).json(projects);
});
router.get("/resources", async (req, res) => {
  const resources = await findResources();
  res.status(200).json(resources);
});

module.exports = router;
