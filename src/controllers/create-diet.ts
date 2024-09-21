import { FastifyRequest, FastifyReply} from 'fastify'
import { CreateDietService } from '../services/create-diet-service'

class CreateDietController{
  async handle(request: FastifyRequest, reply: FastifyReply){
    
    const createDiet = new CreateDietService();
    const diet = await createDiet.create();

    reply.send(diet);
  }
}

export { CreateDietController };