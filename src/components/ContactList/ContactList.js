import styled from 'styled-components';

// ul
export const List = styled.ul`
  width: min-content;

  margin-top: 15px;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 30px;
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
  width: 280px;
  background-color: steelblue;
  padding: 20px;
  border-radius: 12px;
  justify-content: space-between;
  align-items: center;
`;

// p
export const ContactText = styled.p``;

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
