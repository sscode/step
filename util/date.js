export function formatDate(date){
    const new2 = new Date(date);
    return new2.toISOString().slice(0, 19);
}