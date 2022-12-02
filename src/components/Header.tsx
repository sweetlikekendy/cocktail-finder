/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css, useTheme } from "@emotion/react"
import React from "react"

export default function Header() {
  const theme = useTheme()

  return (
    <div
      css={css`
        background-color: ${theme.colors.primary[200]};
      `}
    >
      Header
    </div>
  )
}
