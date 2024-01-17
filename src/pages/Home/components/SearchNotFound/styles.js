import styled from "styled-components";

export const Container = styled.div`
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  margin-top: 16px;

  p {
    margin-left: 8px;
    font-weight: bold;
    word-break: break-all;
    color: ${({ theme }) => theme.colors.danger.main};
  }
`
