import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  background-color: #04AA6D;
  width: 50%;
  height: 450px;
  z-index:999;
  top: 0;
  left: 25%;
  margin: 25% auto;
  border-radius: 25px;
  padding: 0 50px;
  text-align: center;  
  color: white;

  h2{
    text-align: center;
  }
  h3{
    text-align: left;
  }
  .btn{
    width: 45%;
    background-color: #fff;
    color: #4CAF00;
    padding: 14px 20px;
    margin: 40px auto;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 18px;

    &+.btn{
      margin-left: 5%;
    }
  }
`;
