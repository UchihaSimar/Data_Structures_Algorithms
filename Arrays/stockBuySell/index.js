function stockBuySell(arr, n) {
    let minimumBuyingPrice = arr[0];
    let maximumProfit = -Infinity;
    for (let i = 1; i <= arr.length - 1; i++) {
        if (maximumProfit < (arr[i] - minimumBuyingPrice)) {
            maximumProfit = arr[i] - minimumBuyingPrice;
        }

        if (arr[i] < minimumBuyingPrice) {
            minimumBuyingPrice = arr[i];
        }

    }
    return maximumProfit > 0 ? maximumProfit : 0;
}