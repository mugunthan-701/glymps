"use server";

import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.GOOGLE_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-pro-002",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

export async function generateTitle() {
  const parts = [
    { text: "input: grade - subject - topic - subtopic - type of question" },
    {
      text: 'output:"Create a series of 10 math problems focused on the concept of fractions, which are structured to gradually deepen the learner’s understanding. The problems should be designed in a way that after answering them, the learner will have a comprehensive grasp of fractions, from basic to more complex applications. Each problem should:Start with a real-life scenario or a relatable situation where fractions naturally come into play (e.g., dividing resources, measuring ingredients, etc.).Break down the problem into clear, logical steps to guide the learner toward the solution, ensuring that each step is easy to follow and promotes understanding.Conclude with a precise, final answer, ensuring the learner can confirm the correct application of their method.Be structured progressively, beginning with simpler fractions and advancing to more challenging, multi-step problems that require deeper understanding.Each question should aim to cover a key aspect of fractions (e.g., simplifying, adding/subtracting, multiplying/dividing, and applying fractions in word problems).After each problem, suggest a relevant YouTube video that explains the concept or solution process in a simple and engaging manner, reinforcing the learning experience.By the end of these 10 questions, the learner should feel confident and capable in understanding and working with fractions in various contexts."',
    },
  ];

  // const result = await model.generateContent({
  //   contents: [{ role: "user", parts }],
  //   generationConfig,
  // });
  // let text = model.generateContent(
  //   "input: 10 - math - algebra - expresson - basic to intermediate"
  // );
  const tagss = model.startChat({
    history: [{ role: "user", parts }],
  });
  const response = await tagss.sendMessage(
    "input: 10 - math - algebra - expresson - subjective"
  );
  let text = response.response.text();
  console.log(await text);
}
