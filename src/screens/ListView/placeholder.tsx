import TicketCard from "../../components/TicketCard";

function ListPlaceHolder() {

    return (
        <div className="animate-pulse rounded-lg space-y-2 sm:space-y-4" role="list">
            {Array.from({ length: 5 }, (_, index) => index + 1).map((i) => {
                return <TicketCard subject={"■■■ ■■■ ■■■■■■"} status="unknown" index={i} key={i} />
            })}
        </div>
    )
}

export default ListPlaceHolder;