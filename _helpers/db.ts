import { DataSource } from "typeorm"
import { Student } from "../students/student.model"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "password",
    database: "practice",
    entities: [Student],
    logging: true,
    synchronize: true,
})

AppDataSource.initialize()
  .then(_ => {    
    console.log('data source has been initialized.')
  })
  .catch(Error => {
    console.log(`Error: ${Error}`)
  })