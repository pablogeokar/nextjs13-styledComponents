
import styled from "styled-components"
import { Text, Box, Input, Tab, Icon } from "../components"


export default function StyleGuide() {
  return (
    <Page>
      {/** Typography */}
      <Icon icon="TextAa" />
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
        <Text color="primary">This is a Box</Text>
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
      <Tab
        title="Typography"
        tabs={[
          { label: 'Tab #1', component: (<Text>Content Tab #1</Text>) },
          { label: 'Tab #2', component: (<Text>Content Tab #2</Text>) },
          { label: 'Tab #3', component: (<Text>Content Tab #3</Text>) }
        ]} />
      <hr />
    </Page>
  )
}

const Page = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin:  0 auto;
`
