import { Challenge } from './../../domain/entities/challenge';
import { Student } from './../../domain/entities/student';
import { StudentsRepository } from './repositories/StudentsRepository';
import { privateDecrypt } from 'crypto';
import { Submission } from '../../domain/entities/submission';
import { ChallengesRepository } from './repositories/ChallengeRepository';

type CreateChallengeSubmissionRequest = {
    studentId: string;
    challengeId: string;
}

export class CreateChallengeSubmission {

    constructor ( 
        private studentsRepository: StudentsRepository,
        private challengeRepository: ChallengesRepository
    ) {}

    async execute({ studentId, challengeId }: CreateChallengeSubmissionRequest) {

        const student = await this.studentsRepository.findById(studentId)

        if(!student){
            throw new Error('Students does not exists')
        }

        const challenge = await this.challengeRepository.findById(challengeId)

        if(!challenge){
            throw new Error('Challenges does not exists')
        }

        const submission = String

        return submission
    }
}