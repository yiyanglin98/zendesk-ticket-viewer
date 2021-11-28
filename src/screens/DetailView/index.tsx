import { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { TicketContext } from "../../App"
import axios from 'axios';

interface userJSON {
    user: any,
    error?: string
}

function DetailView() {
    const navigate = useNavigate()

    const { ticketId } = useParams()
    const index = ticketId ? parseInt(ticketId) : 0
    const ticketsObject = useContext(TicketContext)
    const requesterId = ticketsObject?.tickets[index].requester_id
    const [userObject, setUserObject] = useState<userJSON>()

    useEffect(() => {
        async function getUser() {
            try {
                const response = await axios.get(`http://localhost:3001/api/user?id=${requesterId}`)
                console.log(response)
                setUserObject(response.data)
            } catch (error) {
                console.error(error);
                setUserObject({ error: "Cannot connect to the server!", user: {} })
            }
        }
        getUser()
    }, [requesterId])

    return (
        <button className="w-screen h-screen overflow-auto grid justify-items-center bg-gray-200" onClick={() => navigate(-1)}>
            <br />
            {userObject === undefined ? <span className={`material-icons-round text-gray-600 animate-spin scale-150`}>loop</span> :
                <div className="font-sans antialiased text-3xl text-gray-500 font-bold m-4 sm:m-16 grid grid-flow-row gap-y-3 absolute top-16 sm:top-4">
                    <h2 className="text-red-500 m-4" >Click anywhere to go back</h2>
                    <h1 className="text-left text-blue-500">{userObject.error ? "Error: " + userObject.error : "Requested by: " + userObject.user.name}</h1>
                    <h1 className="text-left text-green-500">Subject: {userObject.error ? "" : ticketsObject?.tickets[index].subject}</h1>
                    <h1 className="text-left">{userObject.error ? "" : ticketsObject?.tickets[index].description}</h1>
                </div>
            }
        </button>
    )
}

export default DetailView;