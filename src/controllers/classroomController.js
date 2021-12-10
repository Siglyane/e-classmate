
const Classroom = require("../models/classroom");


const createClassroom = async (req, res) => {

  try{
    const body = req.body;
    body.createdBy = req.userId;
    
    const classroom = await Classroom.create(body);
    classroom.usersLoggedIn.push(req.userId);
    classroom.save()

    return res.status(200).json({
      message: "Sala criada com sucesso", 
      classroom
    })
  } catch (err) {
    return res.status(500).json({
      message: err.message
    });
  }
};

const getAll = async (req, res) => {
  try {
    const classroomRequired = await Classroom.find().populate('createdBy');
    return res.status(200).json(classroomRequired);

  } catch(error){
    res.status(500).json({
        message: error.message,
    })
  }
}

module.exports = {
  createClassroom,
  getAll
}