import React from "react";
import './payment-page.styles.jsx';

import { PaymentPageContainer } from "./payment-page.styles.jsx";

import {PaymentLogin,PaymentAddress,PaymentSummary,PaymentOptions} from "../../Components/payment-login/payment-login.component";

const PaymentPage = () => {

    return(<PaymentPageContainer>
       <PaymentLogin />
       <PaymentAddress />
       <PaymentSummary />
       <PaymentOptions />
    </PaymentPageContainer>)
}

export default PaymentPage;
