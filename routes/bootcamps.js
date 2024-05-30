const express = require('express');
const {getBootcamps,getBootcamp,createBootcamp,replaceBootcamp,updateBootcamp,deleteBootcamp} = require('../controllers/bootcamps');
const router = express.Router();

router.route('/')
.get(getBootcamps)
.post(createBootcamp)

router.route('/:id')
.get(getBootcamp)
.put(replaceBootcamp)
.delete(deleteBootcamp)
.patch(updateBootcamp)


module.exports = router;