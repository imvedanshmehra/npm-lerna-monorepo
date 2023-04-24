interface ButtonProps {
    buttonText: string;
}

const Button = ({ buttonText }: ButtonProps) => {
    return (
        <button>{buttonText}123</button>
    )
}

export default Button;