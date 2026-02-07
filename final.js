//Problem-01: New Price for Eid Sale
function newPrice(currentPrice , discount ) {
        if(typeof currentPrice === "number" && typeof discount === "number" && discount>0 && discount<100){
            let discounts = (currentPrice* discount)/100;
            let discountPrice = currentPrice - discounts;
            
            return discountPrice.toFixed(3)
        }else{
            return "Invalid"
        }
}


//Problem-02: OTP Validation for Zapshift
function validOtp(otp) {
        if(typeof otp === "string"){
            if( otp.startsWith("ph") && otp.length === 8){
            
            return true
          }else{
            return false
          }
        }else{
            return "Invalid"
        }
          
}

//Problem-03: BCS Final Score Calculator
function finalScore (omr) {
    
    let totalmark = 0;
    for(let corect in omr){
        totalmark += omr[corect]
    }
    if(totalmark === 100 && typeof omr === "object"){
        let minus =  (-0.5) * omr["wrong"] 
        let final = omr["right"] + minus
        return Math.round(final)

    }else{
        return "Invalid"
    }
    
    
}



//Problem-04: Upcoming Gono Vote
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

//Problem-05: Text Analyzer for an AI Company
function  analyzeText(str) {
    if(typeof str === "string" && str.length !==0){
        let arrays = str.split(" ")
        let longword = arrays[0]
        let lettercount = str.length - (arrays.length-1)
        
        for(let word of arrays){
            if(word.length > longword.length){
                longword = word
            }
        }
        return {
             longwords:longword,
             token:lettercount
        }
    }else{
       return "Invalid"
    }
}

