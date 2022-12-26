import styled from "styled-components";

type BoxProps = {
  width?: string;
  variation?: 1 | 2
}

type RowProps = {
  center?: boolean
  end?: boolean
}

export const Container = styled.div<BoxProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  background-color: ${({ theme }) => theme.colors.white};
  width: ${attr => attr.width};
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: ${attr => {
    if (attr.variation === undefined) return ({ theme }) => theme.boxShadows.shadow01
    if (attr.variation === 1) return ({ theme }) => theme.boxShadows.shadow01
    if (attr.variation === 2) return ({ theme }) => theme.boxShadows.shadow02
  }};
`

export const Row = styled.div<RowProps>`
  display: flex;
  justify-content: ${attr => {
    if (attr.center) return 'center'
    if (attr.end) return 'flex-end'
  }};
  gap: 1rem;  
`