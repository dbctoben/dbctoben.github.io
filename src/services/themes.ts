import { createTheme } from '@mui/material/styles'

const noTextTransformButton = createTheme({
    typography: {
      button: {
        textTransform: "none",
      }
    }
  });

export { noTextTransformButton };