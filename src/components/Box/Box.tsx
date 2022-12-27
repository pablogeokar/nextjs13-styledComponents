import styled from "styled-components";
import { IShadows } from './../../../types';

interface BoxProps extends IShadows {
  width?: string;
}

type RowProps = {
  justify?: 'center' | 'end'
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

    if (attr.shadow === undefined) return ({ theme }) => theme.boxShadows.basic01;
    if (attr.shadow === 'basic01') return ({ theme }) => theme.boxShadows.basic01;
    if (attr.shadow === 'basic02') return ({ theme }) => theme.boxShadows.basic02;
    if (attr.shadow === 'basic03') return ({ theme }) => theme.boxShadows.basic03;
    if (attr.shadow === 'bold') return ({ theme }) => theme.boxShadows.bold;
    if (attr.shadow === 'skyblue') return ({ theme }) => theme.boxShadows.skyblue;
    if (attr.shadow === 'strong') return ({ theme }) => theme.boxShadows.strong;

  }};

`

export const Row = styled.div<RowProps>`
display: flex;
justify-content: ${attr => {
    if (attr.justify === 'center') return 'center'
    if (attr.justify === 'end') return 'flex-end'
  }
  };
gap: 1rem;
`