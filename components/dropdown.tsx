import React from "react";
import {
  DropdownMenuTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
  DropdownMenuItem,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";

const Dropdown = ({
  trigger,
  options = [],
  onChange,
}: {
  trigger?: React.ReactElement;
  options?: Option[];
  onChange?: (params: string) => void;
}) => {
  const [activeKey, setActiveKey] = React.useState<string>();

  const handleChange = (key: string, value: boolean) => {
    console.log(key, value);
    // setActiveKey(key);
    if (typeof onChange === "function") {
      onChange(key);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{trigger}</DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {options.map((item) => (
          <DropdownMenuCheckboxItem
            key={item.value}
            checked={activeKey === item.value}
            onCheckedChange={handleChange.bind(null, item.value)}
          >
            {item.label}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Dropdown;
