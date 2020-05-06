import React, { useState } from "react";
import helpCircle from "../../assets/icons/helpcircle.svg";

import useModal from "../modal/useModal";
import Modal from "../modal/modal.js";

function Card(props) {
  const { isShowing, toggle } = useModal();
  return (
    <div
      style={{
        backgroundColor: "white",
        width: "auto",
        padding: "1.4rem",
        borderRadius: "5px",
        position: "relative",
      }}
    >
        <Modal
                    isShowing={isShowing}
                    hide={toggle}
                    component={props.modalContent}
               />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h4
          style={{
            margin: '0',
            marginLeft: "1.4rem",
            marginTop: '1.4rem',
            fontSize: "1.4rem",
            fontWeight: "normal",
          }}
        >
          {props.title}
        </h4>
        {props.modalContent ?
        <img
          style={{
            margin: "1.4rem 1.4rem",
          }}
          src={helpCircle}
          onClick={() => {
            toggle()
          }}
        /> : <></>}
      </div>


      <div
        style={{
          padding: "2.8rem 2.8rem",
        }}
      >
        {props.children}
      </div>


    </div>
  );
}

export default Card;
