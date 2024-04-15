import React from "react";
import "./index.css";
import {
   Formik,
   Form,
   Field,
   ErrorMessage,
   FieldArray,
   FastField,
} from "formik";
import { initialValues, validationSchema } from "../../schema";

const onSubmit = (values, submitProps) => {
   console.log("Form data", values);
   submitProps.setSubmitting(false);
   submitProps.resetForm();
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
         onSubmit={onSubmit}
      >
         {(formik) => {
            return (
               <div className="form">
                  <Form>
                     <div className="form-control">
                        <label htmlFor="firstName">
                           Nome
                           <Field type="text" id="firstName" name="firstName" />
                           <ErrorMessage name="firstName">
                              {(error) => <div className="error">{error}</div>}
                           </ErrorMessage>
                        </label>

                        <label htmlFor="lastName">
                           Sobrenome
                           <Field type="text" id="lastName" name="lastName" />
                           <ErrorMessage name="lastName">
                              {(error) => <div className="error">{error}</div>}
                           </ErrorMessage>
                        </label>
                     </div>

                     <div className="form-control">
                        <label htmlFor="email">
                           Email
                           <Field type="email" id="email" name="email" />
                           <ErrorMessage name="email">
                              {(error) => <div className="error">{error}</div>}
                           </ErrorMessage>
                        </label>

                        <label htmlFor="phone">
                           Telefone
                           <Field type="text" id="phone" name="phone" />
                           <ErrorMessage name="phone">
                              {(error) => <div className="error">{error}</div>}
                           </ErrorMessage>
                        </label>
                     </div>

                     <div className="form-control">
                        <label htmlFor="state">
                           Estado
                           <Field type="text" id="state" name="state" />
                           <ErrorMessage name="state">
                              {(error) => <div className="error">{error}</div>}
                           </ErrorMessage>
                        </label>
                        <label htmlFor="city">
                           Cidade
                           <Field type="text" id="city" name="city" />
                           <ErrorMessage name="city">
                              {(error) => <div className="error">{error}</div>}
                           </ErrorMessage>
                        </label>
                     </div>

                     <div className="form-control">
                        <label htmlFor="age">
                           Idade
                           <Field type="text" id="age" name="age" />
                           <ErrorMessage name="age">
                              {(error) => <div className="error">{error}</div>}
                           </ErrorMessage>
                        </label>
                        <label htmlFor="role">
                           Cargo desejado
                           <Field type="text" id="role" name="role" />
                           <ErrorMessage name="role">
                              {(error) => <div className="error">{error}</div>}
                           </ErrorMessage>
                        </label>
                     </div>

                     <div className="form-control">
                        <label htmlFor="salary">
                           Pretensão salarial
                           <Field type="text" id="salary" name="salary" />
                           <ErrorMessage name="salary">
                              {(error) => <div className="error">{error}</div>}
                           </ErrorMessage>
                        </label>

                        <label htmlFor="plan">
                           Plano
                           <Field name="plan" as="select">
                              {planOptions.map(({ key, value }) => (
                                 <option key={key} value={value}>
                                    {key}
                                 </option>
                              ))}
                           </Field>
                           <ErrorMessage name="plan">
                              {(error) => <div className="error">{error}</div>}
                           </ErrorMessage>
                        </label>
                     </div>
                     <button
                        type="submit"
                        disabled={!formik.isValid || formik.isSubmitting}
                     >
                        Submit
                     </button>
                  </Form>
               </div>
            );
         }}
      </Formik>
   );
}
