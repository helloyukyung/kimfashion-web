import {Meta, StoryObj} from '@storybook/react'
import Input from '.'
const meta = {
  title: 'common/input',
  component: Input
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: '인풋',
    placeholder: '값을 입력해주세요.'
  }
}

export const WithFormItem: Story = (args: any) => <Input {...args} />
WithFormItem.args = {
  placeholder: '값을 입력해주세요.'
}
