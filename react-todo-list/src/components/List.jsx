import React from 'react';
import moment from 'moment';

const List = ({item, checkedItem, deleteItem}) => {
   return (
      <li className="list-group-item d-flex justify-content-between align-items-center">
         <div className="d-flex align-items-center">
            <input
               onChange={() => checkedItem(item.id)}
               value={item.checked}
               checked={item.checked}
               className="form-check-input me-2"
               type="checkbox"
            />
            <span className={item.checked ? 'text-decoration-line-through mt-1' : 'mt-1'}>
               {item.text}
            </span>
         </div>
         <div className="ms-3 d-flex align-items-center">
            <small className="me-3">{moment(item.creationDate).format("DD.MM.YYYY")}</small>
            <i onClick={() => deleteItem(item.id)} className="bi bi-trash3 ms-auto"></i>
         </div>
      </li>
   );
};

export default List;
