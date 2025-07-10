import { userActivationEmailTemplate } from "./emailTemplate.js";
import { emailTransporter } from "./transport.js";

export const userActivationUrlEmail = async (obj) => {
  // get the transporter
  const transport = emailTransporter();
  //get the template
  const info = await transport.sendMail(userActivationEmailTemplate(obj));

  return info.messageId;
};
