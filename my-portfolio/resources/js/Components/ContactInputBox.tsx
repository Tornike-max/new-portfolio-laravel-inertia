const ContactInputBox = ({
    type,
    placeholder,
    name,
}: {
    type: string;
    placeholder: string;
    name: string;
}) => {
    return (
        <>
            <div className="mb-6">
                <input
                    type={type}
                    placeholder={placeholder}
                    name={name}
                    className="w-full rounded border border-stroke px-[14px] py-3 text-base outline-none focus:border-primary text-zinc-800"
                />
            </div>
        </>
    );
};

export default ContactInputBox;
