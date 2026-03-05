import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "С чего начинается игра?",
      answer:
        "Ты выходишь со старого корабля вместе с друзьями. Нужно пройти 500 км вперёд и 500 км вправо через опасную зону, чтобы добраться до реактора.",
    },
    {
      question: "Как получить оружие?",
      answer:
        "После встречи с монстрами друзья спасают тебя и выдают P90, две гранаты и бинт. Это всё твоё снаряжение на всю игру — используй с умом.",
    },
    {
      question: "Как попасть на реактор?",
      answer:
        "По пути ты найдёшь машину. На ней можно доехать до 4-го энергоблока, минуя часть опасного пути пешком.",
    },
    {
      question: "Что делать с чёрным осколком?",
      answer:
        "Найди осколок реактора в первой миссии — он чёрного цвета. Используй пропуск рядом с ним, и осколок станет серым. Это означает выполнение первой миссии.",
    },
    {
      question: "Что происходит на 3-м энергоблоке?",
      answer:
        "Друзья уходят на 3-й энергоблок зачищать монстров. Твоя задача — держать оборону снаружи и дождаться их возвращения. После победы над монстрами все собираются вместе.",
    },
    {
      question: "Чем заканчивается игра?",
      answer:
        "После выполнения трёх миссий весь отряд вместе возвращается на корабль. Добраться до него живым — и победа за вами!",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Всё что нужно знать перед тем как войти в зону отчуждения.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}