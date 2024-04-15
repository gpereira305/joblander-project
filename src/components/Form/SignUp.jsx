import { useFormik } from "formik";
import { basicSchema } from "../../schema";
const onSubmit = async (values, actions) => {
   console.log(values);
   console.log(actions);
   await new Promise((resolve) => setTimeout(resolve, 1000));
   actions.resetForm();
};
const SignUp = () => {
   const {
      values,
      errors,
      touched,
      isSubmitting,
      handleBlur,
      handleChange,
      handleSubmit,
   } = useFormik({
      initialValues: {
         firstname: "",
         lastname: "",
         email: "",
         age: "",
         password: "",
         confirmPassword: "",
      },
      validationSchema: basicSchema,
      onSubmit,
   });
   console.log(errors);
   return (
      <div className="form">
         <form onSubmit={handleSubmit} autoComplete="off">
            <div style={{ display: "flex", gap: "30px" }}>
               <label htmlFor="firstname">
                  First Name
                  <input
                     value={values.firstname}
                     onChange={handleChange}
                     id="firstname"
                     type="firstname"
                     placeholder="Enter First Name"
                     onBlur={handleBlur}
                     className={
                        errors.firstname && touched.firstname
                           ? "input-error"
                           : ""
                     }
                  />
                  {errors.firstname && touched.firstname && (
                     <p className="error">{errors.firstname}</p>
                  )}
               </label>

               <label htmlFor="lastname">
                  Last Name
                  <input
                     value={values.lastname}
                     onChange={handleChange}
                     id="lastname"
                     type="lastname"
                     placeholder="Enter Last Name"
                     onBlur={handleBlur}
                     // className={errors.email && touched.email ? "input-error" : ""}
                  />
                  {errors.lastname && touched.lastname && (
                     <p className="error">{errors.lastname}</p>
                  )}
               </label>
            </div>

            <div style={{ display: "flex", gap: "30px" }}>
               <label htmlFor="email">
                  Email
                  <input
                     value={values.email}
                     onChange={handleChange}
                     id="email"
                     type="email"
                     placeholder="Enter your email"
                     onBlur={handleBlur}
                     className={
                        errors.email && touched.email ? "input-error" : ""
                     }
                  />
                  {errors.email && touched.email && (
                     <p className="error">{errors.email}</p>
                  )}
               </label>
               <label htmlFor="age">
                  Age
                  <input
                     id="age"
                     type="number"
                     placeholder="Enter your age"
                     value={values.age}
                     onChange={handleChange}
                     onBlur={handleBlur}
                     className={errors.age && touched.age ? "input-error" : ""}
                  />
                  {errors.age && touched.age && (
                     <p className="error">{errors.age}</p>
                  )}
               </label>
            </div>

            <div style={{ display: "flex", gap: "30px" }}>
               <label htmlFor="password">
                  Password
                  <input
                     id="password"
                     type="password"
                     placeholder="Enter your password"
                     value={values.password}
                     onChange={handleChange}
                     onBlur={handleBlur}
                     className={
                        errors.password && touched.password ? "input-error" : ""
                     }
                  />
                  {errors.password && touched.password && (
                     <p className="error">{errors.password}</p>
                  )}
               </label>
               <label htmlFor="confirmPassword">
                  Confirm Password
                  <input
                     id="confirmPassword"
                     type="password"
                     placeholder="Confirm password"
                     value={values.confirmPassword}
                     onChange={handleChange}
                     onBlur={handleBlur}
                     className={
                        errors.confirmPassword && touched.confirmPassword
                           ? "input-error"
                           : ""
                     }
                  />
                  {errors.confirmPassword && touched.confirmPassword && (
                     <p className="error">{errors.confirmPassword}</p>
                  )}
               </label>
            </div>
            <button disabled={isSubmitting} type="submit">
               Submit
            </button>
         </form>
      </div>
   );
};
export default SignUp;
