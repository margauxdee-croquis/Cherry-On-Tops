import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

export const analyzeStyleImage = async (base64Image: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        {
          parts: [
            { inlineData: { data: base64Image, mimeType: "image/jpeg" } },
            { text: "Analyze this fashion inspiration image. Describe the key items (tops, bottoms, outerwear), colors, and overall aesthetic in a few bullet points. Then, suggest what kind of second-hand items a user should look for to recreate this look. Return the analysis in plain text." }
          ]
        }
      ]
    });

    return response.text;
  } catch (error) {
    console.error("Gemini analysis error:", error);
    return "Unable to analyze the image at the moment. Try describing the look instead!";
  }
};
