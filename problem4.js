function gonoVote(array) {
      
        if (Array.isArray(array)){
            let ha = 0;
            let na = 0;
            for(let vot of array){
                if(vot === "ha"){
                    ha+=1;

                }else{
                    na+=1;
                }
            }
            if(ha > na){
                return true
            }else if(ha < na){
                return false
            }else {
                return "equal"
            }
        }
        else{
            return "Invalid"
        }
}

console.log(gonoVote(["ha", "na", "ha", "na"]))
