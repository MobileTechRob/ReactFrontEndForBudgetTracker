// MainView.jsx
import React, { use } from 'react';
import { useState, useEffect } from 'react';
import RenderTransactionDollarsByCategory from './RenderTransactionDollarsByCategory';

function MainView() 
{
  // This is the main view component that will be rendered
  //const viewHtml = '<div><h1>Welcome to the Main View</h1></div>'

  console.log("MainView called");

  const now = new Date();
  const firstDayOfYear = new Date(now.getFullYear(), 0, 1).toISOString().slice(0, 10); // "YYYY-MM-DD" format;
  const todayDate = new Date().toISOString().slice(0, 10);

  console.log("First Day Of Year " +  firstDayOfYear);
  console.log("Todays Date " +  todayDate);

  const viewHtml =ShowHeader();

  console.log("viewHtml is " + viewHtml);

  const costData = TransactionDollarsByCategoryFetcher();

  return (viewHtml);

  //  return (
  //    <div>
  //     <h1>Welcome to the Main View</h1>
  //    </div>
  //  );

  //return (viewHtml);

}

function TransactionDollarsByCategoryFetcher()
{

  const [costData, setCostData] = React.useState(null);
  const [error, setError] = React.useState(null); 
  const [loading, setLoading] = React.useState(true); 

  useEffect(() => {
    async function QueryForInfo()
    {
      try {
              var firstDayOfYear ='2025-01-01';
              var todayDate = '2025-07-24';
              var url = `http://localhost:5065/HomeBudget/TransactionDollarsByCategory?fromDate=${firstDayOfYear}&toDate=${todayDate}`;
              const response = await fetch(`${url}`);
              const jsonData = await response.json();
              setCostData(jsonData);
              setLoading(false);  
      } 
      catch (error) 
      {
        setError(error);
        setLoading(false);    
      } 
    }
    QueryForInfo();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  console.log('TransactionDollarsByCategoryFetcher Data', costData);  

  return RenderTransactionDollarsByCategory(costData);
}

/* async function  QueryForInfo2()
{
      var firstDayOfYear ='2025-01-01';
      var todayDate = '2025-07-24';
      var url = `http://localhost:5065/HomeBudget/TransactionDollarsByCategory?fromDate=${firstDayOfYear}&toDate=${todayDate}`;
      console.log(`URL: ${url}`);

       await fetch(`${url}`)
        .then(response => 
          {
            if (!response.ok)
              throw new Error("Failed to retrieve data");
            if (response.ok) 
            {
              console.log('response.ok');
              console.log(response);
              //console.log(response.json.toString());
              return  response.json();
            } 
        }).then(data => {
              console.log('QueryForInfo Data received:');
              console.log('QueryForInfo Data',data);
          
              return (RenderTransactionDollarsByCategory(data));              
        }).catch(error => {
          console.error('Error fetching data:', error);   
      })
}
 */

function ShowHeader()
{
   return (
     <div>
      <h1>Welcome to the Main View</h1>
      <TransactionDollarsByCategoryFetcher />
     </div>
   );
}






export default MainView;
