import { InMemoryStudentsRepository } from './../../../test/repositories/in-memory-students-repositoy';
import { StudentsRepository } from './repositories/StudentsRepository';
import { describe } from "node:test"
import { CreateChallengeSubmission } from "./create-challenge-submission"

describe('Create challenge submission use case', () => {
    it('Should be able to create a new challenge submission', async () => {
        const studentsRepository = new InMemoryStudentsRepository();
        const sut = new CreateChallengeSubmission(studentsRepository);
        
        const response = await sut.execute({
            studentId: 'fake-student-id',
            challengeId: 'fake-challenge-id'
        })

        expect(response).toBeTruthy()
    });
});