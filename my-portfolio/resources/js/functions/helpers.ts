export function formatYear(dateString: string): string {
    if (dateString === "0000-00-00 00:00:00") {
        return "Ongoing";
    }
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
        throw new Error("Invalid date string");
    }
    return date.getFullYear().toString();
}

export function formatDate(dateString: string): string {
    if (dateString === "0000-00-00 00:00:00") {
        return "Ongoing";
    }
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
        throw new Error("Invalid date string");
    }
    return `${date.getDay().toString()}/${date.getMonth().toString()}/${date
        .getFullYear()
        .toString()}`;
}

export function formatImage(src: string) {
    return src.includes("uploads") ? `/storage/${src}` : src;
}
