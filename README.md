# React + Vite + TailwindCSS + Storybook

Muhammad Rizkiansyah

## How to run

After installation `npm i` you can use `npm run dev` to run the development

## How to open Storybook

You can run `npm run storybook` to allow access the storybook feature.

## Note

I don't understand with outlined (just visually try to match with the video)

## List of Features

- [👍🏻] Searchable Dropdown
- [👍🏻] Portal Support
- [👍🏻] Single or Multiple Selection
- [👍🏻] Customization of how options are rendered
- [👍🏻] Search Filtering
- [👍🏻] Toggle Features (can be test on Storybook)
- [👍🏻] Z-Index Compatibility

## Required

- Storybook URL: <https://679f4d44682d5b75f90b35ca-bddiyrdlpc.chromatic.com/>
- Github URL: <https://github.com/HaraHQ/dropdown>
- Deployment URL: <https://dropdown-six-ruddy.vercel.app/>

## Use

### Default Data

```ts
const ddListWithoutRender = [
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
```

### With Render (Element showing)

```ts
const ddList = [
  {
    label: "Rafi Ahmad",
    value: "option1",
    render: <div className="text-red-400">👨🏻 Rafi Ahmad</div>,
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
```

### Component

```tsx
<Dropdown
  maxOptions={10} // Max Options that allow to see
  multi={false} // multiple items
  search={true} // allow to use search
  outlined={true} // outlined
  withPortal={true} // use create portal to avoid clipped div
  items={ddListWithoutRender} // items that you can prepare above
/>
```

### Props

- **maxOptions** (number | undefined) = to allow you to show options list on dropdown, default: 3.
- **multi** (boolean | undefined) = to allow you to use multi-items selection or revert back to single selection.
- **search** (boolean | undefined) = to allow you to use search on dropdown, the search on default render (without use of render props on items) can enable the highlighting the item.
- **outlined** (boolean | undefined) = to change the interface of main dropdown (idk).
- **withPortal** (boolean | undefined) = when you need to show dropdown on specific situation like overflow hidden, you can use it this.
- **items** (DropdownList[]) = you can use one of two above, when you provide "render" prop, it will consumed first rather "label" prop, so you can provide other component also on render.
- **maxSelectedOptions** (number | undefined) = to allow you increase selected items on multi select (optional, used on multi select only)
- **placeholder** (string |  undefined) = to allow show placeholder like "Click to see dropdown" or just "" empty string

### Types

```ts
export type DropdownList = {
  label: string;
  value: string;
  render?: ReactNode;
};

export type DropdownProps = {
  items: DropdownList[];
  search?: boolean;
  multi?: boolean;
  maxOptions?: number;
  outlined?: boolean;
  placeholder?: string;
  maxSelectedOptions?: number;
  withPortal?: boolean;
};

type OptionsProps = {
  search: boolean;
  selected: DropdownList[];
  handleFilter: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSelect: (item: DropdownList) => void;
  filtered: DropdownList[];
  highlightText: (text: string) => JSX.Element[];
  inputRef?: React.RefObject<HTMLInputElement>;
  optionRef?: React.RefObject<HTMLSpanElement>;
};
```
