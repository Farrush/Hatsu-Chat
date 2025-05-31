
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>){
    return(
        <div
            className="bg-neutral-800  h-[100vh] text-white"
        >
        {children}
      </div>
    )
}