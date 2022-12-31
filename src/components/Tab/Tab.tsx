import React, { ReactElement, useState } from 'react';
import { Icon, Text } from '..'
import styled from 'styled-components'
import { IconsType } from './../Icon/Icon.d';

interface ITabItem extends IconsType {
  label: string;
  component: ReactElement;
}

interface ITab {
  title?: string;
  tabs: ITabItem[]
}

export function Tab({ title, tabs }: ITab) {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const activeTab = (index: number) => {
    setActiveTabIndex(index)
  }

  return (
    <TabView>
      {title && <Text level={1} fontWeight={700}>{title}</Text>}
      <Body>
        {
          tabs === undefined ?
            <Text>No Content</Text>
            :
            <div>
              <Tabs>
                {
                  tabs.map((tab, index) => (
                    <div key={index}>
                      <Text
                        onClick={() => activeTab(index)}
                        className={index === activeTabIndex ? 'active-tab' : 'tab'}
                      >
                        {tab.icon && <Icon icon={tab.icon} size={20} weight='regular' bgColor='#e8e8e8' />}
                        {tab.label}
                      </Text>
                    </div>
                  ))
                }
              </Tabs>
              <Content>
                {tabs[activeTabIndex].component}
              </Content>
            </div>
        }
      </Body>
    </TabView>
  )
}

const TabView = styled.div`
  //width: 100%;
  //max-width: 600px;
`
const Body = styled.div`
  //padding: 1.6rem;
  border-radius: .8rem;
  overflow: hidden;
`
const Tabs = styled.div`  
  display: flex;  
  align-items: end;
  cursor: pointer;  
  z-index: 1;
  
  .tab{        
    padding: 1rem 1rem;
    border: 1px solid ${({ theme }) => theme.colors.lightGray};
    border-left: 0;    
    background-color: #e8e8e8;
    font-weight: 300;
    border-radius: 1rem 3rem 0 0;    
  }
  .active-tab{         
    padding: 1rem 1rem;    
    border-top: 1px solid ${({ theme }) => theme.colors.lightGray};
    border-right: 1px solid ${({ theme }) => theme.colors.lightGray};
    background-color: ${({ theme }) => theme.colors.white};    
    font-weight: 500;
    border-radius: 1rem 3rem 0 0;
  }

  .tab:first-of-type,
  .active-tab:first-of-type{
    border-left: 1px solid ${({ theme }) => theme.colors.lightGray};
  }

  .tab:hover, .active-tab:hover{
    font-weight: 500;
  }
`
const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 1.6rem;
  border-left:1px solid ${({ theme }) => theme.colors.lightGray};
  border-bottom:1px solid ${({ theme }) => theme.colors.lightGray};
  border-right:1px solid ${({ theme }) => theme.colors.lightGray};
  ::before{
    content: '';
    position: absolute;
    height: 2px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.lightGray};
    top: -1px;
    right: 0;
    z-index: -1;
  }
`