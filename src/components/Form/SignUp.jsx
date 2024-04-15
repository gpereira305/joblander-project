import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { initialValues, validationSchema } from "../../schema";
import formBg from "../../assets/images/background-1.webp";
import { toast } from "react-toastify";
import "./index.css";

const onSubmit = (values) => {
   alert(JSON.stringify(values, null, 2));
   toast.success("Dados enviados com sucesso!");
};

export default function App() {
   const planOptions = [
      { key: "Selecione um plano", value: "" },
      { key: "Grátis", value: "Grátis" },
      { key: "Prata", value: "Prata" },
      { key: "Ouro", value: "Ouro" },
      { key: "Diamante", value: "Diamante" },
   ];
   return (
      <Formik
         initialValues={initialValues}
         validationSchema={validationSchema}
         onSubmit={async (values, { resetForm }) => {
            await onSubmit(values);
            resetForm();
         }}
      >
         {({ isValid, isSubmitting }) => {
            return (
               <section
                  className="signupform"
                  id="register"
                  style={{ backgroundImage: `url(${formBg})` }}
               >
                  <h2 className="signupform__title main-title">
                     Crie sua conta
                  </h2>

                  <Form className="signupform__body">
                     <div className="signupform__wrapper">
                        <label
                           className="signupform__label"
                           htmlFor="firstName"
                        >
                           Nome
                           <Field
                              className="signupform__input"
                              type="text"
                              id="firstName"
                              name="firstName"
                              placeholder="Ex: João"
                           />
                           <ErrorMessage name="firstName">
                              {(error) => (
                                 <span className="signupform__error">
                                    {error}
                                 </span>
                              )}
                           </ErrorMessage>
                        </label>

                        <label className="signupform__label" htmlFor="lastName">
                           Sobrenome
                           <Field
                              className="signupform__input"
                              type="text"
                              id="lastName"
                              name="lastName"
                              placeholder="Ex: Souza"
                           />
                           <ErrorMessage name="lastName">
                              {(error) => (
                                 <span className="signupform__error">
                                    {error}
                                 </span>
                              )}
                           </ErrorMessage>
                        </label>
                     </div>

                     <div className="signupform__wrapper">
                        <label className="signupform__label" htmlFor="email">
                           Email
                           <Field
                              className="signupform__input"
                              type="email"
                              id="email"
                              name="email"
                              placeholder="Ex: joaosouza@gmail.com"
                           />
                           <ErrorMessage name="email">
                              {(error) => (
                                 <span className="signupform__error">
                                    {error}
                                 </span>
                              )}
                           </ErrorMessage>
                        </label>

                        <label className="signupform__label" htmlFor="phone">
                           Telefone
                           <Field
                              className="signupform__input"
                              type="text"
                              id="phone"
                              name="phone"
                              placeholder="Ex: (99)99999-9999"
                           />
                           <ErrorMessage name="phone">
                              {(error) => (
                                 <span className="signupform__error">
                                    {error}
                                 </span>
                              )}
                           </ErrorMessage>
                        </label>
                     </div>

                     <div className="signupform__wrapper">
                        <label className="signupform__label" htmlFor="state">
                           Estado
                           <Field
                              className="signupform__input"
                              type="text"
                              id="state"
                              name="state"
                              placeholder="Ex:  SP ou São Paulo"
                           />
                           <ErrorMessage name="state">
                              {(error) => (
                                 <span className="signupform__error">
                                    {error}
                                 </span>
                              )}
                           </ErrorMessage>
                        </label>
                        <label className="signupform__label" htmlFor="city">
                           Cidade
                           <Field
                              className="signupform__input"
                              type="text"
                              id="city"
                              name="city"
                              placeholder="Ex: são Paulo"
                           />
                           <ErrorMessage name="city">
                              {(error) => (
                                 <span className="signupform__error">
                                    {error}
                                 </span>
                              )}
                           </ErrorMessage>
                        </label>
                     </div>

                     <div className="signupform__wrapper">
                        <label className="signupform__label" htmlFor="age">
                           Idade
                           <Field
                              className="signupform__input"
                              type="text"
                              id="age"
                              name="age"
                              placeholder="Ex: 23"
                           />
                           <ErrorMessage name="age">
                              {(error) => (
                                 <span className="signupform__error">
                                    {error}
                                 </span>
                              )}
                           </ErrorMessage>
                        </label>
                        <label className="signupform__label" htmlFor="role">
                           Cargo desejado
                           <Field
                              className="signupform__input"
                              type="text"
                              id="role"
                              name="role"
                              placeholder="Ex:  Desenvolvedor web"
                           />
                           <ErrorMessage name="role">
                              {(error) => (
                                 <span className="signupform__error">
                                    {error}
                                 </span>
                              )}
                           </ErrorMessage>
                        </label>
                     </div>

                     <div className="signupform__wrapper">
                        <label className="signupform__label" htmlFor="salary">
                           Pretensão salarial
                           <Field
                              className="signupform__input"
                              type="text"
                              id="salary"
                              name="salary"
                              placeholder="Ex: 5000"
                           />
                           <ErrorMessage name="salary">
                              {(error) => (
                                 <span className="signupform__error">
                                    {error}
                                 </span>
                              )}
                           </ErrorMessage>
                        </label>

                        <label className="signupform__label" htmlFor="plan">
                           Plano
                           <Field
                              className="signupform__input"
                              name="plan"
                              as="select"
                           >
                              {planOptions.map(({ key, value }) => (
                                 <option key={key} value={value}>
                                    {key}
                                 </option>
                              ))}
                           </Field>
                           <ErrorMessage name="plan">
                              {(error) => (
                                 <span className="signupform__error">
                                    {error}
                                 </span>
                              )}
                           </ErrorMessage>
                        </label>
                     </div>
                     <button
                        className="signupform__submit button__layout"
                        type="submit"
                        disabled={!isValid || isSubmitting}
                     >
                        Enviar
                     </button>
                  </Form>
               </section>
            );
         }}
      </Formik>
   );
}
