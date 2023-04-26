import { useState } from "react";
import { Helmet } from 'react-helmet-async';
import { useTheme, styled } from '@mui/material/styles';
import { Container, Button, TextField, Grid, Box, Typography } from '@mui/material';
import '../styles/add-client.css';

export default function AddClientPage() {
    const theme = useTheme();

    const FormContainer = styled(Container)(({theme}) => ({
        padding: theme.spacing(3), backgroundColor: '#ffffff', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)', borderRadius: 4,
    }));

    const AddButton = styled(Button)(({theme}) => ({
        marginBottom: theme.spacing(3),
    }));

    const [formData, setFormData] = useState({
        clientName: '',
        phone: '',
        email: '',
        address: '',
        description: '',
    });

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.id]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
    };

    return (
        <>
            <Helmet>
                <title> Dashboard | Happy Mobile </title>
            </Helmet>
            <Container maxWidth="xl">
                <Typography variant="h4" sx={{mb: 5}}>
                    Hi, Welcome back
                </Typography>
                <FormContainer maxWidth="sm">
                    <AddButton variant="contained" color="success">+Add Client</AddButton>
                    <Box component="form" onSubmit={handleSubmit}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <TextField required fullWidth
                                           id="clientName"
                                           label="Clients Name*"
                                           placeholder="Enter Client Name"
                                           value={formData.clientName}
                                           onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField required fullWidth
                                           id="phone"
                                           label="Phone*"
                                           placeholder="Enter Phone number"
                                           value={formData.phone}
                                           onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField required fullWidth
                                           id="email"
                                           label="Email*"
                                           placeholder="Enter Email"
                                           value={formData.email}
                                           onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth
                                           id="address"
                                           label="Address"
                                           placeholder="Enter Address"
                                           value={formData.address}
                                           onChange={handleChange} />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField fullWidth
                                           id="description"
                                           label="Description"
                                           placeholder="Enter Description"
                                           value={formData.description}
                                           onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button type="submit" variant="contained" color="primary">Submit</Button>
                            </Grid>
                        </Grid>
                    </Box>
                </FormContainer>
            </Container>
        </>
    );
}
