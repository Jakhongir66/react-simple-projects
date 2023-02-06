import React from 'react';

const MyInput = React.forwardRef((props, ref) =>
   (
      <input
         ref={ref}
         {...props}
         className="form-control"
      />
   ));


export default MyInput;
