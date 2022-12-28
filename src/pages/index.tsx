
import styled from "styled-components"
import { Text, Box, Input, Tab } from "../components"


export default function StyleGuide() {
  return (
    <Page>
      {/** Typography */}
      <Text level={1} fontWeight={700}>Typography</Text>
      <Text>This is sample text!</Text>
      <Text level={1}>This is sample text!</Text>
      <Text level={2} fontWeight={600}>This is sample text!</Text>
      <Text level={3} color='gray'>This is sample text!</Text>
      <Text level={3} color="white">This is sample text!</Text>
      <Text level={5} lineHeight={4}>This is sample text!</Text>
      <Text level={6}>This is sample text!</Text>
      <Text level={4} size="xlarge">This is sample text!</Text>
      <Text level={4}>Code:</Text>
      <pre>
        {
          `
          <Text level={1} fontWeight={700}>Typography</Text>
          <Text>This is sample text!</Text>
          <Text level={1}>This is sample text!</Text>
          <Text level={2} fontWeight={600}>This is sample text!</Text>
          <Text level={3} color="gray">This is sample text!</Text>
          <Text level={3} color="white">This is sample text!</Text>
          <Text level={5} lineHeight={4}>This is sample text!</Text>
          <Text level={6}>This is sample text!</Text>
          <Text level={4} size="xlarge">This is sample text!</Text>
          `
        }
      </pre>
      <hr />

      {/** Box */}
      <Text level={1} fontWeight={700}>Box</Text>
      <Box.Container shadow="basic01">
        <Box.Row justify="center">
          <Text fontWeight={600}>This is a center text</Text>
        </Box.Row>
        <Box.Row justify="end">
          <Text>This is a Box</Text>
        </Box.Row>
        <Text color="lightGray">This is a Box</Text>
      </Box.Container>

      <Text level={4}>Code:</Text>
      <pre>
        {`        
        <Box.Container width="600px" shadow="shadow01">
        <Box.Row justify="center">
          <Text fontWeight={600}>This is a center text</Text>
        </Box.Row>
        <Box.Row justify="end">
          <Text>This is a Box</Text>
        </Box.Row>
        <Text color="lightGray">This is a Box</Text>
      </Box.Container>
        `}
      </pre>
      <hr />
      {/** Input */}
      <Text level={1} fontWeight={700}>Input</Text>
      <Box.Container shadow="skyblue">
        <Input label="Email" placeholder="email" />
        <Box.Row>
          <Input label="Password" placeholder="password" type="password" />
          <Input label="Confirm password" placeholder="password" type="password" />
        </Box.Row>
      </Box.Container>
      <Text level={4}>Code:</Text>
      <pre>
        {`
        <Box.Container width="600px" shadow="skyblue">
         <Input label="Email" placeholder="email" />
          <Box.Row>
           <Input label="Password" placeholder="password" type="password" />
           <Input label="Confirm password" placeholder="password" type="password" />
          </Box.Row>
        </Box.Container>
    `}
      </pre>
      <hr />
      <Text level={1} fontWeight={700}>Tab</Text>
      <Tab.Container>
        <Tab.Tabs>
          <Tab.Item className="active">View</Tab.Item>
          <Tab.Item>Code</Tab.Item>
        </Tab.Tabs>
        <Tab.Content>
        test
        </Tab.Content>
      </Tab.Container>
      <hr />
    </Page>
  )
}

const Page = styled.div`
  padding: 2rem;
`
