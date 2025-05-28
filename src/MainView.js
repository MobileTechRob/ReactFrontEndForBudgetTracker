// MainView.jsx
import React from 'react';

function MainView() {


  // This is the main view component that will be rendered
  //const viewHtml = '<div><h1>Welcome to the Main View</h1></div>'

  const viewHtml =ShowHeader();
  
  return (viewHtml);

  //  return (
  //    <div>
  //     <h1>Welcome to the Main View</h1>
  //    </div>
  //  );

  //return (viewHtml);

}


function ShowHeader()
{
   return (
     <div>
      <h1>Welcome to the Main View</h1>
     </div>
   );
}

export default MainView;
