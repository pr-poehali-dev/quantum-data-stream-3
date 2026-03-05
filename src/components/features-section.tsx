import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "P90",
    description: "Друзья спасли тебя и вручили P90 — скорострельный пистолет-пулемёт. Незаменим против монстров в ближнем бою.",
    icon: "zap",
    badge: "Оружие",
  },
  {
    title: "Гранаты",
    description: "Две гранаты в запасе — используй с умом. Взрыв уничтожает группу монстров и открывает путь вперёд.",
    icon: "target",
    badge: "Взрывчатка",
  },
  {
    title: "Бинт",
    description: "Единственный медикамент. Восстанавливает здоровье после ранений — береги его для критических ситуаций.",
    icon: "brain",
    badge: "Аптечка",
  },
  {
    title: "Автомобиль",
    description: "На пути к реактору найдёшь машину. Быстрый транспорт через опасную зону — время решает всё.",
    icon: "globe",
    badge: "Транспорт",
  },
  {
    title: "Осколок реактора",
    description: "Чёрный осколок — ключ к первой миссии. После применения пропуска он станет серым. Будь внимателен.",
    icon: "lock",
    badge: "Миссия 1",
  },
  {
    title: "Друзья-напарники",
    description: "Твои друзья всегда рядом. Они прикрывают на 3-м энергоблоке и помогают выбраться обратно на корабль.",
    icon: "link",
    badge: "Отряд",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Снаряжение выжившего</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Всё что у тебя есть — используй правильно, и ты выберешься из зоны живым
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">
                    {feature.icon === "brain" && "&#129504;"}
                    {feature.icon === "lock" && "&#128274;"}
                    {feature.icon === "globe" && "&#127760;"}
                    {feature.icon === "zap" && "&#9889;"}
                    {feature.icon === "link" && "&#128279;"}
                    {feature.icon === "target" && "&#127919;"}
                  </span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}