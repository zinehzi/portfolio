import { ChangeEvent, FC } from "react";

interface InputProps {
  id: string;
  type: "text" | "number" | "email" | "password";
  htmlFor: string;
  label: string;
  value?: string | number;
  name: string;
  placeholder: string;
  error?: boolean;
  disabled?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({
  type,
  label,
  value,
  name,
  placeholder,
  disabled,
  onChange,
}) => {
  return (
    <div className="flex items-center gap-5">
      <label htmlFor={label} className="w-1/4">
        {label}
      </label>
      <input
        type={type}
        id={label}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
        required
        className="border rounded p-2 w-3/4 text-[16px]"
      />
    </div>
  );
};

export default Input;
