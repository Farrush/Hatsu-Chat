import { NextRequest, NextResponse } from 'next/server';
import { InferenceClient } from "@huggingface/inference";


const client = new InferenceClient(process.env.HF_TOKEN);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function POST(req: NextRequest) {
    const { messages } = await req.json()

    try {
      //throw new Error('Payment Required', {cause: 'Quota exhausted'})
        const chatCompletion = await client.chatCompletion({
            provider: "together",
            model: "meta-llama/Meta-Llama-3-70B-Instruct",
            messages: messages,
            max_tokens: 200,
            temperature: 0.5
        });

        return NextResponse.json({ reply: chatCompletion.choices[0].message });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      const erro: string = error.response?.data || error.message
    console.error('Erro na API:', erro);
      if(erro.includes('Payment Required') || erro.includes('Forbidden') || erro.includes('Usage limit') || erro.includes('Quota exhausted'))
        return NextResponse.json(
          {error: "Infelizmente, atingimos o limite de uso disponível da IA neste momento. Assim que for possível, voltarei a responder suas mensagens."},
          {status: 403}
        )
    return NextResponse.json(
      { error: 'Erro ao conectar à IA' },
      { status: 500 }
    );
  }
}