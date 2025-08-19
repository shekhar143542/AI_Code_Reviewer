
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
    throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const getReviewPrompt = (code: string, language: string): string => {
  return `
You are a world-class senior software engineer acting as an automated code reviewer. Your goal is to provide a thorough, constructive, and helpful review of the provided code snippet.

**Language:** ${language}

**Code to Review:**
\`\`\`${language.toLowerCase()}
${code}
\`\`\`

**Instructions:**
1.  **Overall Summary:** Start with a brief, high-level summary of the code's quality and purpose.
2.  **Bugs & Potential Errors:** Identify any logical errors, potential runtime errors, or edge cases that are not handled. Be specific.
3.  **Style & Readability:** Comment on code style, naming conventions, and overall readability. Suggest improvements to make the code cleaner and more maintainable.
4.  **Performance:** Point out any potential performance bottlenecks and suggest optimizations if applicable.
5.  **Best Practices & Security:** Check if the code follows language-specific best practices and identify any potential security vulnerabilities (e.g., injection attacks, insecure handling of data).
6.  **Refactoring Suggestions:** If significant improvements can be made, provide a refactored version of the code. Explain the benefits of your proposed changes.

**Output Format:**
- Use Markdown for formatting.
- Use headings (e.g., "### Bugs & Potential Errors") to structure your feedback.
- Use code blocks for all code snippets.
- Be clear, concise, and professional in your tone.
`;
};

export const reviewCode = async (code: string, language: string): Promise<string> => {
  try {
    const prompt = getReviewPrompt(code, language);

    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt
    });
    
    return response.text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    if (error instanceof Error) {
        return `Failed to get review from Gemini API: ${error.message}`;
    }
    return "An unknown error occurred while fetching the code review.";
  }
};
