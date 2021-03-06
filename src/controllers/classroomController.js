
const Classroom = require("../models/classroom");
const Users = require("../models/user")

// Create a classroom
const createClassroom = async (req, res) => {
  try{
    const classroom = await Classroom.create(req.body);
    classroom.createdBy = req.userId;
    classroom.usersLoggedIn.push(req.userId);
    classroom.save();

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

// Login a classroom with currently user and return url to reunion
const loginClassroomById = async (req, res) => {
  try {
    const classroomRequested = await Classroom.findById(req.params.id);


    const participant = await Users.findById(req.userId);


    const participantsLogged = classroomRequested.usersLoggedIn;

    
    if (participantsLogged.length >= classroomRequested.maxParticipants) {
     return res.status(403).json({message: "Sala cheia, novos participants não são permitidos."})
    }

    
    if (classroomRequested.onlyWoman == true 
      && (participant.gender != "mulher cisgênero" 
      && participant.gender != "mulher transgênero")) {
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
    const classroomRequired = await Classroom.find({online: true}).select('-url -createdAt -updatedAt -__v').exec();
    if (!classroomRequired) {
      return res.status(200).json({message: "Não foi encontrada nenhuma sala online no momento"})
    }
    return res.status(200).json(classroomRequired);

  } catch(error){
    res.status(500).json({
        message: error.message
    })
  }
}

// Return classroom based on id
const getById = async (req, res) => {
  try{
    const requestedClassroom = await Classroom.findById(req.params.id).populate('createdBy').select("-url");

    if (!requestedClassroom) {
      return res.sendStatus(204);
    }

    return res.status(200).send(requestedClassroom)
    
  } catch(error) {
    return res.status(400).json({message: error.message})
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

    return res.status(200).json({message: 'Sala virtual offline: ', classroomRequired});

  } catch(error){
    res.status(500).json({
        message: error.message
    })
  }
}

// Return classroom based on filter
const getByType = async (req, res) => {
    try {
      const keyRequested = req.query;

      
      const classroomRequired = await Classroom.find(keyRequested).select('-url').exec();
  

      if (!classroomRequired) {
        return res.status(200).json({message: "Não foi encontrada nenhuma sala online no momento"})
      }

      return res.status(200).json(classroomRequired)
  
    } catch(error){
      return res.status(500).json({
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