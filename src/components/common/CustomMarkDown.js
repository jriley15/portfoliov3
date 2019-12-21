import React from "react"
import RehypeReact from "rehype-react"
import { Typography } from "@material-ui/core"
import { H1, H2, H3, H4, H5, H6 } from "./Headers"
import BlockQuote from "./BlockQuote"
import Paragraph from "./Paragraph"
import ListItem from "./ListItem"
import Image from "./Image"
import Code from "./Code"

const htmlAst = new RehypeReact({
  createElement: React.createElement,
  components: {
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    h5: H5,
    p: Paragraph,
    blockquote: BlockQuote,
    li: ListItem,
    img: Image,
    code: Code,
  },
}).Compiler

export default function CustomMarkDown({ markdownRemark }) {
  return <div>{htmlAst(markdownRemark.htmlAst)}</div>
}

function Pre({ children }) {
  return <div style={{ width: "100%" }}>{children}</div>
}
