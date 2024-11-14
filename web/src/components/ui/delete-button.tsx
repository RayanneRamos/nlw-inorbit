import type { ButtonHTMLAttributes, ReactNode } from "react";

interface DeleteButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function DeleteButton({ children, ...props }: DeleteButtonProps) {
  return (
    <button
      className="outlined-node text-zinc-500 font-normal text-xs underline bg-none hover:text-zinc-700"
      {...props}
    >
      {children}
    </button>
  );
}
