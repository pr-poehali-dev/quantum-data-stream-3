import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"

type Screen = "install" | "main" | "game"

export function GameMenu() {
  const [screen, setScreen] = useState<Screen>("install")
  const [open, setOpen] = useState(false)

  const handleInstall = () => {
    setScreen("main")
    setOpen(true)
  }

  const handleGame = () => {
    setScreen("game")
  }

  const handleBack = () => {
    setScreen("main")
  }

  return (
    <>
      <Button
        size="lg"
        className="bg-red-500 hover:bg-red-600 text-white font-orbitron pulse-button text-lg px-10 py-5 mt-4"
        onClick={handleInstall}
      >
        Установить
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-black border border-red-500/40 p-0 max-w-sm w-full overflow-hidden shadow-2xl shadow-red-900/30">
          {screen === "main" && (
            <div className="flex flex-col items-center py-12 px-8 gap-4">
              <h2 className="font-orbitron text-2xl font-bold text-white mb-6 tracking-widest uppercase">
                ЗОНА<span className="text-red-500">X</span>
              </h2>
              <Button
                className="w-full bg-red-500 hover:bg-red-600 text-white font-orbitron text-base py-5 tracking-wider"
                onClick={handleGame}
              >
                ИГРА
              </Button>
              <Button
                variant="outline"
                className="w-full border-red-500/40 text-gray-300 hover:bg-red-500/10 hover:text-white font-orbitron text-base py-5 tracking-wider bg-transparent"
              >
                НАСТРОЙКИ
              </Button>
              <Button
                variant="outline"
                className="w-full border-red-500/40 text-gray-300 hover:bg-red-500/10 hover:text-white font-orbitron text-base py-5 tracking-wider bg-transparent"
                onClick={() => setOpen(false)}
              >
                ВЫХОД
              </Button>
            </div>
          )}

          {screen === "game" && (
            <div className="flex flex-col items-center py-12 px-8 gap-4">
              <h2 className="font-orbitron text-2xl font-bold text-white mb-6 tracking-widest uppercase">
                ИГРА
              </h2>
              <Button
                className="w-full bg-red-500 hover:bg-red-600 text-white font-orbitron text-base py-5 tracking-wider"
              >
                НОВАЯ ИГРА
              </Button>
              <Button
                variant="outline"
                className="w-full border-red-500/40 text-gray-300 hover:bg-red-500/10 hover:text-white font-orbitron text-base py-5 tracking-wider bg-transparent"
              >
                ПРОДОЛЖИТЬ
              </Button>
              <Button
                variant="outline"
                className="w-full border-red-500/40 text-gray-400 hover:bg-red-500/10 hover:text-white font-orbitron text-sm py-5 tracking-wider bg-transparent mt-2"
                onClick={handleBack}
              >
                НАЗАД
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}

export default GameMenu
