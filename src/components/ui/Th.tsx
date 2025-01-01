import { cn } from "@/utils";

interface ThProps extends React.HTMLAttributes<HTMLTableCellElement> {
  children: React.ReactNode
  className?: string;
}

export const Th = ({ children, className, ...props }: ThProps) => {
  return <th className={cn("align-top text-left border border-white py-[7px] px-2", className ?? "")} {...props}>{children}</th>;
};