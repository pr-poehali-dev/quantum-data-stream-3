import { Timeline } from "@/components/ui/timeline"

export function ApplicationsTimeline() {
  const data = [
    {
      title: "Миссия 1 — Осколок реактора",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Ты на 4-м энергоблоке реактора. Найди осколок — он чёрного цвета и хорошо скрыт среди обломков.
            Используй пропуск, чтобы активировать его. После активации осколок станет серым — миссия выполнена.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Найди чёрный осколок среди руин реактора
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Используй пропуск для активации
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Осколок станет серым — цель достигнута
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Миссия 2 — 3-й энергоблок",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Друзья ушли зачищать 3-й энергоблок — там засели монстры. Твоя задача — прикрыть и помочь.
            Уничтожь всех тварей, и друзья вернутся обратно. Береги патроны P90 и не трать гранаты зря.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Зачисти 3-й энергоблок от монстров
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Держи оборону пока друзья внутри
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Дождись возвращения всего отряда
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Миссия 3 — Возвращение на корабль",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Все миссии выполнены — теперь главное выбраться живыми. Весь отряд вместе движется обратно к кораблю.
            Путь назад опасен — монстры не дремлют. Используй бинт если ранен. Корабль ждёт.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Отряд движется к кораблю вместе
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Используй бинт при критическом уроне
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Доберись до корабля — и победа за вами
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id="applications" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">Три миссии на реакторе</h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Ты прошёл 500 км пешком, выжил среди монстров и добрался до 4-го энергоблока.
            Впереди — три миссии, от которых зависит всё.
          </p>
        </div>

        <div className="relative">
          <Timeline data={data} />
        </div>
      </div>
    </section>
  )
}