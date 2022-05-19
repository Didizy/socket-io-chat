import styled from "styled-components";

export const Page = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  align-items: center;
  background-color: #b9adc5;
  flex-direction: column;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  max-height: 500px;
  overflow: auto;
  width: 400px;
  border: 1px solid #f9f8f9;
  border-radius: 10px;
  padding-bottom: 10px;
  margin-top: 25px;
`;

export const TextArea = styled.textarea`
  width: 98%;
  height: 100px;
  border-radius: 10px;
  margin-top: 10px;
  padding-left: 10px;
  padding-top: 10px;
  font-size: 17px;
  background-color: #a8c3be;
  border: 1px solid #f9f8f9;
  outline: none;
  color: #f9f8f9;
  letter-spacing: 1px;
  line-height: 20px;
  ::placeholder {
    color: lightgray;
  }
`;

export const Button = styled.button`
  background-color: #4d9196;
  width: 100%;
  border: none;
  height: 50px;
  border-radius: 10px;
  color: #f9f8f9;
  font-size: 17px;
`;

export const Input = styled.input`
  background-color: #4d9196;
  width: 100%;
  border: none;
  height: 25px;
  border-radius: 10px;
  margin-bottom: 5px;
  color: #f9f8f9;
  font-size: 17px;
`;

export const Form = styled.form`
  width: 400px;
`;

export const MyRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`;

export const MyMessage = styled.div`
  width: 45%;
  background-color: #4d9196;
  color: #f9f8f9;
  padding: 10px;
  margin-right: 5px;
  text-align: center;
  border-radius: 10px 10px 0px 10px;
`;

export const PartnerRow = styled(MyRow)`
  justify-content: flex-start;
`;

export const PartnerMessage = styled.div`
  width: 45%;
  background-color: #f9f8f9;
  color: #4d9196;
  border: 1px solid lightgray;
  padding: 10px;
  margin-left: 5px;
  text-align: center;
  border-radius: 10px 10px 10px 0px;
`;
