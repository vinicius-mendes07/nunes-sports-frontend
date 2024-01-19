import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import Button from "../Button";
import { Input } from "../Input";
import { Form } from "./styles";
import useProductForm from './useProductForm';

const ProductForm = forwardRef(({ pageTitle, buttonLabel, onSubmit }, ref) => {
  const {
    name,
    description,
    price,
    isSubmitting,
    handleChangeName,
    handleChangeDescription,
    handleChangePrice,
    handleSubmit,
    isFormValid,
  } = useProductForm(onSubmit, ref);

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
          disabled={!isFormValid}
          isLoading={isSubmitting}
        >
          {buttonLabel}
        </Button>
      </Form>
    </>
  );
});

export default ProductForm;

ProductForm.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
