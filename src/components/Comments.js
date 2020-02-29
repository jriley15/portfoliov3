import React from "react"
import { Thread } from "jthreads-react"

export default function Comments({ namespaceId, threadId, backgroundColor }) {
  return (
    <Thread
      namespaceId={namespaceId}
      threadId={threadId}
      backgroundColor={backgroundColor}
    />
  )
}
