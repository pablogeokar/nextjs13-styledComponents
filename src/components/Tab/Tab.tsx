import styled from 'styled-components'

export default function Tab() {
  return (
    <Container>
      <Tabs>
        <Item className='active'>Component</Item>
        <Item >Design</Item>
        <Item>Code</Item>
      </Tabs>
      <Content>
        a
      </Content>
    </Container>
  )
}


const Container = styled.div`
  //position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  min-height: 40rem;  
  //font-size: 1.6rem;
  //padding: 1rem;  
`

const Tabs = styled.div`
  display: flex;  
  position: absolute ;  
  //overflow: hidden;
  //overflow-x: visible;  
  //gap: 1px;  
  //padding: 1rem;
  //background-color: lightblue;
  @media only screen and (max-width: 360px) {
    margin-left : 0;   
  }
`

const Item = styled.span`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.lightGray};
  //opacity: .8;  
  //background-color: #ecf0f1;
  font-size: 1.4rem;
  padding: .5rem 1.6rem;  
  border-radius: 1.6rem 1.2rem 0 0;
  border-right: 1px solid;
  border-top: 1px solid;
  border-left: 1px solid;
  min-width: 15rem;
  cursor: pointer ;
  //box-shadow: ${({ theme }) => theme.boxShadows.top};
  

  :first-of-type{       
    border-right: 0;
    border-radius: 1.6rem 1.2rem 0 0rem;
  }

  :last-of-type{
    border-left: 0;
  }

  &.active{
    position: relative;
    top: 1px;    
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.gray};
    //z-index: 100;
    
  }

  :hover{
    filter: brightness(.9);
    &.active{
      filter: none;
    }
  }

  @media only screen and (max-width: 360px) {
    border-radius: 1.6rem 1.2rem 0 0rem; 
  }

  
`

const Content = styled.div`
  display: flex;
  position: relative ;
  top: 3.2rem;
  left: 0;
  z-index: -1;
  flex: 1;
  flex-direction: column;  
  padding: 1.6rem;
  border: 1px solid;
  background-color: ${({ theme }) => theme.colors.white};
  //border-radius: 1rem;
  border-radius: 0 0 1rem 1rem;
  //border: 1px ${({ theme }) => theme.colors.lightGray};
  //box-shadow: ${({ theme }) => theme.boxShadows.basic01};
  //min-height: 100px;
  //min-width: 100%;

  @media only screen and (max-width: 360px) {
    border-radius: 0 0 1rem 1rem;
  }
`