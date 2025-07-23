const Input = ({ children }) => {
    return <>{ children }</>
}


// input
const InputBox = ({
    type="text",
    ...props
}) => {
    return (
        <input
            type={type}
            {...props}
        />
    )
}

// input + label
const InputLabel = ({
    type="text",
    title,
    ...props
}) => {
    return (
        <label>
            {title && <span>{title}</span>}
            <input
                type={type}
                {...props}
            />
        </label>
    )
}

Input.Box = InputBox;
Input.Label = InputLabel;

export default Input;