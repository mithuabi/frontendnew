import { useState } from "react";
import { Helmet } from 'react-helmet-async';
import { styled, useTheme } from '@mui/material/styles';
import { Container, Typography, Button, input, Grid, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import '../styles/add-repair.css';
import axios from "axios";


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1), width: '100%',
        },
    },
}));




export default function AddRepairPage() {
    const theme = useTheme();
    const [name, setName] = useState("");
    const [category,setCategory]= useState("");
    const [type,setType]= useState("");
    const [client,setClient]= useState("");
    const [technician,setTechnion]= useState("");
    const [serialNumber,setSerialNumber]= useState("");
    const [model,setModel]= useState("");
    const [problem,setProblem]= useState("");
    const [expectedDate,setExpectedfixeddate]= useState("");
    const [picture,setPicture]= useState("");
    const [sendSms,setsendSms]= useState("");
    const [sendEmail,setsendEmail]= useState("");
    const [status,setstatus]= useState("");
    function sendData(){
        alert("Insert");
    

        const newRepair={
        name,
        category,
        type,
        client,
        technician,
        serialNumber,
        model,
        problem,
        expectedDate,
        picture,
        sendSms,
        sendEmail,
        status,

        }
        console.log(newRepair);
        

    }
    

    axios.post("http://localhost:8070/Repair/add", newRepair).then(()=>{
        alert("Repair Added")
    }).catch((err)=>{
        alert(err)
    })






    const FormContainer = styled(Container)(({theme}) => ({
        padding: theme.spacing(3), backgroundColor: '#ffffff', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)', borderRadius: 4,
    }));

    const AddButton = styled(Button)(({theme}) => ({
        marginBottom: theme.spacing(3),
    }));

    const classes = useStyles();

    const [formValues, setFormValues] = useState({
        name: '',
        category: '',
        type: '',
        client: '',
        technician: '',
        serialNumber: '',
        model: '',
        problem: '',
        expectedDate: '',
        picture: '',
        sendSms: '',
        sendEmail: '',
        status: '',
    });

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormValues((prevState) => ({...prevState, [name]: value}));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formValues);
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
                    <AddButton variant="contained" color="success">+Add Repairs</AddButton>
                    <Box component="form" onSubmit={sendData} className={classes.root}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <input>                                    
                                    label="Name*"
                                    variant="outlined"
                                    placeholder="Enter Repair Name"
                                    name="name"
                                    value={formValues.name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                </input>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <input>
                                    label="Category"
                                    variant="outlined"
                                    placeholder="Enter Category"
                                    name="category"
                                    value={formValues.category}
                                    onChange={(e) => setCategory(e.target.value)}
                                </input>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <input>
                                    label="Type*"
                                    variant="outlined"
                                    placeholder="Enter Repair Type"
                                    name="type"
                                    value={formValues.type}
                                    onChange={(e) => setType(e.target.value)}
                                    required
                                    fullWidth
                                
                                </input>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <input>
                                    label="Client"
                                    variant="outlined"
                                    placeholder="Enter Client Name"
                                    name="client"
                                    value={formValues.client}
                                    onChange={(e) => setClient(e.target.value)}
                                    required
                                    fullWidth
                                
                                </input>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <input>
                                    label="Technion*"
                                    variant="outlined"
                                    placeholder="Enter Technician"
                                    name="technician"
                                    value={formValues.technician}
                                    onChange={(e) => setTechnion(e.target.value)}
                                    required
                                    fullWidth
                                </input>
                            
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <input>
                                    label="Serial Number"
                                    variant="outlined"
                                    placeholder="Enter Serial Number"
                                    name="serialNumber"
                                    value={formValues.serialNumber}
                                    onChange={(e) => setSerialNumber(e.target.value)}
                                    required
                                    fullWidth
                                
                                </input>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <input>
                                    label="Model*"
                                    variant="outlined"
                                    placeholder="Enter Repair Model"
                                    name="model"
                                    value={formValues.model}
                                    onChange={(e) => setModel(e.target.value)}
                                    required
                                    fullWidth
                                    </input>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <input>
                                    label="Expected fixed date*"
                                    variant="outlined"
                                    placeholder="DD/MM/YYY"
                                    name="expectedDate"
                                    value={formValues.expectedDate}
                                    onChange={(e) => setExpectedfixeddate(e.target.value)}
                                    required
                                    fullWidth
                                    </input>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <input>
                                    label="Picture*"
                                    variant="outlined"
                                    placeholder="upload picture"
                                    name="picture"
                                    value={formValues.picture}
                                    onChange={(e) => setPicture(e.target.value)}
                                    required
                                    fullWidth

                                    
                                    </input>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <input>
                                    label="Send SMS Automatically On status change*"
                                    variant="outlined"
                                    placeholder="--Choose option--"
                                    name="sendSms"
                                    value={formValues.sendSms}
                                    onChange={(e) => setsendSms(e.target.value)}
                                    required
                                    fullWidth
                                    </input>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <input>
                                    label="Send email Automatically On status change*"
                                    variant="outlined"
                                    placeholder="--Choose option--"
                                    name="sendEmail"
                                    value={formValues.sendEmail}
                                    onChange={(e) => setsendEmail(e.target.value)}
                                    required
                                    fullWidth
                                </input>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <input>
                                    label="status*"
                                    variant="outlined"
                                    placeholder="--Select Status--"
                                    name="status"
                                    value={formValues.status}
                                    onChange={(e) => setstatus(e.target.value)}
                                    required
                                    fullWidth
                                    </input>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <input>
                                    label="Problem*"
                                    variant="outlined"
                                    placeholder="Type here Problem"
                                    name="problem"
                                    value={formValues.problem}
                                    onChange={(e) => setProblem(e.target.value)}
                                    required
                                    multiline
                                    rows={(formValues.problem.length) > 75 ? 3 : 2}
                                    </input>
                            </Grid>
                            <Grid item xs={12} sm={6} className="submit-btn-container">
                                <Button type="submit" variant="contained" color="primary">Submit</Button>
                            </Grid>
                        </Grid>
                    </Box>
                </FormContainer>
                {/* <Container maxWidth={false} className="form-container"></Container> */}
            </Container>
        </>
    );
}
