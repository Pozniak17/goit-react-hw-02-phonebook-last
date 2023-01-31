import styled from 'styled-components';

// Форма
export const Title = styled.h1`
  text-align: center;
`;

export const Form = styled.form`
  margin: auto;
  border: 1px solid black;
  width: 400px;
  padding: 10px;
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: 500;
  font-size: 20px;
  /* padding: 10px; */
`;

export const FormInput = styled.input`
  width: 45%;
  height: 20px;
  font-size: 19px;
  font-weight: 500;
  margin-bottom: 15px;
`;

export const FormButton = styled.button`
  /* margin-top: 20px;
  padding: 4px;
  background-color: #fff;
  border: 1px solid grey;
  border-radius: 4px; */
`;

// ul
export const ContactList = styled.ul`
  width: 800px;
  margin-top: 15px;
  margin-top: 15px;
  margin-left: auto;
  margin-right: auto;
  display: flex;

  flex-wrap: wrap;

  /* border: 1px solid black; */
`;

// li
export const ContactItem = styled.li`
  margin-right: 10px;
  margin-top: 10px;
  display: flex;
  border: 1px solid black;
  width: 200px;
  background-color: #bc65ffc9;
  padding: 20px;
  border-radius: 12px;
  justify-content: space-between;
  align-items: center;
`;

// p
export const ContactText = styled.p`
  /* margin-right: 15px; */
`;

export const ContactButton = styled.button`
  padding: 5px 10px 5px 10px;
  border-radius: 10px;
  border: gray;

  cursor: pointer;

  &:hover {
    background: navy;
    color: white;
  }
`;
