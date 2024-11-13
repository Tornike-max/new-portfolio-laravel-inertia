const ContactTextArea = ({
    row,
    placeholder,
    name,
    defaultValue,
    setData,
    error,
}: {
    row: number;
    placeholder: string;
    name: string;
    defaultValue: string;
    setData: (name: string, value: string) => void;
    error: string;
}) => {
    const handleSetData = (value: string) => {
        if (name === "message") {
            setData("message", value);
        }
    };
    return (
        <>
            <div className="mb-6">
                <textarea
                    rows={row}
                    placeholder={placeholder}
                    name={name}
                    onChange={(e) => handleSetData(e.target.value)}
                    className="w-full resize-none rounded border border-stroke px-[14px] py-3 text-base outline-none focus:border-primary dark:border-dark-3 text-zinc-800"
                    defaultValue={defaultValue}
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

export default ContactTextArea;
