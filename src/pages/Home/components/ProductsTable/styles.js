import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  border: 1px solid ${({ theme }) => theme.colors.gray[100]};
  border-radius: 8px;
  overflow: hidden;
  margin-top: 32px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  table {
    width: 100%;
    border-collapse: collapse;

    thead {
      border-bottom: 1px solid  ${({ theme }) => theme.colors.gray[200]};
    }

    th {
      background-color: ${({ theme }) => theme.colors.gray[100]};
      padding: 14px;
      font-size: 14px;
      text-align: center;
    }

    tbody {
      background-color: #fff;
    }

    td {
      font-size: 14px;
      padding: 14px;
      text-align: center;
      max-width: 250px;
    }
  }

  button {
    border: none;
    background-color: transparent;
    margin-left: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint}) {
    table {
      th {
        font-size: 12px;
      }

      td {
        font-size: 12px;
        padding: 12px;
      }
      .actions {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
      }
    }

    button {
      margin-left: 0px;
    }

    img {
      width: 15px;
    }
  }
`;
