import { useTranslation } from "react-i18next";

const title = () => {
    const { t } = useTranslation();
    return (
        <h1 className="text-4xl font-bold text-center text-zinc-100 pb-4">
            {t("myPortfolio")}
        </h1>
    );
};

export default title;
