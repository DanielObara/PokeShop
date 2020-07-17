import styled from 'styled-components';

export const CartContainer = styled.div`
  background-color: #fff;

  border-radius: 10px;
  min-height: 200px;
  position: relative;

  h2 {
    padding: 10px;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    img {
      margin-right: 10px;
    }
  }
  ul {
    padding: 10px;
    padding-bottom: 40px;
    li {
      padding: 10px;
      color: #fff;
      font-weight: bold;
    }
  }
`;
export const Total = styled.p`
  color: #255a9d;
  font-weight: bold;
  position: absolute;
  bottom: 10px;
  right: 10px;
  span {
    font-size: 22px;
  }
`;
