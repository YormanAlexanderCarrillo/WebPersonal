import React, { useState } from "react";
import {
  Card,
  CardHeader,
  Divider,
  CardBody,
  Input,
  Button,
  Textarea,
} from "@nextui-org/react";
import axios from "axios";
const FormContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendMail = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://backendcontact.fly.dev/sendMail",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Correo enviado:", response.data);
      alert(response.data.message);
    } catch (error) {
      console.error("Error al enviar el correo:", error);
      alert("Lo siento correo NO enviado intenta de nuevo.");
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center">
        <h2 className="text-base sm:text-2xl md:text-3xl lg:text-3xl font-serif text-center">
          Gracias por querer comunicarte conmigo. ¿Cómo puedo ayudarte?
        </h2>
      </div>

      <div className="min-h-screen flex items-start justify-center">
        <div className="w-11/12 md:w-1/2  px-2 pt-8 ">
          <Card>
            <CardHeader className="text-center">
              <h2>Contactame</h2>
            </CardHeader>
            <Divider />
            <CardBody>
              <form action="/" onSubmit={sendMail}>
                <div className="mb-4">
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    label="Tu nombre"
                    value={formData.name}
                    onChange={handleChange}
                    variant="bordered"
                    isRequired
                  />
                </div>
                <div className="mb-4">
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    label="Tu correo"
                    value={formData.email}
                    onChange={handleChange}
                    variant="bordered"
                    isRequired
                  />
                </div>
                <div className="mb-4">
                  <Textarea
                    id="message"
                    name="message"
                    type="text"
                    label="Mensaje"
                    value={formData.message}
                    onChange={handleChange}
                    variant="bordered"
                    isRequired
                  />
                </div>
                <div className="flex items-center justify-center">
                  <Button
                    color="success"
                    variant="shadow"
                    type="submit"
                    size="md"
                  >
                    Enviar Mensaje
                  </Button>
                </div>
              </form>
            </CardBody>
            <Divider />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FormContact;
