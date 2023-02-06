import React from 'react';

const MyButton = ({children, ...props}) => {
   return (
      <button {...props} className="btn btn-outline-primary w-100" type="button">
         {children}
      </button>
   );
};

export default MyButton;
