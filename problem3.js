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

