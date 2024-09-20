import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyRequest,
  FastifyReply
} from 'fastify'
import { CreateDietController } from './controllers/create-diet'

export async function routes( fastify: FastifyInstance, options: FastifyPluginOptions) {
  fastify.get("/test", (request: FastifyRequest, reply: FastifyReply) => {
    console.log("Teste")
    reply.send({ ok: true})
  })

  fastify.get("/diet", async (request: FastifyRequest, reply: FastifyReply) => {
    return new CreateDietController().handle(request, reply)
  })
}