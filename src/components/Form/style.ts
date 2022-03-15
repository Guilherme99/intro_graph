import styled from 'styled-components';

export const Container = styled.div`
min-width: 500px;
display:flex;
background-color: #f2f2f2;
border-radius: 5px;
padding: 20px;
flex-direction: column;
justify-content: center;
margin: 0 auto;

input[type=text], input[type=number], input[type=date], select {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    
  }
  
    button[type=submit] {
    width: 100%;
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    }
  
  input[type=submit]:hover {
    background-color: #45a049;
  }
  
`;
