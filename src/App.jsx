import styled from 'styled-components';
import './App.css';

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  background-color: goldenrod;
`;

const Button = styled.button`
  font-size: 1.4rem;
  padding: 1.2rem 1.6rem;
  font-weight: 500;
  border: none;
  border-radius: 7px;
  background-color: purple;
  color: white;
  margin: 20px;
  cursor: pointer;
`;

const Input = styled.input`
  border: 1px solid #ddd;
  padding: 0.8rem 1.2rem;
  border-radius: 8px;
`;

const StyledApp = styled.div`
  background-color: orangered;
`;

function App() {
  return (
    <StyledApp>
      <H1>The Wild Oasis</H1>
      <Button onClick={() => alert('check in')}>Check in</Button>
      <Button onClick={() => alert('check out')}>Check out</Button>
      <Input type='number' placeholder='Number of guests' />
    </StyledApp>
  );
}

export default App;
