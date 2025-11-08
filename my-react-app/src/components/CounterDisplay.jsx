export default function CounterDisplay({ count }) {
    return (
        <p className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400">
            Count: <span className="font-bold">{count}</span>
        </p>
    );
}
