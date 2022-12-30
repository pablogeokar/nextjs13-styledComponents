import React, { Children, ReactElement, ReactNode, useState } from 'react';
import styled from 'styled-components'

interface IItem {
  label: string;
  id: string;
}

interface ITab {
  tab: IItem[]
  children: ReactNode
}

export function Container({ tab, children }: ITab) {
  const [activeTab, setActiveTab] = useState('')

  function handleActiveTab(tab: string) {
    setActiveTab(tab)    
    //children[0].props.style.display = 'block';
    console.log(children)
  }

  return (
    <Tabs>
      <div style={{ display: 'flex' }}>
        {

          tab.map((item, index) => (
            <div key={item.id} onClick={() => handleActiveTab(item.id)}>
              {index === 0 ?
                <InputRadio type="radio" name="tabs" id={item.id} defaultChecked className='radio' /> :
                <InputRadio type="radio" name="tabs" id={item.id} className='radio' />
              }
              <Label htmlFor={item.id} className='label'>{item.label}</Label>
            </div>
          ))

        }
      </div>

      <Content>
        {children}
      </Content>

    </Tabs>
  )
}

const Tabs = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1rem;  
  //width: 100%;
  //max-width: 400px;

  .radio:checked+.label{
    font-weight: 600;
    color: ${({ theme }) => theme.colors.primary};
    border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
  }
`

const InputRadio = styled.input`&[type="radio"]{
    display: none;
  } 
`

const Label = styled.label`
  padding: 1.2rem 1.6rem;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.normal};
`

const Content = styled.div`
  //order: 1;
  width: 100%;
  padding: 1.6rem;
  border-bottom: 3px solid #ddd;
  //line-height: 1.5;
  //display: none;
`