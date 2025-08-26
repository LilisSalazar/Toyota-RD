import { useField } from 'formik';
import { FaChevronDown } from 'react-icons/fa';
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';

interface SelectProps {
  name: string;
  options: string[];
  placeholder?: string;
  forComparator?: boolean;
  onChange?: Function;
  inputClassName?: string;
}

const CustomSelect: React.FC<SelectProps> = ({
  name,
  options,
  placeholder,
  forComparator,
  onChange,
  inputClassName,
}) => {
  const [field] = useField({ name });

  if (forComparator) {
    return (
      <Listbox
        value={field.value}
        onChange={(value: string) => {
          const onChangeEvent = { target: { value, name } };
          field.onChange(onChangeEvent);
          if (onChange) {
            onChange(onChangeEvent);
          }
        }}
      >
        <ListboxButton className="input-like-text bg-transparent relative w-full border-[1px] p-2 text-left border-solid border-white rounded-none text-white h-[57px]">
          {field.value || ''}
          <FaChevronDown
            className="group pointer-events-none absolute top-[35%] right-2.5 size-4 stroke-white"
            aria-hidden="true"
          />
        </ListboxButton>
        <ListboxOptions
          anchor="bottom"
          className="w-[var(--button-width)] border-[1px] p-2 text-left border-solid bg-[#F2F4F8] border-[#737373] rounded-none text-gray-700"
        >
          {options?.map((option, index) => (
            <ListboxOption key={index} value={option} className="input-like-text p-2">
              {option}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
    );
  }

  const listBoxButtonClassName = `input-like-text h-full relative w-full border-[1px] p-2 text-left border-solid bg-[#F2F4F8] border-[#737373] rounded-none text-gray-600 text-opacity-80 ${inputClassName ?? ''}`;

  return (
    <Listbox
      value={field.value}
      onChange={(value: string) => {
        field.onChange({ target: { value, name } });
      }}
    >
      <ListboxButton className={listBoxButtonClassName}>
        {field.value || placeholder || 'Selecciona una sucursal'}
        <FaChevronDown className="group pointer-events-none absolute top-[35%] right-2.5 size-4" aria-hidden="true" />
      </ListboxButton>
      <ListboxOptions
        anchor="bottom"
        className="w-[var(--button-width)] border-[1px] p-2 text-left border-solid bg-[#F2F4F8] border-[#737373] rounded-none text-gray-700"
      >
        {options?.map((option, index) => (
          <ListboxOption key={index} value={option} className="input-like-text p-2">
            {option}
          </ListboxOption>
        ))}
      </ListboxOptions>
    </Listbox>
  );
};

export default CustomSelect;
