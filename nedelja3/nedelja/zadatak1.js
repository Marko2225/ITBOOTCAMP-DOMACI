// Написати функцију која исписује све елементе низа који су дељиви са 5
{
    let arr = [1, 3, 5, 8, 10, 11, 15, 19.23, 25, 5]
    //console.log(arr)

    function devisibleBy5(x) { return x % 5 == 0 ? true : false }
    //console.log(devisible5(10))

    function numbers(arr) {
        for (x of arr) {
            if (devisibleBy5(x)) console.log(x);
        }
    }
    numbers(arr)
    //console.log(numbers(arr))
}