    // eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Button(props: {title: string, onClick: any}){
    return(
        <button onClick={props.onClick} className="cursor-pointer text-base md:text-xl rounded-xl px-2 py-1 transition-all duration-200 bg-gradient-to-r from-indigo-800 to-[#4939d3] hover:scale-105 hover:bg-gradient-to-tr">
            {props.title}
        </button>
        
    )
}