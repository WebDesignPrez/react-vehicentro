import React from "react";
import FormNewBeneficios from "../components/FormNewBeneficios";
import { Helmet } from "react-helmet";

export const FormBeneficios = () => {
  return (
    <>
      <Helmet>
        <title>Beneficios | Vehicentro</title>
        <meta name="description" content="Beneficios" />
      </Helmet>
      {/* <NavBarTop /> */}
      <FormNewBeneficios />
      {/* <BannerContacto /> */}
      {/* <Footer /> */}
    </>
  );
};
