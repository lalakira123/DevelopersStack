import { Request, Response } from "express";
import * as answerService from "../services/answerService.js";
import * as questionService  from "../services/questionService.js";
import { Question, Answer } from '@prisma/client';

export type CreateDataQuestion = Omit<Question, "id">;
export type CreateDataAnswer = Omit<Answer, "id">;

export async function create(req: Request, res: Response) {
  const question: CreateDataQuestion = req.body;

  await questionService.postQuestion(question);

  res.sendStatus(201);
}

export async function answer(req: Request, res: Response) {
  let answer: CreateDataAnswer = req.body;
  const { id } = req.params; 
  answer = {
    ...answer,
    questionId: Number(id)
  }

  await questionService.postAnswer(answer);

  res.sendStatus(201);
}

export async function get(req: Request, res: Response) {
  const questions = await questionService.listQuestions();
  
  res.status(200).send(questions);
}

export async function getById(req: Request, res: Response) {
  const { id } = req.params;

  const question = await questionService.listQuestionById(Number(id));

  res.status(200).send(question);
}
