export const DOTS = "..."
const getRange = (from, to) => {
    return Array(to - from + 1).fill(undefined).map((_, i) => from + i)
}
const getPaginationRange = (currentPage, limitPerPage, dataLength) => {
    if (limitPerPage > dataLength) {
        return null;
    }

    const defaultBtnsCount = 3;
    const btnsAmount = Math.ceil(dataLength / limitPerPage);

    if (btnsAmount <= defaultBtnsCount * 2) { //вполне можно отрендерить 1 2 3 4 5 6 без пагинации
        return getRange(1, defaultBtnsCount * 2)
    }

    const isRightDots = currentPage < defaultBtnsCount  //1 2 3 ... 100
    const isLeftDots = currentPage > btnsAmount - defaultBtnsCount //1 ... 98 99 100

    if (isRightDots && !isLeftDots) {
        return [...getRange(1, defaultBtnsCount), DOTS, btnsAmount]
    }

    if (isLeftDots && !isRightDots) {
        return [1, DOTS, ...getRange(btnsAmount- defaultBtnsCount , btnsAmount)]
    }

    return [1, DOTS, ...getRange(currentPage - 1, currentPage + 1), DOTS, btnsAmount] //1 ... 76 77 78 ... 100
}

export default getPaginationRange;