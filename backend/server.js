const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

// In-memory demo data
let students = [
  { id: 1, name: "Alice", internships: ["Google", "Amazon"] },
  { id: 2, name: "Bob", internships: ["Microsoft"] },
];
let colleges = [{ id: 1, name: "ABC College", students: [1, 2] }];
let industries = [
  { id: 1, name: "Google", opportunities: ["Software Intern"] },
  { id: 2, name: "Amazon", opportunities: ["Cloud Intern"] },
];

// Student Dashboard API
app.get("/api/student", (req, res) => {
  res.json(students);
});

// College Dashboard API
app.get("/api/college", (req, res) => {
  res.json(colleges);
});

// Industry Dashboard API
app.get("/api/industry", (req, res) => {
  res.json(industries);
});

// Example: Add new internship for student
app.post("/api/student/:id/internship", (req, res) => {
  const student = students.find((s) => s.id === parseInt(req.params.id));
  if (student && req.body.internship) {
    student.internships.push(req.body.internship);
    res.json(student);
  } else {
    res.status(400).json({ error: "Invalid student or internship" });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
