import React from "react"
import { Light as SyntaxHighlighter } from "react-syntax-highlighter"
import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript"
import docco from "react-syntax-highlighter/dist/esm/styles/hljs/atom-one-dark"

SyntaxHighlighter.registerLanguage("javascript", js)

export default function Code({ children }) {
  return (
    <SyntaxHighlighter
      style={docco}
      customStyle={{ borderRadius: 5, padding: 15 }}
    >
      {children}
    </SyntaxHighlighter>
  )
}
