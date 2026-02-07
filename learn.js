function gonoVote(array) {
          //write your code here
    if(Array.isArray(array)){
        let yes = 0;
        let no = 0;
        for(let vot of array){
            if(vot === "ha"){
                yes+=1;
            }else{
                no+=1
            }
        }
        if(yes === no){
            console.log("Eqal")
        }else if(yes > no){
            console.log("ha win")
        }else{
            console.log("na win")
        }
    }else{
        console.log("invalid")
    }
}

gonoVote(["ha", "na", "ha", "na","ha","ha","na","na","na"])