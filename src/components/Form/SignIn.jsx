import CustomCheckbox from "./CustomCheckbox";
import CustomInput from "./CustomInput";
import { Form, Formik } from "formik";
import { advancedSchema } from "../../schema";
const onSubmit = async (values, actions) => {
   await new Promise((resolve) => setTimeout(resolve, 1000));
   actions.resetForm();
};
const SignIn = () => {
   return (
      <Formik
         initialValues={{
            username: "",
            password: "",
            jobType: "",
            acceptedTos: false,
         }}
         validationSchema={advancedSchema}
         onSubmit={onSubmit}
      >
         {({ isSubmitting }) => (
            <Form>
               <CustomInput
                  label="Username"
                  name="username"
                  type="text"
                  placeholder="Enter Username"
               />
               <CustomInput
                  label="Password"
                  name="password"
                  type="text"
                  placeholder="Enter Password "
               />
               <CustomCheckbox type="checkbox" name="acceptedTos" />
               <button disabled={isSubmitting} type="submit">
                  Submit
               </button>
            </Form>
         )}
      </Formik>
   );
};
export default SignIn;
