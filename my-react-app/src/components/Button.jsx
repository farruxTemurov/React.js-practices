export default function Button({
    children,
    className = "",
    disabled = false,
    ...props
}) {
    return (
        <button
            {...props}
            disabled={disabled}
            className={`
                px-4 py-2
                rounded-2xl
                font-medium
                transition-all
                duration-200
                active:scale-95
                shadow-sm
                flex items-center justify-center
                ${disabled ? "opacity-50 cursor-not-allowed" : ""}
                ${className}
            `}
        >
            {children}
        </button>
    );
}
