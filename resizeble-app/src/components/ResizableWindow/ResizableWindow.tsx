import { Resizable } from "re-resizable";

type Props = {
  children: React.ReactNode;
  className: string;
}

export const ResizableWindow: React.FC<Props> = ({ children, className }) => {
  return (
    <Resizable
      minWidth={150}
      minHeight={150}
      className={`window ${className}`}
    >
      {children}
    </Resizable>
  );
};