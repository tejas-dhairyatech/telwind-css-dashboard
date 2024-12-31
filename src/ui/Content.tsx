
interface ContentProps {
    children: React.ReactNode;
}
const Content = ({ children }: ContentProps) => {
    return (
        <>
            <div className="flex flex-col gap-1">
                {children}
            </div>
        </>
    );
}

export default Content;