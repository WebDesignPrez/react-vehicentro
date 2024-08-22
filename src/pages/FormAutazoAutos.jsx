import React from "react";
import { Helmet } from "react-helmet";
import FormAutosAutazo from "../components/FormAutosAutazo";

export const FormAutazoAutos = () => {
  return (
    <>
      <Helmet>
        <title>Landing Autazo Autos | Vehicentro</title>
        <meta name="description" content="Landing Autazo Autos" />
      </Helmet>
      <FormAutosAutazo />
    </>
  );
};
