interface FooterProps {
  text?: string;
  fontSize?: number;
}

export default function Footer({ 
  text = "©2024. 0xrsydn", 
  fontSize = 12 
}: FooterProps) {
  return (
    <footer className="w-full bg-bg dark:bg-darkBg text-dark dark:text-whitepy-4">
      <div 
        className="flex items-center justify-center gap-2 px-4"
        style={{
          fontSize: `${fontSize}px`,
        }}
      >
        <span>{text}</span>
      </div>
    </footer>
  )
}