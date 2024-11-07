import logo from "../assets/in-orbit-logo.svg";
import { Button } from "../components/ui/button";
import githubIcon from "../assets/github-icon.svg";

export function SignInWithGithub() {
  const githubUrl = new URL("https://github.com/login/oauth/authorize");

  githubUrl.searchParams.set("client_id", "Ov23liK01lkJQw1H7aZB");

  return (
    <main className="h-screen flex flex-col items-center justify-center gap-8">
      <img src={logo} alt="in.orbit" />

      <p className="text-zinc-300 leading-relaxed max-w-80 text-center">
        Conclua suas metas semanais, ganhe experiência e suba de nível!
      </p>

      <a href={githubUrl.toString()}>
        <Button
          asChild
          className="bg-white text-black hover:bg-white hover:opacity-60"
        >
          <img src={githubIcon} className="h-5 w-5" />
          Entrar com github
        </Button>
      </a>
    </main>
  );
}
