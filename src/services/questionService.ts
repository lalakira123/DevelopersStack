import { CreateDataQuestion, CreateDataAnswer } from './../controllers/questionController.js';
import * as questionRepository from './../repositories/questionRepository.js';

async function postQuestion(question: CreateDataQuestion){
  await questionRepository.postQuestion(question);
}

async function postAnswer(answer: CreateDataAnswer){
  await questionRepository.postAnswer(answer);
}

async function listQuestions(){
  await questionRepository.listQuestions();
}

async function listQuestionById(id: number){
  await questionRepository.listQuestionById(id);
}

export {
  postQuestion,
  postAnswer,
  listQuestions,
  listQuestionById
}