import "./index.css";
import { Link } from "react-router-dom";

function TicketCard({ subject, status, index }: { subject: string, status: "new" | "pending" | "open" | "unknown", index: number | string }) {
    let icon = "circle"
    let color = "gray"
    if (status === 'new') {
        color = "green"
        icon = "add_comment"
    } else if (status === 'pending') {
        color = "yellow"
        icon = "pending"
    } else if (status === "open") {
        icon = "notification_important"
        color = "red"
    }
    return <Link className={`group rounded-xl bg-gray-50 h-28 relative border border-${color}-600 grid grid-cols-4 gap-4 text-left cursor-pointer`} key={index} to={`/${index}`}>

        <div className="self-center m-2 sm:m-4">
            <span className={`material-icons-round text-${color}-600`}>{icon}</span>
            <h2 className={`font-sans antialiased text-lg text-${color}-500 font-bold italic`}>{status === "unknown" ? "■■■" : status}</h2>
        </div>
        <div className="col-span-3 self-center">
            <h2 className="font-sans antialiased text-2xl text-gray-500 font-semibold">{subject}</h2>
        </div>
    </Link>
}

export default TicketCard;