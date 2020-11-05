import {
  AlignedHeaderToMarkdown,
  AlignedParagraphToMarkdown,
} from "../alignment/AlignmentPlugin";
import { AnchorToMarkdown } from "../anchor";
import { InlineStylesToMarkdown } from "../inline_styles";
import { SoftHyphenToMarkdown } from "../soft_hyphen";
import { TableToMarkdown } from "../tables/TableToMarkdown";
import { TestToMarkdown } from "../test";

// tslint:disable-next-line
const markdown = require("prosemirror-markdown");

export function createMarkdownSerializer(): any {
  return new markdown.MarkdownSerializer(
    {
      ...markdown.defaultMarkdownSerializer.nodes,
      ...SoftHyphenToMarkdown,
      ...AnchorToMarkdown,
      ...TableToMarkdown,
      ...AlignedParagraphToMarkdown,
      ...AlignedHeaderToMarkdown,
      ...TestToMarkdown,
    },
    {
      ...markdown.defaultMarkdownSerializer.marks,
      ...InlineStylesToMarkdown,
    }
  );
}
