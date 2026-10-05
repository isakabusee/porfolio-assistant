import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';
import { resume } from '@/data/resume';

export async function POST(req: Request) {
  const { messages } = await req.json();

  const systemPrompt = `
You are an AI assistant representing ${resume.name}.

Your job is to answer questions about Isaac's resume,
professional experience, technical skills, and projects.

Only use information contained in the resume context below.

If the answer is not available in the resume, say:

"I don't have that information in Isaac's resume."

Do not invent companies, technologies, years of experience,
responsibilities, or accomplishments.

Be concise and professional.

RESUME CONTEXT:

${JSON.stringify(resume, null, 2)}
`;

  const result = streamText({
    model: openai("gpt-5"),
    system: systemPrompt,
    messages,
  });

  return result.toUIMessageStreamResponse();
}