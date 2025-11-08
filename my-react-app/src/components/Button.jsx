export default function Button({ children, className = "", disabled = false, ...props }) {
    return (
        <button
            {...props}
            disabled={disabled}
            className={`btn ${disabled ? "disabled" : ""} ${className}`}
        >
            {children}
        </button>
    );
}
