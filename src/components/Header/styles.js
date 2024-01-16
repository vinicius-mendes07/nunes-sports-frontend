import styled from "styled-components";

export const Container = styled.header`
  padding: 24px 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  margin-bottom: 32px;

  div {
    display: flex;
    align-items: center;
    gap: 16px;
    font-weight: bold;

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.gray[900]};
      color: ${({ theme }) => theme.colors.primary.main};
      transition: 0.2s ease-in;

      &:hover {
        color: ${({ theme }) => theme.colors.primary.dark};
      }
    }
  }

  img  {
    border-radius: 4px;
    width: 150px;
  }
`
