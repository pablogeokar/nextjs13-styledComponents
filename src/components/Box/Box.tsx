import styled from "styled-components";

type BoxProps = {
  width?: string;
  shadow?: 'shadow01' | 'shadow02' | 'shadow03' | 'shadow04' | 'shadow05'
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

    if (attr.shadow === undefined) return ({ theme }) => theme.boxShadows.shadow01;
    if (attr.shadow === 'shadow01') return ({ theme }) => theme.boxShadows.shadow01;
    if (attr.shadow === 'shadow02') return ({ theme }) => theme.boxShadows.shadow02;
    if (attr.shadow === 'shadow03') return ({ theme }) => theme.boxShadows.shadow03;
    if (attr.shadow === 'shadow04') return ({ theme }) => theme.boxShadows.shadow04;
    if (attr.shadow === 'shadow05') return ({ theme }) => theme.boxShadows.shadow05;

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