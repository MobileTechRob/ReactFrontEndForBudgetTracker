import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppWithLogin from './AppWithLogin';
import App from './App';
import reportWebVitals from './reportWebVitals';
import RecipeApp from './RecipeApp';
import RecipeApp_2 from './RecipeApp_2';
import RecipeApp_DynamicText from './RecipeApp_DynamicText';
import MyButton from './MyButton';
import MyButton_with_message from './MyButton_with_message';
import ShowTransactions from './ShowTransactions';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <AppWithLogin />
    {/* <RecipeApp />
    <RecipeApp_2 />
    <RecipeApp_DynamicText />
    <MyButton /> */}
    {/* <MyButton_with_message message="Hello, this is a message!" /> */}
    {/* <MyButton_with_message /> */}
    {/* <ShowTransactions  FromDate="2025-10-10" ToDate="2025-12-12"/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
