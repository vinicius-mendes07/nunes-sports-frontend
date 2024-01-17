import styled from "styled-components";

export const Container = styled.div`
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 16px;

  strong {
    color: ${({ theme }) => theme.colors.danger.main};
    font-size: 22px;
    margin-bottom: 8px;
    display: block;
  }
`
