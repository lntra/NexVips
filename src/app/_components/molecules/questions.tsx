"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const faqData = [
  { question: "Como funcionam as taxas do gerenciador?", answer: "As taxas são variáveis e se ajustam de acordo com vendas mensais. Quanto mais você vende, menos taxa você paga! Isso incentiva o crescimento e recompensa quem movimenta mais. As faixas são automáticas e atualizadas mensalmente com base no desempenho." },
  { question: "De que forma receberei o dinheiro?", answer: "A integração é feita com Pushin-pay, uma plataforma de geração de pix que cobra taxas pequenas por transação e a opção ideal para utilizar no seu negócio, apenas alguns cliques você consegue sua chave API e o resto fica à comando do bot." },
  { question: "Posso mudar o grupo VIP ou configurar mais de um?", answer: "Sim! Você pode vincular e gerenciar múltiplos grupos VIP ao mesmo tempo. O sistema permite configurar regras específicas para cada grupo, além de facilitar a troca ou atualização de grupos a qualquer momento." },
  { question: "O bot remove mesmo quem não pagou?", answer: "Sim! O sistema monitora todos os usuários com base nas datas de pagamento e duração do acesso. Assim que o tempo expira ou o pagamento não é identificado, o bot automaticamente remove o usuário do grupo VIP, mantendo atualizado com quem está em dia." },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="w-full h-full text-white flex flex-col justify-center overflow-y-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">FAQs</h1>
      <div className="border-b-2 border-gray-600 pb-2"></div>
      <div className="space-y-4 mt-5 flex flex-col gap-5">
        {faqData.map((faq, index) => {
          const isOpen = activeIndex === index;

          return (
            <div key={index} className="border-b-2 border-gray-600 pb-2">
              <button
                className="w-full flex justify-between overflow-x-clip items-center text-left text-xl font-semibold focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <div className="min-w-[50vw] w-[90%]">
                  <span className="">{faq.question}</span>
                </div>
                <ChevronDown
                  className={`transform w-20 h-12 transition-transform duration-300 ${
                    isOpen ? "rotate-360" : "rotate-270"
                  }`}
                />
              </button>
              <div
                className={`transition-max-height duration-500 ease-in-out overflow-hidden`}
                style={{
                  maxHeight: isOpen ? "200px" : "0px",
                  opacity: isOpen ? 1 : 0,
                }}
              >
                <div className="text-gray-300 text-lg mt-2">{faq.answer}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
