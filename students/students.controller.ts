// Handles API requests and responses.

import express, { Request, Response } from "express";
import { StudentService } from "./student.service";
const studentRouter = express.Router()
const studentService = new StudentService()


studentRouter.get('/', getStudents)
studentRouter.get('/:id', getById)
studentRouter.post('/', addStudent)
studentRouter.put('/:id', updateStudent)
studentRouter.delete('/:id', _deleteStudent)

export default studentRouter



async function getStudents(req: Request, res: Response){
  const students = await studentService.getStudents()
  res.json(students)
}

async function addStudent(req: Request, res: Response){
  const { firstName, lastName } = req.body
  const newStudent = await studentService.addStudent(firstName, lastName)
  res.status(201).json({msg: 'Student created succesfully', newStudent})
}

async function getById(req: Request, res: Response){
  const student = await studentService.getById(Number(req.params.id))
  res.status(200).json(student)
}

async function updateStudent(req: Request, res: Response){
  const student = await studentService.updateStudent(Number(req.params.id), req.body)
  res.status(204).json({msg: 'Student updated succesfully', student})
}

async function _deleteStudent(req: Request, res: Response){
  studentService.deleteStudent(Number(req.params.id))
  res.status(204).json({ msg: 'Student deleted successfully'})
}



