const Button = ({
    type="button",
    btnName,
    ...props
}) => {
    return(
        <button type={type} {...props}>
            {btnName}
        </button>
    )
}

export default Button;