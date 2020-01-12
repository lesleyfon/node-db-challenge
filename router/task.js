const express = require('express');
const { findTask } = require('./../helper/helperMethods')
const router = express.Router({
    mergeParams: true
})

router.use('/', async (req, res ) => {
    const tasks = await findTask().map(t =>{
        return {
            ...t,
            task_completed: (t.task_completed === 0) ? false : true,
           }
    });
    res.status(200).json(tasks)
})



module.exports = router;