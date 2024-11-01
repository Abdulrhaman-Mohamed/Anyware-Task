import { Typography } from '@mui/material';

import HandymanIcon from '@mui/icons-material/Handyman';

type Props = {}

export default function Home({ }: Props) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <HandymanIcon style={{ fontSize: '90px' }} />
      <Typography variant="h6" style={{ marginTop: '20px' }}>Under Development</Typography>
    </div>
  )
}