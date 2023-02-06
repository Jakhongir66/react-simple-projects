import React, {useEffect, useRef, useState} from 'react';
import {localStorageGetItem, localStorageSetItem} from './helpers/useLocalStorage.js';
import {useMaxDate} from "./hooks/useMaxDate.js";
import List from "./components/List.jsx";
import './App.css';
import MyButton from "./components/UI/MyButton.jsx";
import MyInput from "./components/UI/MyInput.jsx";

const App = () => {

   const [items, setItems] = useState([]);
   const [todo, setTodo] = useState({text: '', creationDate: new Date(), checked: false})
   const [hasInputValue, setHasInputValue] = useState(true);
   const inputDate = useRef();

   useEffect(() => {
      const itemsLS = localStorageGetItem("items");
      if (itemsLS) {
         setItems(itemsLS)
      }
      inputDate.current.setAttribute("min", useMaxDate());
   }, []);

   useEffect(() => {
      if (items.length) {
         localStorageSetItem("items", items)
      }
   }, [items])


   const onAddNewItem = () => {
      if (!todo.text.trim()) {
         setHasInputValue(false);
         return;
      }

      setItems([...items, {...todo, id: Date.now()}]);
      setTodo({text: '', creationDate: new Date(), checked: false});
   }

   const onCheckedItem = (id) => {
      const index = items.findIndex((item) => item.id === id);
      items[index].checked = !items[index].checked;
      setItems([...items]);
   }

   const onDeleteItem = (id) => {
      const index = items.findIndex((item) => item.id === id);
      items.splice(index, 1);
      setItems([...items]);
   }

   function changeInput(e) {
      setTodo({...todo, text: e.target.value});
      setHasInputValue(!!e.target.value);
   }

   return (
      <div className="wrapper">
         <div className="container">
            <div className="todo-list border p-3 mx-auto">
               <h3 className="todo-list__title text-center text-uppercase mb-4"> Todo List</h3>
               <div className="todo-list__body">
                  <div className="row mb-5">
                     <div className="col-md-5 pe-md-0 mb-3 mb-md-0 position-relative">
                        <MyInput
                           value={todo.text}
                           onChange={changeInput}
                           type="text"
                           placeholder="Напишите что-нибудь"
                        />
                        <span className={hasInputValue ? 'invalid-input d-none' : 'invalid-input d-block'}> Требуется заполнение </span>
                     </div>
                     <div className="col-md-4 pe-md-0 mb-3 mb-md-0">
                        <MyInput
                           ref={inputDate}
                           value={todo.creationDate}
                           onChange={e => setTodo({...todo, creationDate: e.target.value})}
                           type="date"
                           placeholder="Дата"
                        />
                     </div>
                     <div className="col-md-3">
                        <MyButton onClick={onAddNewItem}>Добавить</MyButton>
                     </div>

                  </div>
                  <ul className="list-group">
                     {
                        items.length
                           ?
                           items.map(item =>
                              <List
                                 key={item.id}
                                 item={item}
                                 checkedItem={onCheckedItem}
                                 deleteItem={onDeleteItem}
                              />
                           )
                           : <p className="text-center mb-4">Пока нет данных 🙂</p>
                     }
                  </ul>
               </div>
            </div>
         </div>
      </div>
   );
};

export default App;
