export default function SearchResults({results, isSearching}){
    return(
        <div style={{
            width: "100%",
            padding: "0rem 2rem 0rem 2rem"
        }}>
            {!results?.length && isSearching&&<p>No existen resultados</p>}
            {results?.map((value)=>{
                return(
                    <div key = {value.id} style={{
                        backgroundColor : "#E8E7E7",
                        marginTop:"1rem",
                        marginBottom:"1rem",
                        padding:10,
                        width:"100%"
                    }}>
                        <p>{value.name}</p>
                        <p>{value.email}</p>
                    </div>
                )
            })}
        </div>
    )
}