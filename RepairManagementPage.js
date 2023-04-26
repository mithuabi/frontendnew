import { Helmet } from 'react-helmet-async';
import { useTheme } from '@mui/material/styles';
import { Container, Typography } from '@mui/material';

export default function RepairManagementPage() {
  const theme = useTheme();

  return (
      <>
          <Helmet>
              <title> Dashboard | Happy Mobile </title>
          </Helmet>
          <Container maxWidth="xl">
              <Typography variant="h4" sx={{ mb: 5 }}>
                  Hi, Welcome back
              </Typography>
              <h2>Repair Managements</h2>
              <h3>Table</h3>
          </Container>
      </>
  );

}
