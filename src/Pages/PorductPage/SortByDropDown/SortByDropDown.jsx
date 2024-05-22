import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { HiChevronDown } from "react-icons/hi";

export default function SortByDropDown() {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["Newest"]));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          variant="bordered"
          className="capitalize px-[30px] py-5 rounded-full border-[#111E2C] text-lg font-semibold leading-5 text-[#111E2C] bg-none "
        >
          {selectedValue}
          <span>
            <HiChevronDown></HiChevronDown>
          </span>
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Single selection example"
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
      >
        <DropdownItem key="Newest">Newest</DropdownItem>
        <DropdownItem key="Old Collection">Old Collection</DropdownItem>
        <DropdownItem key="3month ago">3month ago</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
