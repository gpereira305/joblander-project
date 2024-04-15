import * as Yup from "yup";

const errorMessage = "é obrigatório!";
const invalidMessage = "está inválido!";
const minimumCharMessage = "deve ter pelo menos 3 dígitos!";

const initialValues = {
   firstName: "",
   lastName: "",
   plan: "",
   email: "",
   phone: "",
   age: "",
   state: "",
   city: "",
   role: "",
   salary: "",
};

const validationSchema = Yup.object({
   firstName: Yup.string()
      .min(3, `Nome ${minimumCharMessage}`)
      .matches(/^[a-zA-Z\s]*$/, `Nome ${invalidMessage}`)
      .required(`Nome ${errorMessage}`),

   lastName: Yup.string()
      .min(3, `Sobrenome ${minimumCharMessage}`)
      .matches(/^[a-zA-Z\s]*$/, `Sobrenome ${invalidMessage}`)
      .required(`Sobrenome ${errorMessage}`),

   email: Yup.string()
      .email(`Email ${invalidMessage}`)
      .required(`Email ${errorMessage}`),

   phone: Yup.string()
      .matches(
         /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{5}$/,
         `Telefone ${invalidMessage}`,
      )
      .required(`Telefone ${errorMessage}`),

   age: Yup.string()
      .min(2, "Idade mínima de pelo menos 2 dígitos!")
      .max(2, "Máximo de 3 dígitos!")
      .matches(
         /(?=.*?\d)^\$?(([1-9]\d{0,2}(,\d{3})*)|\d+)?(\.\d{1,2})?$/,
         `Idade ${invalidMessage}`,
      )
      .required(`Idade ${errorMessage}`),

   state: Yup.string()
      .min(2, `Estado deve ter pelo menos 2 dígitos!`)
      .matches(/^[a-zA-Z\s]*$/, `Estado ${invalidMessage}`)
      .required(`Estado ${errorMessage}`),
   city: Yup.string()
      .min(3, `Cidade ${minimumCharMessage}`)
      .matches(/^[a-zA-Z\s]*$/, `Cidade ${invalidMessage}`)
      .required(`Cidade ${errorMessage}`),

   plan: Yup.string().required(`Plano ${errorMessage}`),

   role: Yup.string()
      .min(5, `Vaga deve ter pelo menos 5 dígitos!`)
      .matches(/^[a-zA-Z\s]*$/, `Vaga ${invalidMessage}`)
      .required(`Vaga ${errorMessage}`),

   salary: Yup.string()
      .min(3, `Vaga ${minimumCharMessage}`)
      .max(10, "Máximo de 10 dígitos!")
      .matches(
         /(?=.*?\d)^\$?(([1-9]\d{0,2}(,\d{3})*)|\d+)?(\.\d{1,2})?$/,
         `Salário ${invalidMessage}`,
      )
      .required(`Pretenção salarial ${errorMessage}`),
});

export { initialValues, validationSchema };
