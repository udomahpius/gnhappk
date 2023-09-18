import { ProspectItem } from "..";

const ProspectsList = ({ prospects, isHandling = false }) => {
  return (
    <tbody className="">
      {!isHandling ? (
        prospects.length > 0 ? (
          prospects?.map((prospect) => <ProspectItem key={prospect._id} prospect={prospect} />)
        ) : (
          <p>No result found for this query.</p>
        )
      ) : (
        <p>Searching...</p>
      )}
    </tbody>
  )
}

export default ProspectsList