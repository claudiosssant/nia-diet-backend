import { FastifyRequest, FastifyReply} from 'fastify'
import { CreateDietService } from '../services/create-diet-service'


export interface UserDataProps {
  age: string,
  name: string,
  gender: string,
  weight: string,
  height: string,
  frequency: string,
  objective: string,
}
class CreateDietController{
  async handle(request: FastifyRequest, reply: FastifyReply){
    const {age, name, weight, height, gender, frequency, objective} = request.body as UserDataProps;
    
    const createDiet = new CreateDietService();
    const diet = await createDiet.create({
      age,
      name,
      weight,
      height,
      gender,
      frequency,
      objective
    });

    reply.send(diet);
  }
}

export { CreateDietController };