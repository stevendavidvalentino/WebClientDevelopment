function dateDifference(date1, date2) {
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    const diff = Math.abs(d2 - d1);
    return diff / (1000 * 60 * 60 * 24);
}

console.log(dateDifference('2024-03-19', '2024-03-21')); // Output: 2
