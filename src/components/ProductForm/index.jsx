import PropTypes from 'prop-types'
import { useImperativeHandle } from 'react';
import { forwardRef } from 'react';
import { useState } from "react";
import Button from "../Button";
import { Input } from "../Input";
import { Form } from "./styles";

const ProductForm = forwardRef(({ pageTitle, buttonLabel, onSubmit }, ref) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useImperativeHandle(ref, () => ({
    setFieldsValues: (product) => {
      setName(product.name ?? '');
      setDescription(product.description ?? '');
      setPrice(product.price ?? '');
    },
    resetFields: () => {
      setName('');
      setDescription('');
      setPrice('');
    }
  }), []);

  function handleChangeName(event) {
    setName(event.target.value);
  }

  function handleChangeDescription(event) {
    setDescription(event.target.value);
  }

  function handleChangePrice(event) {
    setPrice(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitting(true)

    await onSubmit({name, description, price: +price})

    setIsSubmitting(false)
  }

  const isFormValid = (name && price)

  return (
    <>
      <Form onSubmit={handleSubmit} noValidate>
        <h1>{pageTitle}</h1>
        <Input
          onChange={handleChangeName}
          value={name}
          placeholder="Nome *"
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
          placeholder="Preço *"
        />
        <Button
          type="submit"
          disabled={!isFormValid || isSubmitting}
        >
          {buttonLabel}
        </Button>
      </Form>
    </>
  )
});

export default ProductForm;

ProductForm.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
}
