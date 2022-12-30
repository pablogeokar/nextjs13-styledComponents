import React, { ReactElement, useState } from 'react';
import { Text } from '..'
import styled from 'styled-components'

interface ITabItem {
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
      {title && <Text level={3} fontWeight={700}>{title}</Text>}
      <Body>
        {
          tabs === undefined ?
            <Text>No Content</Text>
            :
            <div>
              <Tabs>
                {
                  tabs.map((tab, index) => (
                    <Text
                      key={index}
                      className={index === activeTabIndex ? 'active-tab' : 'tab'}
                      onClick={() => activeTab(index)}
                    >
                      {tab.label}
                    </Text>
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
  width: 100%;
  max-width: 600px;
`
const Body = styled.div`
  //padding: 1.6rem;
  border-radius: .8rem;
  overflow: hidden;
`
const Tabs = styled.div`  
  display: flex;  
  align-items: center;
  cursor: pointer;
  z-index: 1;

  .tab{
    padding: 1.6rem 1rem;
    border: 1px solid ${({ theme }) => theme.colors.lightGray};
    //opacity: .9;
    background-color: #f2f2f2;
  }
  .active-tab{
    padding: 1.6rem 1rem;
    border-left: 1px solid ${({ theme }) => theme.colors.lightGray};
    border-top: 1px solid ${({ theme }) => theme.colors.lightGray};
    border-right: 1px solid ${({ theme }) => theme.colors.lightGray};
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 600;
  }

  .tab:first-of-type,
  .active-tab:first-of-type{
    border-right: none;
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