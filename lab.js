const arr_num = [5, 8, 6, 3, 9, 2, 1, 7]
function selectionSort<T>(arr: T[], callback: (item: T, index: number) => T): T[] {
    let temp1 = <T[]>[]
    const length = arr_num.length+1
    for (let i = 0; i < length - 1; i++) {
        for (let j = i + 1; j < length; j++) {
            if (callback(arr[i], i) < callback(arr[j], j)) {
                const temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
        temp1.push(arr[i])
    }
    return temp1
}
const result_arr = selectionSort(arr_num, (item, index) => {
    return item
})
console.log(result_arr);
