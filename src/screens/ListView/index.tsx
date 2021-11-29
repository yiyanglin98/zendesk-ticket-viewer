import { useContext, useState } from 'react';
import TicketCard from "../../components/TicketCard";
import { TicketContext } from "../../App"
import ListPlaceHolder from "./placeholder"
function ListView() {
  const ticketsObject = useContext(TicketContext)
  const [page, setPage] = useState(1)
  const isLoading = ticketsObject === undefined
  const ticketCount = ticketsObject?.count
  const pageCount = ticketCount ? Math.ceil(ticketCount / 25) : 0

  const pageDown = () => {
    setPage(Math.max(page - 1, 1))
  }
  const pageUp = () => {
    setPage(Math.min(page + 1, pageCount))
  }

  return (
    <div className="w-screen h-screen overflow-auto grid justify-items-center bg-gray-200 font-sans antialiased text-3xl text-gray-500 font-bold">
      <div className="grid grid-cols-3 grid-rows-2 select-none">
        <h1 className="col-span-3 m-4">Total of {ticketCount} tickets</h1>
        <span className={"material-icons-round text-gray-500 cursor-pointer hover:text-red-500"} onClick={pageDown}>chevron_left</span>
        <h2>{page} / {pageCount}</h2>
        <span className={"material-icons-round text-gray-500 cursor-pointer hover:text-red-500"} onClick={pageUp}>chevron_right</span>
      </div>
      <div className="mb-40 sm:mb-20 mt-8 rounded-lg space-y-2 max-w-screen-sm w-11/12 sm:w-2/3 sm:space-y-4">
        {isLoading ? <ListPlaceHolder /> :
          ticketsObject.error || ticketsObject.tickets?.slice(25 * (page - 1), 25 * page).map((ticket, index) => {
            return <TicketCard subject={ticket.subject} status={ticket.status} index={index} />
          })}
      </div>
    </div>
  )
}

export default ListView;