let students = require("../data/students");

exports.getStudents = (req, res) => {
  res.json(students);
};

exports.getStudentById = (req, res) => {
  const student = students.find(s => s.id == req.params.id);
  res.json(student);
};

exports.addStudent = (req, res) => {
  students.push(req.body);
  res.json({ message: "Student added" });
};

exports.updateStudent = (req, res) => {
  const index = students.findIndex(s => s.id == req.params.id);
  students[index] = req.body;
  res.json({ message: "Student updated" });
};

exports.deleteStudent = (req, res) => {
  students = students.filter(s => s.id != req.params.id);
  res.json({ message: "Student deleted" });
};
