const Bootcamp = require('../models/Bootcamp');

//@desc Get all bootcamps
//@route GET /api/v1/bootcamps
//access Public
exports.getBootcamps = async (req,res,next)=>{
    try{
        const bootcamps = await Bootcamp.find();
        res.status(200).json({
            success:true,
            data:bootcamps
        })
    }
    catch(err){
        res.status(400).json({success:true})
    }
}

//@desc Get single bootcamp
//@route GET /api/v1/bootcamps/:id
//access public
exports.getBootcamp = async (req,res,next)=>{
    try{
        const bootcamp = await Bootcamp.findById(req.params.id);
        res.status(200).json({
            success:true,
            data:bootcamp
        })
    }
    catch(err){
        res.status(400).json({success:false});
    }
}

//@desc Create new bootcamp
//@route POST /api/v1/bootcamps
//access public
exports.createBootcamp = async (req,res, next)=>{
    try{
    const bootcamp = await Bootcamp.create(req.body)
    res.status(201).json({
        success:true,
        data:bootcamp
    })
    }catch(err){
        res.status(400).json({success:false,message:err.message})
    }
}

//@desc Replace a bootcamp with new data
//@route PUT /api/v1/bootcamps/:id
//access public
exports.replaceBootcamp = (req,res,next)=>{
    res.status(200).json({success:true,msg:`Replace bootcamp ${req.params.id} with new data`});
}

//@desc Update specific fields of a bootcamp
//@route PATCH /api/v1/bootcamps/:id
//access public
exports.updateBootcamp = async (req, res, next) => {
    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body,{
        new:true,
        runValidators:true
    });
    if(!bootcamp){
        return res.status(400).json({success:false})
    }
    res.status(200).json({success:true,data:bootcamp})
}
//@desc Delete a bootcamp
//@route DELETE /api/v1/bootcamps/:id
//access public
exports.deleteBootcamp = async (req,res,next)=>{
    try{
        const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
        if(!bootcamp){
            return res.status(400).json({success:false});
        }
        res.status(200).json({success:true,data:{}});
    }
    catch(err){
        res.status(400).json({success:false})
    }
}

