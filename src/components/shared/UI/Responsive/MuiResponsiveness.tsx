import { Box } from '@mui/material'

export const MuiResponsiveness = () => {
  return (
    <Box sx={{
        height: 300,
        width: {
            xs: 200, // 0
            sm: 300, // 600
            md: 400, // 900
            lg: 500, // 1200
            xl: 600 // 1536
        },
        bgcolor: 'primary.main',
    }}>

    </Box>
  )
}
