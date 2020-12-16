
{
	
	function dobaDana(x =new Date().getHours()){
    if (x == 1 ) {
    	return  `dobro jutro ${x} sat je`
       
    }else if ( x >=2  && x <= 4){
    	return `dobro jutro ${x} sata je`
    	
    } else if ( x >= 5 && x <= 10){
    	return `dobro jutro ${x} sati je`
    	
    }else if ( x >= 11 && x <= 17){
    	return `dobar dan ${x} sati je`
    	
    }else if(x >=18 && x< 24 ){
    	return `dobro vece ${x} sati je`
    	
    }else{
    	return "to nije moguci sat"
    }
	}
    
  //univerzalna f-ja moze da pokazuje sadasnje vreme kada je bez parametra 
  //i da ispisuje poruku vezanu za doba dana
  // kao i da ispisuje poruku vezanu za doba dana , kada se unese parametar 0-24 u f-ju
    console.log(dobaDana())
}