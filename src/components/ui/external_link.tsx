interface LinkProps {
  to: string;
  children: React.ReactNode;
  [key: string]: any;
}

export const ExternalLink = ({ to, children, ...props }: LinkProps) => {
  return (
    <a href={to} target="_blank" rel="noopener noreferrer" className="underline" {...props}>
      {children}
    </a>
  );
};