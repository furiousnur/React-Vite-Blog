import styled from "styled-components";

export const ContactWrapper = styled.section`
    // padding: 9rem 0 5rem 0;
    span{
        border: 3px solid rgb(98 84 243);
        padding: 1rem;
    }
    .form-error {
      font-size: 1.4rem;
      color: #b22b27;
    }
    .form-border{
        border: 3px solid rgb(98 84 243);
        padding: 2rem;
    }
    .container {
      margin-top: 6rem;
      text-align: center;
      .contact-form {
        max-width: 50rem;
        margin: auto;
        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;
          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;
            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;