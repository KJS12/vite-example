const Textarea = ({ children }) => {
    return <>{ children }</>
}

// textarea
const TextareaBox = ({
    className="resize-none",
    rows=6,
    ...props
}) => {
    return (
        <textarea
            className={className}
            rows={rows}
            {...props}
        />
    )
}

// textarea + label
const TextareaLabel = ({
    className="resize-none",
    rows=6,
    title,
    ...props
}) => {
    return (
        <label>
            {title && <span>{title}</span>}
            <textarea
                className={className}
                rows={rows}
                {...props}
            />
        </label>
    )
}

Textarea.Box = TextareaBox;
Textarea.Label = TextareaLabel;

export default Textarea;