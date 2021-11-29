import fetch from 'node-fetch';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'

dotenv.config()
const PORT = process.env.PORT || 3001;
const app = express();

async function fetchTicketsData() {
    const response = await fetch('https://zccyyl.zendesk.com/api/v2/tickets', {
        method: 'GET', headers: {
            'Content-Type': 'application/json', 'Authorization': 'Basic ' + btoa(process.env.EMAIL + "/token:" + process.env.ZENDESK_TOKEN)
        }
    })
    const data = await response.json()
    return data
}

async function fetchUserData(userId) {
    const response = await fetch(`https://zccyyl.zendesk.com/api/v2/users/${userId}`, {
        method: 'GET', headers: {
            'Content-Type': 'application/json', 'Authorization': 'Basic ' + btoa(process.env.EMAIL + "/token:" + process.env.ZENDESK_TOKEN)
        }
    })
    const data = await response.json()
    return data
}

app.use(cors({
    origin: '*'
}))

app.get("/api/tickets", async (req, res) => {
    const data = await fetchTicketsData()
    res.json(data)
})

app.get("/api/user", async (req, res) => {
    let id = req.query.id;
    const data = await fetchUserData(id)
    res.json(data)
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})

// export for testing
export default app