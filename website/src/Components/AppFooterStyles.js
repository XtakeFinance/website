import styled from 'styled-components';
   
export const Box = styled.div`
  padding: 80px 60px;
  background: black;
  position: absolute;
  bottom: 0;
  width: 100%;
  
   
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;
   
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    margin-bottom: 20px;
    /* background: red; */
`;
   
export const ColumnAbout = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 0 20% 0 0;
`;
   
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 20px;
`;
   
export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 
                         minmax(185px, 1fr));
  grid-gap: 20px;
   
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(200px, 1fr));
  }
`;
   
export const FooterLink = styled.a`
  color: #B3B3B3;
  margin-bottom: 10px;
  font-size: 14px;
  text-decoration: none;
   
  &:hover {
      color: #ff4d4f;
      transition: 200ms ease-in;
  }
`;
   
export const Heading = styled.p`
  font-size: 18px;
  color: #fff;
  margin-bottom: 20px;
  font-weight: bold`;