export default function Button({ children, ...props }) {
    return (
        <button className="bg-stone-600 rounded-md mx-auto text-stone-300 my-4 py-1 px-3 hover:text-stone-100 hover:bg-stone-500 text-sm md:text-base" {...props}>
            {children}
            </button>

    );
}