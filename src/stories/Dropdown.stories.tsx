import Dropdown, { DropdownList, DropdownProps } from '../components/Dropdown';
import { Meta, StoryObj } from '@storybook/react';

// Define the metadata for the component
const meta: Meta<DropdownProps> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: {
    items: { control: 'object' },
    search: { control: 'boolean' },
    multi: { control: 'boolean' },
    maxOptions: { control: { type: 'number', min: 1, max: 10, step: 1 } },
    outlined: { control: 'boolean' },
    placeholder: { control: 'text' },
    maxSelectedOptions: { control: { type: 'number', min: 1, max: 10, step: 1 } },
    withPortal: { control: 'boolean' },
  },
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

const ddList: DropdownList[] = [
  {
    label: "Aji Pangestu",
    value: "option1",
    render: <div className="text-red-400">👨🏻 Aji Pangestu</div>,
  },
  {
    label: "Boy William",
    value: "option2",
    render: <div className="text-blue-400">👦🏻 Boy William</div>,
  },
  {
    label: "One Direction",
    value: "option3",
    render: <div className="text-amber-400">🩹 One Direction</div>,
  },
  {
    label: "Cut Hawa",
    value: "option4",
    render: <div className="text-purple-400">👩🏻‍🦰 Cut Hawa</div>,
  },
  {
    label: "Cut Sarah",
    value: "option5",
    render: <div className="text-green-400">👩🏻 Cut Sarah</div>,
  },
  {
    label: "Cut Rumaisha Cut",
    value: "option6",
    render: <div className="text-pink-400">👶🏻 Cut Rumaisha Cut</div>,
  },
  {
    label: "Brad Pitt",
    value: "option7",
    render: <div className="text-yellow-400">👨🏻‍🦰 Brad Pitt</div>,
  },
  {
    label: "Foxy Shazam",
    value: "option8",
    render: <div className="text-rose-400">🤡 Foxy Shazam</div>,
  },
  {
    label: "Yoshi 2.0",
    value: "option9",
    render: <div className="text-blue-400">👨🏻‍🦱 Yoshi 2.0</div>,
  },
  {
    label: "Mario & Yoshi",
    value: "option10",
    render: <div className="text-green-400">🍄 Mario & Yoshi</div>,
  },
];

const ddListWithoutRender: DropdownList[] = [
  {
    label: "Aji Pangestu",
    value: "option1",
  },
  {
    label: "Boy William",
    value: "option2",
  },
  {
    label: "One Direction",
    value: "option3",
  },
  {
    label: "Cut Hawa",
    value: "option4",
  },
  {
    label: "Cut Sarah",
    value: "option5",
  },
  {
    label: "Cut Rumaisha Cut",
    value: "option6",
  },
  {
    label: "Brad Pitt",
    value: "option7",
  },
  {
    label: "Foxy Shazam",
    value: "option8",
  },
  {
    label: "Yoshi 2.0",
    value: "option9",
  },
  {
    label: "Mario & Yoshi",
    value: "option10",
  },
];

// Define different stories
export const Default: Story = {
  args: {
    items: ddList,
    search: false,
    multi: false,
    maxOptions: 5,
    outlined: false,
    placeholder: 'Single Select Default',
    maxSelectedOptions: 5,
    withPortal: false,
  },
}

export const WithSearch: Story = {
  args: {
    items: ddListWithoutRender,
    search: true,
    multi: false,
    maxOptions: 5,
    outlined: false,
    placeholder: 'Single Select with Search',
    maxSelectedOptions: 5,
    withPortal: false,
  },
}

export const WithMultiple: Story = {
  args: {
    items: ddList,
    search: false,
    multi: true,
    maxOptions: 5,
    outlined: false,
    placeholder: 'Multiple Selection without Search',
    maxSelectedOptions: 5,
    withPortal: false,
  },
}

export const MultipleWithSearch: Story = {
  args: {
    items: ddListWithoutRender,
    search: true,
    multi: true,
    maxOptions: 5,
    outlined: false,
    placeholder: 'Multiple Selection with Search',
    maxSelectedOptions: 5,
    withPortal: false,
  },
}

export const Outlined: Story = {
  args: {
    items: ddList,
    search: false,
    multi: false,
    maxOptions: 5,
    outlined: true,
    placeholder: 'Outlined',
    maxSelectedOptions: 5,
    withPortal: false,
  },
}

export const AllWithPortal: Story = {
  args: {
    items: ddListWithoutRender,
    search: true,
    multi: true,
    maxOptions: 10,
    outlined: true,
    placeholder: 'All Props TRUE with Portal',
    maxSelectedOptions: 10,
    withPortal: true,
  },
}