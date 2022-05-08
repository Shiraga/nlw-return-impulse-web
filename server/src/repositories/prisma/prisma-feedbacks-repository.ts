import { prisma } from "../../prisma";
import { FeedbackCreateData, FeedbacksRepository } from "../feedbacks-repository";

export class PrismaFeedbacksRepository implements FeedbacksRepository {
    async create({ type, comment, screenshot }: FeedbackCreateData) {
        await prisma.feedback.create({ //Espera operacao no banco ser finalizada para dar info pro front
            data: {
                type,
                comment,
                screenshot,
                // type: req.body.type,
                // comment: req.body.comment,
                // screenshot: req.body.screenshot,
            }
        });
    }
}