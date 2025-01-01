import { Td } from "@/components/ui/Td";
import { Th } from "@/components/ui/Th";

const data = {
  name: "Gustavo Peña",
  title: "Senior Frontend Engineer",
  version: "v0.1",
  updated: "2024-12-31",
  author: "Gustavo Peña",
  license: "MIT",
  email: "gustavo@gustavopenya.com",
  linkedin: "https://www.linkedin.com/in/gustavopenya/",
  github: "https://github.com/gustavopenya",
  twitter: "https://x.com/gustavopenya",
}


export default function Home() {
  return (
    <div className="min-h-dvh p-8 pb-20 sm:p-20 font-jetbrains">
      <main className="">
      <table className="header">
  <tbody><tr>
    <Td colSpan={2} rowSpan={2} className="width-auto">
      <h1 className="text-[2rem] font-bold">{data.name}</h1>
      <span className="subtitle">{data.title}</span>
    </Td>
    <Th>Version</Th>
    <Td className="width-min">{data.version}</Td>
  </tr>
  <tr>
    <Th>Updated</Th>
    <Td className="width-min"><time style={{ whiteSpace: "pre" }}>{data.updated}</time></Td>
  </tr>
  <tr>
    <Th className="width-min">Author</Th>
    <Td className="width-auto"><a href="https://wickstrom.tech"><cite>{data.author}</cite></a></Td>
    <Th className="width-min">License</Th>
    <Td>{data.license}</Td>
  </tr>
</tbody></table>
      </main>
    </div>
  );
}
