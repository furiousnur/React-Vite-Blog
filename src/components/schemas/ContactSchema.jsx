import * as Yup from "yup";

export const ContactSchema = Yup.object({
    username: Yup.string().min(3).max(25).required("Please enter your user name"),
    email: Yup.string().email().required("Please enter your email"),
    message: Yup.string().min(10).required("Please enter your message"), 
});