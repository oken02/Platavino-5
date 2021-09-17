import React, { useEffect, useRef } from "react";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";
import { useSelector } from "react-redux";
init("user_estAUP6AJUd8Y1Cwk9tdf");

export const ContactUs = () => {
  const form = useRef();
  const isLogged = useSelector((state) => state.user.data);
  function clickbutton() {
    // simulamos el click del mouse en el boton del formulario
    document.getElementById("bruno").click();
  }
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        `service_am6loeq`,
        `template_bm7tixf`,
        form.current,
        `user_estAUP6AJUd8Y1Cwk9tdf`
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  //[0].toUpperCase() + isLogged.username.slice(1)
  return (
    <form ref={form} onSubmit={sendEmail}>
      <input value={isLogged.username} type="text" name="user_name" />

      <input value={isLogged.email} type="email" name="user_email" />
      <button value={clickbutton} id="bruno" type="submit" value="Send">
        send
      </button>
    </form>
  );
};
