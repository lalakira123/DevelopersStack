import { Question } from '@prisma/client';
import { prisma } from './../config/database.js';

import { CreateDataQuestion, CreateDataAnswer } from './../controllers/questionController.js';

async function postQuestion(quest: CreateDataQuestion){
  const { question } = quest;
  await prisma.question.create({
    data: {
      question
    }
  })
}

async function postAnswer(ans: CreateDataAnswer){
  const { answer, questionId } = ans;
  await prisma.answer.create({
    data: {
      answer,
      questionId
    }
  })
}

async function listQuestions(){
  const questions = await prisma.question.findMany();
  return questions;
}

async function listQuestionById(id: number){
  const question = await prisma.question.findMany({
    where: {
      id
    },
    include: {
      Answer: true
    }
  })
  return question;
}

export {
  postQuestion,
  postAnswer,
  listQuestions,
  listQuestionById
}