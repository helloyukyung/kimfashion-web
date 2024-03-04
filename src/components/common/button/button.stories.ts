import {Meta, StoryObj} from '@storybook/react'
import Button from '.'

const meta = {
  title: 'common/button',
  component: Button,
  argTypes: {
    onClick: {action: 'clicked'}
  }
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: '버튼',
    styleType: 'primary',
    full: true
  }
}

export const WithFormItem: Story = {
  args: {
    children: '버튼',
    styleType: 'primary',
    full: true
  }
}
