
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>){
    return(
        <div
            className="bg-neutral-800 text-white"
        >
        {children}
      </div>
    )
}