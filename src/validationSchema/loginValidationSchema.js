import * as Yup from "yup";

export const loginValidationSchema = Yup.object({
  username: Yup.string().email("Invalid emali address").required("Required"),
  password: Yup.string().required("Required"),
});
