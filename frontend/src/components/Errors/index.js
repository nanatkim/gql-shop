import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors } from "../../redux/Error/error.actions";

import "./style.scss";

const mapState = ({ errorsData }) => ({
  errors: errorsData.errors,
});

const Errors = () => {
  const dispatch = useDispatch();
  const { errors } = useSelector(mapState);

  const handleClearErrors = () => {
    dispatch(clearErrors());
  };

  return (
    <div className="error-handler">
      {errors.length > 0 &&
        errors.map((err, index) => (
          <div className="error" key={index}>
            <span className="msg">{err.message}</span>
            <button onClick={() => handleClearErrors()}>X</button>
          </div>
        ))}
    </div>
  );
};

export default Errors;
