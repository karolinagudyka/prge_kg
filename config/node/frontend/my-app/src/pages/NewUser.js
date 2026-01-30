import React, {useState} from 'react';
import {Container, Box, TextField, Button, Paper} from "@mui/material";
import "../styles/_newuser.scss";

function NewUser(props) {
    const [userName, setUserName] = useState("")
    const [userLocation, setUserLocation] = useState("")
    const [userPosts, setUserPosts] = useState(0)
    const handleSubmit = async (e) => {
        console.log(userName, userLocation, userPosts)
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:10000/app/insert_user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: userName,
                    location: userLocation,
                    posts: userPosts
                })
            })
            console.log(response)
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <div className="newuser">
            <Container>
                <Paper elevation={3} className="newuser__card">
                    <Box component="form" onSubmit={handleSubmit}>
                        <TextField
                            sx={{m: 1}}
                            fullWidth
                            label="imię"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                        />
                        <TextField
                            sx={{m: 1}}
                            fullWidth
                            label="location"
                            value={userLocation}
                            onChange={(e) => setUserLocation(e.target.value)}
                        />
                        <TextField
                            sx={{m: 1}}
                            fullWidth
                            label="posts"
                            value={userPosts}
                            onChange={(e) => setUserPosts(e.target.value)}
                        />
                        <Button
                            type="submit"
                            className="custom__button--styled"
                        >
                            <span className="custom__button-icon"></span>
                            <span className="custom__button-text">Dodaj użytkownika</span>
                        </Button>
                    </Box>
                </Paper>
            </Container>
        </div>
    );
}
export default NewUser;