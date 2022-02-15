export const range = (start,end) => {
    return [...Array(end).keys()].map(e=>e+start)
}