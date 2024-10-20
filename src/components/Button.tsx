interface ButtonProps {
  disabled?: boolean;
  label?: string;
  onClick?: (
    e: React.FormEvent<HTMLInputElement> | React.MouseEvent<HTMLButtonElement>
  ) => void;
  type?: 'submit' | 'button';
}

function Button({
  disabled = false,
  onClick = () => {},
  label = '',
  type = 'button',
}: ButtonProps) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type={type}
      className='bg-blue-400 rounded-md py-2 px-4 hover:bg-blue-600 text-white'
    >
      {label}
    </button>
  );
}

export default Button;
