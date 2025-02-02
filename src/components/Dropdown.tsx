import {
  ChangeEvent,
  MouseEvent,
  FC,
  useEffect,
  useRef,
  useState,
  useCallback,
  ReactNode,
} from "react";
import { useDebounce } from "../hooks/useDebounce";
import ChevronDown from "./ChevronDown";
import Magnifier from "./Magnifier";
import Times from "./Times";
import { useClickOutside } from "../hooks/useClickOutside";
import { createPortal } from "react-dom";

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

const Options: FC<OptionsProps> = ({
  search,
  handleFilter,
  filtered,
  highlightText,
  handleSelect,
  selected,
  inputRef,
  optionRef,
}) => {
  return (
    <div
      id="options"
      className="absolute w-full shadow-xs z-[1000] bg-white"
      style={search ? { marginTop: 4 } : {}}
    >
      {search && (
        <div className="flex items-center border-[1px] p-1 border-gray-200 w-full">
          <div className="px-1">
            <Magnifier />
          </div>
          <input
            type="text"
            className="outline-none w-full"
            onChange={handleFilter}
            ref={inputRef}
          />
        </div>
      )}
      <div className="flex flex-col w-full border-x-[1px] border-b-[1px] border-gray-200 text-sm">
        {filtered.map((item) => {
          const isSelected = selected.some((i) => i.value === item.value);
          return (
            <span
              key={item.value}
              onClick={() => handleSelect(item)}
              className={`p-1.5 w-full cursor-pointer ${
                isSelected ? "bg-blue-200" : "hover:bg-green-200"
              }`}
              ref={optionRef}
            >
              {item.render ? item.render : highlightText(item.label)}
            </span>
          );
        })}
      </div>
    </div>
  );
};

const Dropdown: FC<DropdownProps> = ({
  items = [],
  maxOptions = 5,
  multi = false,
  search = true,
  outlined = false,
  placeholder = "",
  maxSelectedOptions = 3,
  withPortal = false,
}) => {
  const [keyword, setKeyword] = useState<string>("");
  const [selected, setSelected] = useState<DropdownList[]>([]);
  const dbKey = useDebounce(keyword, 200);
  const [filtered, setFiltered] = useState<DropdownList[]>(items);
  const [show, setShow] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const portalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const optionRef = useRef<HTMLSpanElement>(null);

  const handleShow = () => {
    if (!show && keyword !== "") setKeyword("");
    setShow(!show);
  };

  const handleFilter = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value.toLowerCase();
      setKeyword(value);
      const filteredItems = items.filter((item) =>
        item.label.toLowerCase().includes(value)
      );
      setFiltered(filteredItems.slice(0, maxOptions));
    },
    [maxOptions]
  );

  const handleSelect = (item: DropdownList) => {
    if (selected.some((i) => i.value === item.value)) {
      setSelected(selected.filter((i) => i.value !== item.value));
    } else {
      if (multi && selected.length >= maxSelectedOptions) return;
      setSelected(multi ? [...selected, item] : [item]);
    }

    if (!multi) setShow(false);
  };

  const removeMulti = (e: MouseEvent, item: DropdownList) => {
    e.stopPropagation();
    setSelected(selected.filter((i) => i.value !== item.value));
  };

  const generateSelected = () => {
    if (selected.length === 0) return placeholder;
    if (selected.length === 1 && !multi) return (selected[0].render ? selected[0].render : selected[0].label);
    return selected.map((item) => (
      <div
        key={item.value}
        className="flex items-center gap-1 px-2.5 bg-gray-200 text-sm rounded-full"
        onClick={(e) => e.stopPropagation()}
      >
        {item.render ? item.render : item.label}{" "}
        <span
          id={`chip_${item.value}`}
          className="cursor-pointer text-white bg-black rounded-full z-[20]"
          onClick={(e) => removeMulti(e, item)}
        >
          <Times />
        </span>
      </div>
    ));
  };

  const highlightText = (text: string): JSX.Element[] => {
    if (!dbKey) return [<span key="0">{text}</span>];

    const regex = new RegExp(`(${dbKey})`, "gi");
    return text.split(regex).map((part, i) =>
      part.toLowerCase() === dbKey.toLowerCase() ? (
        <span key={i} className="bg-green-300">
          {part}
        </span>
      ) : (
        <span key={i}>{part}</span>
      )
    );
  };

  useEffect(() => {
    if (dbKey !== "") {
      handleFilter({
        target: { value: dbKey },
      } as ChangeEvent<HTMLInputElement>);
    } else {
      setFiltered(items.slice(0, maxOptions));
    }
  }, [dbKey, handleFilter, items, maxOptions]);

  useClickOutside(
    dropdownRef,
    () => setShow(false),
    withPortal,
    portalRef,
    inputRef,
    optionRef
  );

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        className="flex justify-between items-center border-[1px] p-1 border-gray-200 cursor-pointer z-[10] shadow-sm"
        style={outlined ? { backgroundColor: "#d1d5dc" } : {}}
        onClick={handleShow}
      >
        <div className="text-sm px-1 flex items-center gap-1 select-none">
          {generateSelected()}
        </div>
        <ChevronDown />
      </div>
      {show &&
        withPortal &&
        createPortal(
          <Options
            filtered={filtered}
            handleFilter={handleFilter}
            highlightText={highlightText}
            search={search}
            handleSelect={handleSelect}
            selected={selected}
            inputRef={inputRef}
            optionRef={optionRef}
          />,
          portalRef.current || document.body
        )}
      <div ref={portalRef}></div>
      {show && !withPortal && (
        <Options
          filtered={filtered}
          handleFilter={handleFilter}
          highlightText={highlightText}
          search={search}
          handleSelect={handleSelect}
          selected={selected}
        />
      )}
    </div>
  );
};

export default Dropdown;
