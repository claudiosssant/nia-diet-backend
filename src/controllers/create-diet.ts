import { FastifyRequest, FastifyReply} from 'fastify'

class CreateDietController{
  async handle(request: FastifyRequest, reply: FastifyReply){
    reply.send({ message: "Funcionou!"})
  }
}

export { CreateDietController };