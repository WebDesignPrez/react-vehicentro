import React from "react";
import { Helmet } from "react-helmet";
import FormCamionesAutazo from "../components/FormCamionesAutazo";

export const FormAutazoCamiones = () => {
  return (
    <>
      <Helmet>
        <title>Landing Autazo Camiones | Vehicentro</title>
        <meta name="description" content="Landing Autazo Camiones" />
      </Helmet>
      <FormCamionesAutazo />
    </>
  );
};
