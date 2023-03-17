import React, { useEffect, useState } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm.jsx";
import { TileList } from "../../components/tileList/TileList.jsx";

export const ContactsPage = ({ contacts, addContact }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [duplicate, setDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!duplicate) {
      addContact(name, phone, email);
      setName("");
      setPhone("");
      setEmail("");
    }
  };

  useEffect(
    () =>
      contacts.find((contact) => contact.name === name) !== undefined
        ? setDuplicate(true)
        : setDuplicate(false),
    [name, contacts, duplicate]
  );

  return (
    <>
      <section>
        <h2>
          Add Contact
          {duplicate ? " - Name Already Exists" : ""}
        </h2>
        <ContactForm
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList tiles={contacts} />
      </section>
    </>
  );
};
