// Processes the data before sending it to the controller.

import { Student } from "./student.model";
import { AppDataSource } from "../_helpers/db";

export class StudentService{
  private studentRepo = AppDataSource.getRepository(Student)

  async getStudents(){
    return await this.studentRepo.find()
  }

  async addStudent(firstName: string, lastName: string){
    const newStudent = this.studentRepo.create({ firstName, lastName})
    return await this.studentRepo.save(newStudent)
  }

  async getById(id: number){
    return this.studentRepo.findOneBy({id: id})
  }

  async updateStudent(id: number, params: object){
      const student = await this.studentRepo.findOneBy({ id: id })

      if(!student) throw 'student not found'

      const updatedStudent = this.studentRepo.merge(student, params)
      return this.studentRepo.save(updatedStudent)
  }

  async deleteStudent(id: number){
    const deletedStudent = await this.studentRepo.findOneBy({ id: id})
    
    if(!deletedStudent) throw 'student not found'
    
    return await this.studentRepo.delete(deletedStudent)
  }
}