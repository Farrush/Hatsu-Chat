//import { InferenceClient, HfInference } from '@huggingface/inference'
import { streamText } from 'ai';
import { deepinfra } from '@ai-sdk/deepinfra';

import { NextRequest, NextResponse } from 'next/server';
import { InferenceClient } from "@huggingface/inference";

const client = new InferenceClient(process.env.HF_TOKEN);

//const hf = new HfInference(process.env.HF_TOKEN);
//export const runtime = 'edge';

export async function POST(req: NextRequest) {


    const { messages } = await req.json()
    const model = 'meta-llama/Meta-Llama-3-8B-Instruct'
    const url = `https://api-inference.huggingface.co/models/${model}`;

    try {
        const chatCompletion = await client.chatCompletion({
            provider: "together",
            model: "meta-llama/Meta-Llama-3-70B-Instruct",
            messages: messages,
            max_tokens: 200,
            temperature: 0.5
        });

        return NextResponse.json({ reply: chatCompletion.choices[0].message });
    } catch (error: any) {
    console.error('Erro na API:', error.response?.data || error.message);
    return NextResponse.json(
      { error: 'Erro ao conectar à IA' },
      { status: 500 }
    );
  }
}