import { StudentsRepository } from "../../src/application/use-cases/repositories/StudentsRepository";
import { Student } from "../../src/domain/entities/student";


export class InMemoryStudentsRepository implements StudentsRepository {

    public items: Student[] = [];

    async findById(id: string): Promise<Student | null> {
        //const student = this.items.find(student => student.id === id)
        const student = null;

        if(!student){
            return null;
        }

        return student;
    }
}