import "./App.css";
import Dropdown from "./components/Dropdown";

function App() {
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

  return (
    <main className="flex flex-col gap-8">
      <div>
        Multi False, Search True, Outlined True, With Portal True, List No
        Render
      </div>
      <Dropdown
        maxOptions={10}
        multi={false}
        search={true}
        outlined={true}
        withPortal={true}
        items={ddListWithoutRender}
      />
      <div>Multi False, Search False, Outlined False, With Portal False</div>
      <Dropdown
        maxOptions={10}
        multi={false}
        search={false}
        outlined={false}
        withPortal={false}
        items={ddList}
      />
      <div>
        Multi True, Search True, Outlined True, With Portal True, List No Render
      </div>
      <Dropdown
        maxOptions={10}
        multi={true}
        search={true}
        outlined={true}
        withPortal={true}
        items={ddListWithoutRender}
      />
      <div>Multi True, Search False, Outlined False, With Portal False</div>
      <Dropdown
        maxOptions={10}
        multi={true}
        search={false}
        outlined={false}
        withPortal={false}
        items={ddList}
      />
    </main>
  );
}

export default App;
