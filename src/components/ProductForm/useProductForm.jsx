import { useImperativeHandle, useState } from "react";

export default function useProductForm(onSubmit, ref) {
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
    setIsSubmitting(true);

    await onSubmit({ name, description, price: +price });

    setIsSubmitting(false);
  }

  const isFormValid = (name && price);

  return {
    name,
    description,
    price,
    isSubmitting,
    handleChangeName,
    handleChangeDescription,
    handleChangePrice,
    handleSubmit,
    isFormValid,
  };
}
