function factorial(data){

    if (data==0) {
        return 1
    }else if (data<0){
        return "invalid input"
    }

    let result = data* factorial (data-1)
    //result=5*factorial(5-1)
    //result=5*4*factorial(4-1)
    //result=5*4*3*factorial(2)
    //result=5*4*3*2*1
    return result
    
    }
    console.log("Result is :" + factorial(5))