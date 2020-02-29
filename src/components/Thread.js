import React, { useEffect, useRef, useState } from "react"
import "../assets/modal.css"

export default function IFrame({ namespaceId, threadId, backgroundColor }) {
  const [height, setHeight] = useState(500)
  const [showAvatarModal, setShowAvatarModal] = useState(false)
  const [user, setUser] = useState(false)
  const iframe = useRef()
  const [imageUrl, setImageUrl] = useState("")
  const [imageData, setImageData] = useState(null)

  useEffect(() => {
    const handler = event => {
      if (event.data.height) setHeight(event.data.height + 16)
      if (event.data.showAvatarModal && event.data.user) {
        setUser(user)
        setShowAvatarModal(true)
        if (typeof document !== undefined)
          document.body.classList.add("dimmable")
        if (typeof document !== undefined) document.body.classList.add("dimmed")
      }
      if (event.data.success) {
        setShowAvatarModal(false)
        if (typeof document !== undefined)
          document.body.classList.remove("dimmable")
        if (typeof document !== undefined)
          document.body.classList.remove("dimmed")
      }
    }

    if (typeof window !== undefined) window.addEventListener("message", handler)

    return () => {
      window.removeEventListener("message", handler)
    }
  }, [])

  useEffect(() => {
    iframe.current.contentWindow.postMessage(
      { outerHeight: window.top.outerHeight },
      "*"
    )
    iframe.current.contentWindow.postMessage(
      { outerWidth: window.top.outerWidth },
      "*"
    )
    iframe.current.contentWindow.postMessage(
      { screenY: window.top.screenY },
      "*"
    )
    iframe.current.contentWindow.postMessage(
      { screenX: window.top.screenX },
      "*"
    )
  }, [iframe.current])

  useEffect(() => {
    const handleClick = () => {
      setShowAvatarModal(false)
      if (typeof document !== undefined)
        document.body.classList.remove("dimmable")
      if (typeof document !== undefined)
        document.body.classList.remove("dimmed")
    }

    if (typeof window !== undefined)
      window.addEventListener("click", handleClick)

    return () => {
      window.removeEventListener("click", handleClick)
    }
  }, [])

  const handleModalClick = e => {
    e.stopPropagation()
  }

  const handleImageUrlChange = e => {
    setImageUrl(e.target.value)
  }

  const handleImageSelect = e => {
    setImageUrl(URL.createObjectURL(e.target.files[0]))
    setImageData(e.target.files[0])
  }

  const handleSave = () => {
    iframe.current.contentWindow.postMessage(
      { imageData: imageData, imageUrl: imageUrl },
      "*"
    )
  }
  
  return (
    <>
      <iframe
        title="JThreads"
        src={`http://localhost:3000/?namespaceId=${namespaceId}&threadId=${threadId}&backgroundColor=${backgroundColor ||
          "FFF"}`}
        width="100%"
        allowTransparency="true"
        frameBorder="0"
        ref={iframe}
        scrolling="no"
        style={{
          overflow: "hidden",
          height: height,
        }}
      />

      {showAvatarModal && (
        //TODO:
        //Add modal styles
        //add form and post data to iframe when submitted
        //add check inside embed app to make sure we're expecting avatar data from this window
        <div
          id="avatarModal"
          className="ui page modals dimmer transition visible active"
        >
          <div
            className="ui modal transition visible active"
            onClick={handleModalClick}
          >
            <div className="header">Change Avatar</div>
            <div className="image content">
              <div className="ui medium image">
                <img
                  alt="avatar"
                  src={
                    user.avatarUrl ||
                    imageUrl ||
                    "https://bestnycacupuncturist.com/wp-content/uploads/2016/11/anonymous-avatar-sm.jpg"
                  }
                />
              </div>
              <div className="description" style={{ width: "100%" }}>
                <p>Enter an image Url</p>
                <div
                  className="ui input"
                  style={{ marginBottom: "1rem", width: "100%" }}
                >
                  <input
                    type="text"
                    className=""
                    onChange={handleImageUrlChange}
                  />
                </div>

                <p>Or upload an image</p>
                <label className="ui button">
                  Select Image
                  <input
                    type="file"
                    onChange={handleImageSelect}
                    accept="image/*"
                  />
                </label>
              </div>
            </div>
            <div className="actions">
              <button
                className="ui button"
                onClick={() => {
                  setShowAvatarModal(false)
                  removeDim()
                }}
              >
                Cancel
              </button>
              <button className="ui primary button" onClick={handleSave}>
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
