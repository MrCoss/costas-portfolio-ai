// /src/services/chatbotService.js
import axios from "axios";
import portfolioData from "./portfolioData";
import { summarizeProject, summarizeSkills, summarizeExperience } from "./summaries";

const OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions";

export const sendMessageToLLM = async (prompt) => {
  const grounding = JSON.stringify(portfolioData);

  const systemPrompt = `
You are the AI Assistant for the portfolio of Costas Pinto.
Your knowledge MUST come ONLY from the portfolio dataset below. 
NEVER answer anything outside the portfolio domain.

DATASET:
${grounding}

RULES:
1. Answer only about: skills, projects, experience, certifications, education, summary, or contact.
2. If the user asks anything else, say: "This assistant only provides information about the portfolio."
3. You must be concise, technical, structured, and professional.
4. Do not create information that is not present in the dataset.
5. For project questions, summarize using structured formatting.
6. For skills or experience, provide grouped summaries.
`;

  try {
    const response = await axios.post(
      OPENROUTER_URL,
      {
        model: import.meta.env.VITE_MIXTRAL_MODEL || "openai/gpt-oss-20b",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: prompt },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_OPENROUTER_API_KEY}`,
          "HTTP-Referer": import.meta.env.VITE_PUBLIC_URL || "http://localhost:5173",
          "X-Title": "portfolio-ai-assistant",
        },
      }
    );

    return response.data?.choices?.[0]?.message?.content || "No response.";
  } catch (err) {
    console.error("Chatbot error:", err);
    return "The assistant is temporarily unavailable.";
  }
};
