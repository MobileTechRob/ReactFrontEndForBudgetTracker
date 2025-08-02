function RenderTransactionDollarsByCategory(props) 
{
  console.log ('RenderTransactionDollarsByCategory props', props);
  console.log ('RenderTransactionDollarsByCategory transactionItems', Object.entries(props));

  return (
    <div>
      <h2>Transaction Dollars by Category</h2>

      <h3>From: {props.startDte} To: {props.endDte}</h3>

      <ul>
        {
        Object.entries(props).map((transactionItem => (

          console.log('item', transactionItem)

        //   <li key={item.category}>
        //     {item.category}: ${item.amount}
        //   </li>
        )))}       
      </ul>
    </div>
  );
}

export default RenderTransactionDollarsByCategory;
