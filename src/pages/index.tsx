
import { Text } from "../components"

export default function StyleGuide() {
  return (
    <>
      {/** Typography */}
      <Text level={1} fontWeight={700}>Typography</Text>
      <Text>This is sample text!</Text>
      <Text level={1}>This is sample text!</Text>
      <Text level={2} fontWeight={600}>This is sample text!</Text>
      <Text level={3} color="gray">This is sample text!</Text>
      <Text level={3} color="white">This is sample text!</Text>
      <Text level={5} lineHeight={4}>This is sample text!</Text>
      <Text level={6}>This is sample text!</Text>
      <Text level={4} size="xlarge">This is sample text!</Text>
      <Text>Code:</Text>
      <pre>
        {`
        <Text level={1} fontWeight={700}>Typography</Text>
        <Text>This is sample text!</Text>
        <Text level={1}>This is sample text!</Text>
        <Text level={2} fontWeight={600}>This is sample text!</Text>
        <Text level={3} color="gray">This is sample text!</Text>
        <Text level={3} color="white">This is sample text!</Text>
        <Text level={5} lineHeight={4}>This is sample text!</Text>
        <Text level={6}>This is sample text!</Text>
        <Text level={4} size="xlarge">This is sample text!</Text>
      `}
      </pre>
      <hr />
    </>
  )
}
