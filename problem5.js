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

console.log(analyzeText("Keep coding keep shining"))