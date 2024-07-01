import { ChangeEvent, FC } from "react";

interface TextareaProps {
  id: string;
  htmlFor: string;
  label: string;
  name: string;
  placeholder: string;
  disabled?: boolean;
  rows: number;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

const Textarea: FC<TextareaProps> = ({
  label,
  name,
  placeholder,
  disabled,
  onChange,
  rows,
}) => {
  return (
    <div className="flex items-center gap-5">
      <label htmlFor={label} className="w-1/4">
        {label}
      </label>
      <textarea
        id={label}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
        rows={rows}
        required
        className="border rounded p-2 w-3/4 text-[16px]"
      />
    </div>
  );
};

export default Textarea;
