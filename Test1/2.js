// Задатак

// Написати програм који исписује машну за унето N (Без провере за N)

// Напомена: За пола исписати само ДЕСНИ део слике (остало носи 0 поена)

// N = 3           N = 5

//     *    *      *        *   
//     **  **      **      **
//     ******      ***    ***
//     **  **      ****  ****
//     *    *      **********
//                 ****  ****
//                 ***    ***
//                 **      **
//                 *        *
{
    N = 5
    for (let i = 1; i < N; i++) {
        console.log("*".repeat(i) + " ".repeat(2 * (N - i)) + "*".repeat(i))
    }
    console.log("*".repeat(2 * N))
    for (let i = 1; i <= N; i++) {
        console.log("*".repeat(N - i) + " ".repeat(2 * i) + "*".repeat(N - i))
    }

}
 {
    N = 3
    for (let i = 1; i < N; i++) {
        console.log("*".repeat(i) + " ".repeat(2 * (N - i)) + "*".repeat(i))
    }
    console.log("*".repeat(2 * N))
    for (let i = 1; i <= N; i++) {
        console.log("*".repeat(N - i) + " ".repeat(2 * i) + "*".repeat(N - i))
    }

}