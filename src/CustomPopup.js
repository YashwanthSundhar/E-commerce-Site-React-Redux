import { useEffect, useState } from "react";
import popupStyles from "./custom-popup.module.css";
import PropTypes from "prop-types";
import { useNavigate } from 'react-router-dom';
const CustomPopup = (props) => {
  const [show, setShow] = useState(false);
let historynext = useNavigate()
  const closeHandler = (e) => {
    setShow(false);
    props.onClose(false);
    historynext('/Home')
  };

  useEffect(() => {
    setShow(props.show);
  }, [props.show]);

  return (
    <div
      style={{
        visibility: show ? "visible" : "hidden",
        opacity: show ? "1" : "0"
      }}
      className={popupStyles.overlay}
    >
      <div className={popupStyles.popup}>
      <h2 className={popupStyles.header}>Login SucessFull</h2>
        <h2 className={popupStyles.header}>Hello! {props.title}</h2>
        <button className={popupStyles.close} onClick={closeHandler}>
         Go Shopping
        </button>
       
      </div>
    </div>
  );
};

CustomPopup.propTypes = {
  title: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default CustomPopup;
