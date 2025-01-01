import { cn } from "@/utils";

interface TdProps extends React.HTMLAttributes<HTMLTableCellElement> {
  children: React.ReactNode;
  className?: string;
  colSpan?: number;
  rowSpan?: number;
}

export const Td = ({ children, className, ...props }: TdProps) => {
  return <td className={cn("align-top text-left border border-white py-[7px] px-2", className ?? "")} {...props}>{children}</td>;
};