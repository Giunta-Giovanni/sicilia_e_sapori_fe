// create function for format size in litre or centilitre
export function formatSize(size) {
    // transform size in number
    const sizeNumber = Number(size);

    // if null
    if (isNaN(sizeNumber)) return null;

    // RENDER
    return sizeNumber >= 100
        // if more then 100 cl => 1 ltr
        ? `${sizeNumber / 100} lt`
        // if less return value in cl
        : `${sizeNumber} cl`;
};