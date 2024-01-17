import PropTypes from 'prop-types'
import { useState } from "react";
import Button from "../Button";
import { Input } from "../Input";
import { Form } from "./styles";

export default function ProductForm({ pageTitle }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  function handleChangeName(event) {
    setName(event.target.value);
  }

  function handleChangeDescription(event) {
    setDescription(event.target.value);
  }

  function handleChangePrice(event) {
    setPrice(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log({ name, description, price})
  }
  return (
    <>
      <h1>{pageTitle}</h1>
      <Form onSubmit={handleSubmit} noValidate>
        <Input
          onChange={handleChangeName}
          value={name}
          placeholder="Nome"
          />
        <Input
          onChange={handleChangeDescription}
          value={description}
          placeholder="Descrição"
          />
        <Input
          onChange={handleChangePrice}
          value={price}
          type="number"
          placeholder="Preço"
        />
        <Button
          type="submit"
        />
      </Form>
    </>
  );
}

ProductForm.propTypes = {
  pageTitle: PropTypes.string.isRequired,
}
