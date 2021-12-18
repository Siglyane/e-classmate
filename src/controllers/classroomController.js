
const Classroom = require("../models/classroom");
const Users = require("../models/user")

// Create a classroom
const createClassroom = async (req, res) => {
  try{
    const body = req.body;
    body.createdBy = req.userId;
    
    const classroom = await Classroom.create(body);
    classroom.usersLoggedIn.push(req.userId);
    classroom.save()

    return res.status(201).json({
      message: "Sala criada com sucesso",
      classroom
    })
  } catch (err) {
    return res.status(500).json({
      message: err.message
    });
  }
};

//TODO: Arrumar erro
// Login a classroom with currently user and return url to reunion
const loginClassroomById = async (req, res) => {
  try {
    const classroomRequested = await Classroom.findById(req.params.id);


    const participantsLogged = classroomRequested.usersLoggedIn;

    if (participantsLogged.length >= classroomRequested.maxParticipants) {
     return res.status(403).json({message: "Sala cheia, novos participants não são permitidos."})
    }

    const participant = await Users.findById(req.userId);

    if (classroomRequested.onlyWoman == true 
      && (participant.gender != "mulher cisgênero" 
      || participant.gender != "mulher transgênero")) {
        return res.status(403).json({message: "Você não pode acessar esta sala"})
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

// Return all classroom online
const getAll = async (req, res) => {
  try {
    const classroomRequired = await Classroom.find({online: true}).populate('createdBy').select('-url').exec();
    if (!classroomRequired) {
      return res.status(404).json({message: "Não foi encontrada nenhuma sala online no momento"})
    }
    return res.status(200).json(classroomRequired);

  } catch(error){
    res.status(500).json({
        message: error.message
    })
  }
}

const getById = async (req, res) => {
  try{
    const requestedClassroom = await Classroom.findById(req.params.id);

    if (!requestedClassroom) {
      return res.status(404).json({message: "Sala não encontrada"})
    }

    return res.status(200).send(requestedClassroom)
    
  } catch(error) {
    return res.status(500).json({message: error.message})
  }
}

// Change status to offline by classroom id [online: false]
const classroomOffline = async (req, res) => {
  try {
    const classroomRequired = await Classroom.findById(req.params.id);

    if(classroomRequired.createdBy != req.userId) {
      return res.status(403).json({message: "Você não possui autorização"})
    }

    classroomRequired.online = false;
    classroomRequired.save();

    return res.status(200).json(classroomRequired);

  } catch(error){
    res.status(500).json({
        message: error.message
    })
  }
}

//TODO: Arrumar!
const getByType = async (req, res) => {
    try {
      const keyRequested = Object.keys(req.query);
      const valueRequested = req.query[keyRequested];

      const classroomRequired = await Classroom.find({keyRequested: new RegExp(valueRequested)}).select('-url');
     

      if (!classroomRequired) {
        return res.status(404).json({message: "Não foi encontrada nenhuma sala online no momento"})
      }

      return res.status(200).json(classroomRequired)
  
    } catch(error){
      res.status(500).json({
          message: error.message
      })
    }
}

module.exports = {
  createClassroom,
  getAll,
  loginClassroomById,
  classroomOffline,
  getByType,
  getById
}