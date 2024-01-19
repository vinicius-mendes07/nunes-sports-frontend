import styled, { css } from "styled-components";

export const Input = styled.input`
  background-color: #fff;
  font-size: 16px;
  padding: 0 16px;
  border-radius: 4px;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.04);
  width: 100%;
  height: 52px;
  outline: none;
  border: 2px solid #fff;
  transition: border-color 0.2s ease-in;
  appearance: none;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary.main};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[200]};
  }

  ${({ theme, error }) => error && css`
      color: ${theme.colors.danger.main};
      border-color: ${theme.colors.danger.main} !important;
  `}

  &[disabled] {
    background-color: ${({ theme }) => theme.colors.gray[100]};
    border-color: ${({ theme }) => theme.colors.gray[200]};
  }
`;
