
interface ContentProps {
    children: React.ReactNode;
}
const Content = ({ children }: ContentProps) => {
    return (
        <>
            <div className="flex-1 flex flex-col gap-5">
                {children}
            </div>
        </>
    );
}

export default Content;