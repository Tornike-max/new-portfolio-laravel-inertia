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
