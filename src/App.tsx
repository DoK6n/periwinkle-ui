import { css } from '@emotion/react'
import { Button } from './components'

function App() {
  return (
    <>
      <div css={boxStyle}>
        <Button variant='ghost'>Button</Button>
        <Button variant='outline'>Button</Button>
        <Button variant='link'>Button</Button>
        {/* <Button size='lg' variant='solid'>Button</Button> */}
        {/* <Button size='xl'>Button</Button> */}
      </div>
      <br />
      <div css={boxStyle}>
        <Button themeMode={'dark'} variant='ghost'>
          Button
        </Button>
        <Button themeMode={'dark'} variant='outline'>
          Button
        </Button>
        <Button themeMode={'dark'} variant='link'>
          Button
        </Button>
        {/* <Button size='lg' variant='solid'>Button</Button> */}
        {/* <Button size='xl'>Button</Button> */}
      </div>
      <br />
      <div css={boxStyle}>
        <Button size='xs'>Button</Button>
        <Button size='sm'>Button</Button>
        <Button>Button</Button>
        <Button size='lg'>Button</Button>
        <Button size='xl'>Button</Button>
      </div>
      <br />
      <div css={boxStyle}>
        <Button themeMode={'dark'} size='xs'>
          Button
        </Button>
        <Button themeMode={'dark'} size='sm'>
          Button
        </Button>
        <Button themeMode={'dark'}>Button</Button>
        <Button themeMode={'dark'} size='lg'>
          Button
        </Button>
        <Button themeMode={'dark'} size='xl'>
          Button
        </Button>
      </div>
    </>
  )
}

const boxStyle = css`
  display: flex;
  gap: 1em;
`

export default App
