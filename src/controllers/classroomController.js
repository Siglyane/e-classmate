const Classroom = require("../models/classroom");

const createClassroom = async (req, res) => {
  try{
    console.log("controller")
    const classroom = await Classroom.create(req.body);

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

module.exports = {
  createClassroom
}