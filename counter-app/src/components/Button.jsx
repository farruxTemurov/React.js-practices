export default function Button({
    children,
    variant = "default",
    disabled = false,
    className = "",
    ...props
}) {
    const baseStyles = `
        px-4 py-2
        rounded-2xl
        font-medium
        transition-all
        duration-200
        active:scale-95
        shadow-sm
        flex items-center justify-center
    `;

    const variants = {
        default: "bg-gray-200 text-black hover:bg-gray-300",
        green: "bg-green-500 text-white hover:bg-green-600",
        red: "bg-red-500 text-white hover:bg-red-600",
        blue: "bg-blue-500 text-white hover:bg-blue-600",
        gray: "bg-gray-300 text-gray-700",
        toggleOn: "bg-purple-600 text-white",
        toggleOff: "bg-gray-400 text-black"
    };

    return (
        <button
            {...props}
            disabled={disabled}
            className={`
                ${baseStyles}
                ${variants[variant]}
                ${disabled ? "opacity-50 cursor-not-allowed" : ""}
                ${className}
            `}
        >
            {children}
        </button>
    );
}
