import { Loader2 } from "lucide-react";
import { useEffect } from "react";
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";
import { useAuthenticateFromGithub } from "../http/generated/api";
import Cookies from "universal-cookie";

export function SignInWithGithubCallback() {
  const [searchParams] = useSearchParams();
  const code = searchParams.get("code");
  const { mutateAsync: authenticateFromGithub } = useAuthenticateFromGithub();
  const navigate = useNavigate();

  if (!code) {
    return <Navigate to="/" />;
  }

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    authenticateFromGithub({ data: { code } }).then((response) => {
      const token = response.token;
      const cookies = new Cookies();

      cookies.set("in-orbit.token", token, {
        path: "/",
        sameSite: "lax",
        maxAge: 60 * 60 * 24,
      });

      console.log(token);
      navigate("/app");
    });
  }, []);

  return (
    <div className="h-screen flex items-center justify-center">
      <Loader2 className="size-6 text-gray-500 animate-spin" />
    </div>
  );
}
