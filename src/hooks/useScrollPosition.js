import React, { useState, useEffect } from "react"

const useScrollPosition = () => {
  const [yOffset, setYOffset] = useState(0)

  useEffect(() => {
    setYOffset(window.pageYOffset)
    function handleScroll() {
      setYOffset(window.pageYOffset)
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return yOffset
}

export default useScrollPosition
