import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed",
    });
  }

  try {
    const { message } = req.body;

    if (!message || typeof message !== "string") {
      return res.status(400).json({
        error: "Message is required",
      });
    }

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

    return res.status(200).json({
      response: interaction.output_text,
    });
  } catch (error) {
    console.error("Error Gemini:", error);

    return res.status(500).json({
      error: "Error al procesar el mensaje",
    });
  }
}
