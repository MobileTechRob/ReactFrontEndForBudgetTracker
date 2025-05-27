
function ShowTransactions(props) 
{
    const showDatesHeader = ShowDates(props)

    // const [transactions, setTransactions] = useState([]);
    
    const queryStr = `http://localhost:5065/HomeBudget/CostListByDateRange?fromDate=${props.FromDate}&toDate=${props.ToDate}`;

    console.log("queryStr is " + queryStr);

    return showDatesHeader;

    // fetch(queryStr)
    // .then(response => {
    //     if (!response.ok) throw new Error("Failed to retrieve ");
    //     return response.json();
    // })
    // .then(tranactionList => {           
    //     renderList(tranactionList);
    // })
    // .catch(error => {
    //     document.getElementById("status").textContent = "Error: " + error.message;
    // });

}

function ShowDates(props)
{
    return (
        <div>
            <h2>transaction header</h2>
            <h2>{props.FromDate}</h2>
            <h2>{props.ToDate}</h2>
        </div>
    );
}

export default ShowTransactions;
