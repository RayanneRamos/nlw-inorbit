import logoImageSVG from "../assets/logo-in-orbit.svg";
import letsStartSVG from "../assets/illustration-lets-start.svg";
import { DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";

export function EmptyGoals() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-8">
      <img src={logoImageSVG} alt="in.orbit" />
      <img src={letsStartSVG} alt="lets start illustration" />
      <p className="text-zinc-300 leading-relaxed max-w-80 text-center">
        Você ainda não cadastrou nenhuma meta, que tal cadastrar uma agora
        mesmo?
      </p>
      <DialogTrigger asChild>
        <Button>
          <Plus className="size-4" />
          Cadastrar meta
        </Button>
      </DialogTrigger>
    </div>
  );
}
