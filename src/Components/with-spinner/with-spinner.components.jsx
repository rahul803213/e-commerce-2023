import React from "react";

import { SpinnerOverlay,SpinnerContainer } from "./with-spinner.styles";

const WithSpinner = WrappedComponent =>
   { 
    const Spinner = ({isLoading,...otherProps}) =>{
      //  console.log(otherProps[0]);
      //  console.log("3rd step",isLoading)
     return  isLoading ? 
      ( <SpinnerOverlay>
        <SpinnerContainer   />
       </SpinnerOverlay>)
       :
      // console.log("4th step",isLoading)
       <WrappedComponent {...otherProps} />

    }
   // console.log("4rd step",isLoading)
    return Spinner;

}

export default WithSpinner;