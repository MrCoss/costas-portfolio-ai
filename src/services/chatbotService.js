import axios from "axios";
import portfolioData from "./portfolioData";

const OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions";

const chatService = async (prompt) => {
  const grounding = JSON.stringify(portfolioData);

  const systemPrompt = `
You are the AI Assistant for the portfolio of Costas Pinto.
Your answers MUST come only from the dataset below.

DATASET:
${grounding}

OUTPUT RULES:
1. Always answer in clean, natural human language.
2. Do NOT use tables, pipes, markdown formatting, bullet columns, or code blocks.
3. Keep your tone professional, concise, and conversational.
4. Summaries should read like a human explanation, not like structured data.
5. When listing items, use short sentences separated by commas or line breaks, not markdown lists.
6. Never invent information not present in the dataset.
7. If the question is outside the portfolio scope, reply:
   "This assistant only provides information about the portfolio."
`;


  try {
    const response = await axios.post(
      OPENROUTER_URL,
      {
        model: "openai/gpt-oss-20b",  // ← REQUIRED FOR FREE MODEL
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: prompt },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_OPENROUTER_API_KEY}`,
          "X-Title": "costas-portfolio-ai",
        },
      }
    );

    return response.data?.choices?.[0]?.message?.content || "No response.";
  } catch (err) {
    console.error("Chatbot error:", err.response?.data || err);
    return "The assistant is temporarily unavailable.";
  }
};

export default chatService;
