import React from 'react';
import  { useState } from 'react';
import './App.css'; 
import Book from './Book';
import Inline from './components/Inline';
import Stylesheet from './components/Stylesheet';
import './components/stylesheet.css';
import CheckboxExample from './components/CheckboxExample';
// import WithModules from './components/WithModules';
// import myStyles from './components/with';
import Alert from './components/Alert/Alert.js';

function FormExample() {
    return (
        <form>
            {/* Метка, связанная с элементом input по его id */}
            <label htmlFor="username">Имя пользователя:</label>
            {/* Элемент input, который идентифицируется по id */}
            <input type="text" id="username" name="username" />
            <br />
            {/* Метка, связанная с элементом input по его id */}
            <label htmlFor="password">Пароль:</label>
            {/* Элемент input, который идентифицируется по id */}
            <input type="password" id="password" name="password" />
            <br />
            {/* Кнопка отправки формы */}
            <button type="submit">Отправить</button>
        </form>
    );
}
function InputExample() {
   const [text,setText] = useState('');
   const handleInputChange = (event) =>
   {
    setText(event.target.value);
   };

    return (
        <div>
     <input 
     type='text'  
     value={text}
     onChange={handleInputChange}/>
     <p>You typed: {text}</p>
     </div>
    );
}

function App() {

    function createMarkup() {
        return {__html: 'Первый &middot; Второй'};
      }
      
      function MyComponent() {
        return <div dangerouslySetInnerHTML={createMarkup()} />;
      }
    function formatName(user) {
        return user.firstName + ' ' + user.lastName;
      }
      function getGreeting(user)
      {
        if(user) {
            return <h1>Hello, {formatName(user)}!</h1>
        }
        return <h1>Hello, stranger!</h1>;
      }
      const user = {
        firstName: 'Марья',
        lastName: 'Моревна',
        avatarUrl: 'https://example.com/avatar.jpg'
      };
    const name = 'Ivannn';
    const element1 = (
        <h1>
            Hello, {formatName(user)}!
        </h1>
    );
    const element2 = <img src={user.avatarUrl} alt="User Avatar"></img>;
    const element4 = (
        <h1 className="greeting">
          Привет, мир!
        </h1>
      );
      const element5 = React.createElement(
        'h1',
        {className: 'greeting'},
        'Привет, Мир 5!'
      );

// const element6 = {
//     type: 'h1',
//     props: {
//       className: 'greeting',
//       children: 'Привет, мир 6!'
//     }
//   };
    // const title = response.potentiallyMaliciousInput;
    // const element3 = <h1>{title}</h1>;
 return(
  <>
  {/* <Book name="JS" price="100 UAH"/>
  <Book name="JS" price="100 UAH"/> */}
  <Stylesheet/>
  <Inline/>
  {/* <WithModules/> */}
<h1>Hello, {name}</h1>
{element1} 
{element2} 
{/* {element3}  */}
{element4} 
{element5} 
{getGreeting()}
<CheckboxExample/>
<MyComponent/>
<FormExample/>
<InputExample/>
<div className="wrapper">
      <Alert title="Items Not Added" type="error">
        <div>Your items are out of stock.</div>
        </Alert>
    </div>
</>

 )
}

export default App;
