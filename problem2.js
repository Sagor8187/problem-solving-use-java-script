function validOtp(otp) {
          // You have to write your code here
          if(otp.startsWith("ph") && otp.length === 8){
            console.log(true)
            // return true
          }else{
            console.log(false)
          }
}

validOtp("ph-10985")
