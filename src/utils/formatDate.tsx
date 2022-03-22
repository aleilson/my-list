export function formatDate(date: string) {
    const dateCurrent = new Date(date);
    return new Intl.DateTimeFormat('pt-BR', { dateStyle: 'short', timeStyle: 'medium' }).format(dateCurrent);
}