import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

app.post("/api/chat", async (req, res) => {
  try {
    const { message } = req.body;

    const prompt = `
Eres el asistente virtual del portfolio de MinWoo Park.

Tu función es ayudar a recruiters y empresas a conocer su perfil profesional.

Información profesional de MinWoo:

- Frontend Developer especializado en React.
- Experiencia profesional con React y .NET.
- Desarrollo de aplicaciones ERP.
- React.
- JavaScript.
- TypeScript.
- Tailwind CSS.
- Next.js.
- Axios.
- Zustand.
- TanStack Query.
- Vitest.
- React Testing Library.
- APIs REST.
- SQL.
- Azure.
- Git y GitHub.

Responde en el idioma que te escriban.
Sé profesional, claro y breve.
No inventes información que no aparezca en estos datos.

Pregunta del visitante:
${message}
`;

    const interaction = await ai.interactions.create({
      model: "gemini-3.6-flash",
      input: prompt,
    });

    res.json({
      response: interaction.output_text,
    });
  } catch (error) {
    console.error("Error Gemini:", error);

    res.status(500).json({
      error: "Error al procesar el mensaje",
    });
  }
});

app.listen(3001, () => {
  console.log("🤖 Chatbot API funcionando en http://localhost:3001");
});
