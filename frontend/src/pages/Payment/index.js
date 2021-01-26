import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { clearErrors } from "../../redux/Error/error.actions";
import PaymentDetails from "../../components/PaymentDetails";

const Payment = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(clearErrors());
    };
    // eslint-disable-next-line
  }, []);

  return <PaymentDetails />;
};

export default Payment;
