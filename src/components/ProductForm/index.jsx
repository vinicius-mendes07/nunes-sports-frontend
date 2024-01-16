import Button from "../Button";
import { Input } from "../Input";
import { Form } from "./styles";

export default function ProductForm() {
  return (
    <Form>
      <Input placeholder="Nome" />
      <Input placeholder="Descrição" />
      <Input placeholder="Preço" />
      <Button />
    </Form>
  )
}
