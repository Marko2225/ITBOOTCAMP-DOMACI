

    //uradio sam skoro isti zadatak vec sa f-jom za prosli domaci , sad je malo promenjen
{

    function CenaPicePoCm(poluprecnik, cenaPice) {
       
        let povrsina = Math.PI * (poluprecnik ** 2);
        console.log(povrsina + " je povrsina pice")
        
        return  cenaPice / povrsina
    }
    
    console.log(` cena po cm kvadratnom pice je ${CenaPicePoCm(10,1000)}`)
}
