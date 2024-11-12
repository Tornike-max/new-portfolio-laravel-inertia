const ContactTextArea = ({
    row,
    placeholder,
    name,
    defaultValue,
}: {
    row: number;
    placeholder: string;
    name: string;
    defaultValue: string;
}) => {
    return (
        <>
            <div className="mb-6">
                <textarea
                    rows={row}
                    placeholder={placeholder}
                    name={name}
                    className="w-full resize-none rounded border border-stroke px-[14px] py-3 text-base outline-none focus:border-primary dark:border-dark-3 text-zinc-800"
                    defaultValue={defaultValue}
                />
            </div>
        </>
    );
};

export default ContactTextArea;
