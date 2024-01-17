import PropTypes from 'prop-types'
import { useState } from "react";
import Button from "../Button";
import { Input } from "../Input";
import { Form } from "./styles";

export default function ProductForm({ pageTitle, buttonLabel }) {
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
      <Form onSubmit={handleSubmit} noValidate>
        <h1>{pageTitle}</h1>
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

        >
          {buttonLabel}
        </Button>
      </Form>
    </>
  );
}

ProductForm.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string.isRequired,
}
