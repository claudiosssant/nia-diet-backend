import { FastifyRequest, FastifyReply} from 'fastify'
import { CreateDietService } from '../services/create-diet-service'


interface UserDataProps {
  age: string,
  name: string,
  weight: string,
  height: string,
  frequency: string,
  objective: string,
}
class CreateDietController{
  async handle(request: FastifyRequest, reply: FastifyReply){
    const {age, name, weight, height, frequency, objective} = request.body;
    
    const createDiet = new CreateDietService();
    const diet = await createDiet.create();

    reply.send(diet);
  }
}

export { CreateDietController };