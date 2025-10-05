"use client";

import React from "react";
import Select from "react-select";

type OptionType = {
  value: string;
  label: string;
};

interface SelectBoxProps {
  options: OptionType[];
  placeholder?: string;
  onChange?: (selected: OptionType | null) => void;
}

const SelectBox: React.FC<SelectBoxProps> = ({
  options,
  placeholder,
  onChange,
}) => {
  return (
    <div className="w-full max-w-sm">
      <Select
        instanceId="contact-us-select"
        options={options}
        placeholder={placeholder || "Select a state"}
        className="text-sm"
        classNamePrefix="react-select"
        onChange={onChange}
      />
    </div>
  );
};

export default SelectBox;
