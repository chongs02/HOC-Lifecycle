import React, { useEffect } from "react";

// function FRInput() {
//   return (
//     <div>
//       <input type="text" />
//     </div>
//   );
// }

const FRInput = React.forwardRef((props, ref) => {
  useEffect(() => {
    console.log(props, ref);
  }, []);

  console.log(props, ref);
  return (
    <div>
      <input type="text" ref={ref} />
    </div>
  );
});

export default FRInput;
