import "@emotion/react"

declare module "@emotion/react" {
  export interface Theme {
    colors: {
      primary: {
        50: string
        100: string
        200: string
      }
    }
  }
}
