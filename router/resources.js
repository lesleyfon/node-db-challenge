const express = require('express');
const { findResources, postResource} = require('./../helper/helperMethods')
const router = express.Router({
    mergeParams: true
})

router.get('/', async (req, res ) => {
    const resources = await findResources();
    res.status(200).json(resources)
})

router.post('/', async (req, res) => {
    const { resource_name, resource_description } = req.body;

const resource = await postResource({ resource_name, resource_description })
    res.status(200).json({
        message: 'successful',
        resource
    })
})

module.exports = router;