import { ExternalLink } from "lucide-react"
import type { AnnouncementContentBlock } from "@/lib/announcements"

export function AnnouncementContent({ content }: { content: AnnouncementContentBlock[] }) {
  return (
    <div className="space-y-6 text-base leading-8 text-foreground/76">
      {content.map((block, index) => {
        if (block.type === "paragraph") {
          return <p key={index}>{block.text}</p>
        }

        if (block.type === "list") {
          return (
            <ul key={index} className="grid gap-3">
              {block.items.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )
        }

        if (block.type === "link") {
          return (
            <div key={index} className="rounded-2xl border border-primary/20 bg-primary/10 p-4">
              <p className="mb-2 text-sm font-semibold text-primary">{block.label}</p>
              <a
                href={block.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex break-all text-sm font-medium text-foreground underline decoration-primary/40 underline-offset-4 hover:text-primary"
              >
                {block.href}
                <ExternalLink className="ml-2 mt-0.5 h-4 w-4 shrink-0" />
              </a>
            </div>
          )
        }

        return (
          <div key={index} className="pt-2 font-semibold text-foreground">
            {block.lines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        )
      })}
    </div>
  )
}
