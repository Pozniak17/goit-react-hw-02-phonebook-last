import styled from 'styled-components';

export const Title = styled.h1`
  text-align: center;
`;

export const Form = styled.form`
  margin: 0 auto;
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
`;

export const FormButton = styled.button`
  margin-top: 20px;
  padding: 4px;
  background-color: #fff;
  border: 1px solid grey;
  border-radius: 4px;
`;
