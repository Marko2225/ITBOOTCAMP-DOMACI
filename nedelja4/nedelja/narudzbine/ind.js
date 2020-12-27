{
    //     На страници постоје 2 дугмета за наручивање (као на страници пицерије, ORDER)
    //      И постоје 2 дугмета за наручивање одмах

    // Дугмићи за 'наручивање' повећавају бројач
    // Дугмићи за 'наручивање одмах' ресетују бројач на нула и исписују додатну поруку
    //  (Порука у облику: Наручили сте [X] пица, [ danasnji datum i vreme ])
    //   Напомена: X је бројач, проверити да ли је бројач 0, и ако јесте кликом на наручивање
    //    одмах избацује одговарајућу поруку за грешку

    let time = new Date()
    let count = 0;
    console.log(count)
//ispisivace u konzoli count
    const order = document.querySelectorAll('.Order')
    const orderNow = document.querySelectorAll('#Order-now')


    order.forEach(ord => {
        ord.addEventListener('click', () => {
            count++
            console.log(count)
        })
    })
    orderNow.forEach(ordN => {
        ordN.addEventListener('click', () => {
            //window.alert
            if (count == 0) {
                window.alert('niste uneli kolicinu')
            } else {

                window.alert(`narucili ste ${count} pica 
                   vreme narucivanja ${time.toTimeString()}
                    i datum ${time.toDateString()}`)
                count = 0
            }
        })
    })
    console.log(count)
}
