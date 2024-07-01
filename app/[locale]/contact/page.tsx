"use client";
import { useState } from "react";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Textarea from "@/components/Textarea";
import { BsFillCheckCircleFill } from "react-icons/bs";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Message, Error } from "@/components/ContactMessage";
import { useTranslations } from "next-intl";

// const SERVICE_ID = process.env.SERVICE_ID;
// const TEMPLATE_ID = process.env.TEMPLATE_ID;
// const PUBLIC_KEY = process.env.PUBLIC_KEY;

function Contact() {
  const t = useTranslations("Contact");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [sending, setSending] = useState(false);

  let templateParams = {
    name,
    email,
    subject,
    message,
  };

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setSending(true);
    emailjs
      .send(
        "service_7kjkhmc",
        "template_xse0q1r",
        templateParams,
        "3j0U6neuO90wMdihP"
      )
      .then(
        (result) => {
          toast(<Message name={name} />);
          setSending(false);
          const formElement = e.target as HTMLFormElement;
          formElement.reset();
        },
        (error) => {
          toast(<Error />);
          setSending(false);
        }
      );
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <div className="flex flex-col gap-4 flex-grow">
        <p className="md:text-[28px] font-bold self-center pb-5">
          {t("contact-sec1-title")}
        </p>
        <Input
          type="text"
          id=""
          name="name"
          htmlFor=""
          label={t("contact-sec1-row1")}
          placeholder={t("contact-sec1-valid1")}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <Input
          type="email"
          id=""
          name="email"
          htmlFor=""
          label={t("contact-sec1-row2")}
          placeholder={t("contact-sec1-valid2")}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Input
          type="text"
          id=""
          name="subject"
          htmlFor=""
          label={t("contact-sec1-row3")}
          placeholder={t("contact-sec1-valid3")}
          onChange={(e) => {
            setSubject(e.target.value);
          }}
        />
        <Textarea
          id=""
          name="message"
          htmlFor=""
          label={t("contact-sec1-row4")}
          placeholder={t("contact-sec1-valid4")}
          rows={4}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <Button type="submit" className="self-end">
          {sending ? t("contact-sec1-btn2") : t("contact-sec1-btn1")}
          <BsFillCheckCircleFill />
        </Button>
        <ToastContainer
          className="toast-position"
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </form>
  );
}

export default Contact;
