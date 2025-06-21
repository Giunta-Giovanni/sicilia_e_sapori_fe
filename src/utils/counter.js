export function counter(obj) {
    return Object.values(obj).reduce((a, filter) => a + (filter === true ? 1 : 0), 0);
}
