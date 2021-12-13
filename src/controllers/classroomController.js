
const Classroom = require("../models/classroom");

// Create a classroom
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

const loginClassroomById = async (req, res) => {
  try {
    const classroomRequested = await Classroom.findById(req.params.id);
    const participantsLogged = classroomRequested.usersLoggedIn;
    if (participantsLogged.length >= classroomRequested.maxParticipants) {
     return res.status(403).json({message: "Sala cheia, novos participants não são permitidos."})
    }
    participantsLogged.push(req.userId);
    await classroomRequested.save()
   
    let url = classroomRequested.url;
    return res.status(200).json({
      message: "Logado com sucesso",
      url
    });
    

  } catch (err) {
    return res.status(500).json({
      message: err.message
    });
  }
}

// Return all classroom
const getAll = async (req, res) => {
  try {
    const classroomRequired = await Classroom.find().populate('createdBy').select('-url');
    return res.status(200).json(classroomRequired);

  } catch(error){
    res.status(500).json({
        message: error.message,
    })
  }
}

module.exports = {
  createClassroom,
  getAll,
  loginClassroomById
}