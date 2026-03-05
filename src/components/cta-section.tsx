import { Button } from "@/components/ui/button"
import { GameMenu } from "@/components/game-menu"

export function CTASection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
      <div className="max-w-4xl mx-auto text-center">
        <div className="slide-up">
          <h2 className="text-5xl font-bold text-foreground mb-6 font-sans text-balance">Готов войти в зону?</h2>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
            Скачай игру, выберись с корабля вместе с друзьями и доберись до реактора.
            Зона отчуждения ждёт — ты готов?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <GameMenu />
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-4 bg-transparent"
            >
              Смотреть трейлер
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
