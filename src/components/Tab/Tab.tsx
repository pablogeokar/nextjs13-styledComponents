import styled from 'styled-components'


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  font-size: 1rem;
  //padding: 1rem;
  //background-color  : lightblue;
`

export const Tabs = styled.div`
  display: flex;
  gap: 1px;  
  //padding: 1rem;
  //background-color: lightblue;
`

export const Item = styled.span`
  display: flex;
  justify-content: center;
  //background-color: ${({ theme }) => theme.colors.lightGray};
  //background-color: #ecf0f1;
  padding: 4px 1rem;  
  border-radius: 8px 8px 0 0;
  min-width: 120px; 
  cursor: pointer ;
  box-shadow: ${({ theme }) => theme.boxShadows.strong};

  &.active{
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }

  :hover{
    filter: brightness(1.1)
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  //background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  //border: 1px ${({ theme }) => theme.colors.lightGray};
  //box-shadow: ${({ theme }) => theme.boxShadows.basic01};
  //min-height: 100px;
  //min-width: 100%;
`