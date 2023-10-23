import { ThemeProvider } from "@emotion/react"
import { CssBaseline } from "@mui/material"
import { purple } from "./purple"

export const AppTheme = ({children}) => {
  // console.log({children})
  return (
    <ThemeProvider theme={purple}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    {children}
  </ThemeProvider>
  )
}
