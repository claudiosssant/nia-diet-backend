import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyRequest,
  FastifyReply
} from 'fastify'
import { CreateDietController } from './controllers/create-diet'

export async function routes( fastify: FastifyInstance, options: FastifyPluginOptions) {
  fastify.get("/test", (request: FastifyRequest, reply: FastifyReply) => {
    
    let responseText = "```json\n{\n  \"nome\": \"Craudinho\",\n  \"sexo\": \"Masculino\",\n  \"idade\": 26,\n  \"altura\": 186,\n  \"peso\": 116,\n  \"objetivo\": \"Competir em lutas\",\n  \"refeicoes\": [\n    {\n      \"horario\": \"07:00\",\n      \"nome\": \"Cafe da Manha\",\n      \"alimentos\": [\n        \"2 fatias de pao integral\",\n        \"2 ovos mexidos com azeite\",\n        \"1 banana\",\n        \"1 copo de leite desnatado\",\n        \"1 colher de sopa de chia\"\n      ]\n    },\n    {\n      \"horario\": \"10:00\",\n      \"nome\": \"Lanche da Manha\",\n        \"alimentos\": [\n          \"1 iogurte grego com granola\",\n          \"1 maça\"\n        ]\n    },\n    {\n      \"horario\": \"13:00\",\n      \"nome\": \"Almoco\",\n      \"alimentos\": [\n        \"150g de frango grelhado\",\n        \"100g de batata doce cozida\",\n        \"100g de arroz integral\",\n        \"Salada verde com azeite e vinagre\"\n      ]\n    },\n    {\n      \"horario\": \"16:00\",\n      \"nome\": \"Lanche da Tarde\",\n      \"alimentos\": [\n        \"1 scoop de whey protein\",\n        \"1 batata doce pequena cozida\"\n      ]\n    },\n    {\n      \"horario\": \"19:00\",\n      \"nome\": \"Jantar\",\n      \"alimentos\": [\n        \"150g de peixe grelhado\",\n        \"100g de brócolis cozido\",\n        \"100g de quinoa\"\n      ]\n    },\n    {\n      \"horario\": \"21:00\",\n      \"nome\": \"Lanche antes de dormir\",\n        \"alimentos\": [\n          \"1 scoop de caseína\"\n        ]\n    }\n  ],\n  \"suplementos\": [\n    \"Whey Protein\",\n    \"Creatina\",\n    \"BCAA\",\n    \"Glutamina\",\n    \"Multivitamínico\"\n  ]\n}\n```\n"

    try {
      let jsonRefac = responseText.replace(/```\w*\n/g, '').replace(/\n```/g, '').trim();

      let jsonObject = JSON.parse(jsonRefac)

      return reply.send({ data: jsonObject });
    } catch (err) {
      console.log(err)
    }
  })

  fastify.post("/diet", async (request: FastifyRequest, reply: FastifyReply) => {
    return new CreateDietController().handle(request, reply)
  })
}