import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface InputProps {
  id: string;
  icon: any;
  placeholder?: string;
  required?: boolean;
  type: 'text' | 'password';
  classname?: string;
  label?: string;
  readonly?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (e: React.MouseEvent) => void;
}

function Input({
  id,
  icon,
  placeholder = '',
  required = false,
  type,
  classname = '',
  label = '',
  readonly = false,
  value = '',
  onChange = () => {},
  onClick = () => {},
}: InputProps) {
  return (
    <div className={classname}>
      <label
        htmlFor={id}
        className='mb-1 text-xs text-gray-600'
      >
        {label}
      </label>
      <div className='relative'>
        <div className='inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400'>
          <FontAwesomeIcon
            icon={icon}
            className='text-blue-500'
          ></FontAwesomeIcon>
        </div>
        <input
          placeholder={placeholder}
          id={id}
          type={type}
          onChange={onChange}
          onClick={onClick}
          required={required}
          readOnly={readonly}
          value={value}
          className='text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400 bg-white text-black'
        />
      </div>
    </div>
  );
}

export default Input;
