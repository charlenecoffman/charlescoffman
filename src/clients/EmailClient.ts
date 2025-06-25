import emailjs from "@emailjs/browser";
import { ContactForm } from "../domain/ContactForm";

const clientCode = "user_3IabaTk3eBEeonKL6yOxh";
const serviceId = "service_9e28r1j";

export const sendContactUsEmail = (contactForm: ContactForm) => {
  emailjs.send(serviceId, "template_qqld5vj", JSON.parse(JSON.stringify(contactForm)), clientCode).catch((error: any) => {
    console.log(error.text);
  });
}