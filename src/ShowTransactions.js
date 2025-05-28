
function ShowTransactions(props) 
{
    const showDatesHeader = ShowDates(props)

    // const [transactions, setTransactions] = useState([]);
    
    const queryStr = `http://localhost:5065/HomeBudget/CostListByDateRange?fromDate=${props.FromDate}&toDate=${props.ToDate}`;

    console.log("queryStr is " + queryStr);
    console.log("showDatesHeader is " + showDatesHeader);

    fetch(queryStr)
     .then(response => {
         if (!response.ok) throw new Error("Failed to retrieve ");

         console.log("response is " + response);
         return response.json();
     })
     .then(tranactionList => {           
         renderList(tranactionList);
        console.log("tranactionList is " + tranactionList);
     })
    .catch(error => {
         //document.getElementById("status").textContent = "Error: " + error.message;
         console.error("Error fetching data:", error);
     });

    
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

    function renderList(tranactionList) {
      //const tbody = document.getElementById('costTableBody');
      //tbody.innerHTML = ''; // Clear any old rows

       tranactionList.forEach(transaction => {

         console.log("renderList " + transaction.posted_Date);
         console.log("renderList " + transaction.costCategory);

    //     const row = document.createElement('tr');

    //     row.innerHTML = `<td>${transaction.posted_Date}</td><td>&nbsp;&nbsp;</td>
    //       <td>${transaction.costCategory}</td><td>&nbsp;&nbsp;</td>
    //       <td>${transaction.savingsCategory}</td><td>&nbsp;&nbsp;</td>
    //       <td>${transaction.description}</td><td>&nbsp;&nbsp;</td>
    //       <td>${transaction.amount}</td>`
    //     tbody.appendChild(row);
       });
     
    }



export default ShowTransactions;
