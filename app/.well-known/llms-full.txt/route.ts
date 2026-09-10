import { permanentRedirect } from "next/navigation";

// This URL used to serve its own, smaller dump — case studies, AI Decoded and
// books, but no comparisons, topics, answers or the YC research table. Two
// full-text dumps at two URLs meant whichever an assistant happened to find
// decided how much of the site it saw. /llms-full.txt is the canonical one
// (that is also where the llms.txt convention puts it; .well-known is not part
// of the spec), and it now carries the books this route used to hold.
export const dynamic = "force-static";

export function GET(): never {
  permanentRedirect("/llms-full.txt");
}
