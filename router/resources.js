const express = require('express');
const { findResources } = require('./../helper/helperMethods')
const router = express.Router({
    mergeParams: true
})

router.use('/', async (req, res ) => {
    const resources = await findResources();
    res.status(200).json(resources)
})


module.exports = router;