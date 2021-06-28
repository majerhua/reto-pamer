function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const totalNums: number[] = [...nums1, ...nums2]; //concatenar arrays
    const totalNumsSort: number[] = totalNums.sort((a, b) => a - b); //ordernar array concatenado
    const totalNumSortSize = totalNumsSort.length; //obtener el tamaño de el array concatenado
    if (totalNumSortSize % 2 == 1) return totalNumsSort[(totalNumSortSize + 1) / 2 - 1]; //retornar la mediana de el array impar
    else return (totalNumsSort[(totalNumSortSize / 2) - 1] + totalNumsSort[totalNumSortSize / 2]) / 2; //retirnar la mediana de el array par
};