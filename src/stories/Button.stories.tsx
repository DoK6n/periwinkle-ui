import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '../components'
import { css } from '@emotion/react'

const meta: Meta<typeof Button> = { title: 'Button', component: Button }
export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
  render: (arg) => (
    <div
      css={css`
        display: flex;
        gap: 1em;
      `}
    >
      <Button {...arg} size='xs'>
        Button
      </Button>
      <Button {...arg} size='sm'>
        Button
      </Button>
      <Button {...arg} size='md'>
        Button
      </Button>
      <Button {...arg} size='lg'>
        Button
      </Button>
      <Button {...arg} size='xl'>
        Button
      </Button>
    </div>
  ),
}

export const PrimaryLightVariant: Story = {
  render: ({ themeMode }) => (
    <div
      css={css`
        display: flex;
        gap: 1em;
      `}
    >
      <Button themeMode={themeMode} variant='solid'>
        Button
      </Button>
      <Button themeMode={themeMode} variant='ghost'>
        Button
      </Button>
      <Button themeMode={themeMode} variant='outline'>
        Button
      </Button>
      <Button themeMode={themeMode} variant='link'>
        Button
      </Button>
    </div>
  ),
}

export const PrimaryLightSolid: Story = {
  render: (args) => <Button {...args}>Button</Button>,
  args: {
    variant: 'solid',
    themeMode: 'light',
  },
}

export const PrimaryLightGhost: Story = {
  render: (args) => <Button {...args}>Button</Button>,
  args: {
    variant: 'ghost',
    themeMode: 'light',
  },
}

export const PrimaryLightLink: Story = {
  render: (args) => <Button {...args}>Button</Button>,
  args: {
    variant: 'link',
    themeMode: 'light',
  },
}
