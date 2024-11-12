const ContactInputBox = ({
    type,
    placeholder,
    name,
    setData,
    error,
}: {
    type: string;
    placeholder: string;
    name: string;
    setData: (name: string, value: string) => void;
    error: string;
}) => {
    const handleSetData = (value: string) => {
        switch (name) {
            case "name":
                setData(name, value);
                break;
            case "email":
                setData(name, value);
                break;
            case "phone":
                setData(name, value);
                break;
            case "message":
                setData(name, value);
                break;
            default:
                break;
        }
    };
    return (
        <>
            <div className="mb-6">
                <input
                    type={type}
                    placeholder={placeholder}
                    name={name}
                    onChange={(e) => handleSetData(e.target.value)}
                    className="w-full rounded border border-stroke px-[14px] py-3 text-base outline-none focus:border-primary text-zinc-800"
                />
                {error !== "" && (
                    <span className="w-full text-red-500 text-start text-sm">
                        {error}
                    </span>
                )}
            </div>
        </>
    );
};

export default ContactInputBox;
