import { UserDataProps } from '../controllers/create-diet'
import { GoogleGenerativeAI } from '@google/generative-ai'

class CreateDietService {
  async create({}: UserDataProps){
    try {
      const gemini = new GoogleGenerativeAI(process.env.API_KEY!)
      const model = gemini.getGenerativeModel({ model: "gemini-1.5-flash"})

      const response = await model.generateContent(`Qual a raça de cachorro com a mordida mais forte`);

      console.log(JSON.stringify(response, null, 2))

      return { ok: true };
    } catch (err) {
      console.error("Erro na API", err)
      throw new Error ("Falha")
      
    }
  }
}

export { CreateDietService }