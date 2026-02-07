function newPrice(currentPrice , discount ) {
        if(typeof currentPrice === "number" && typeof discount === "number" && discount>0 && discount<100){
            let discounts = (currentPrice* discount)/100;
            let discountPrice = currentPrice - discounts;
            
            return discountPrice.toFixed(3)
        }else{
            return "Invalid"
        }
}

