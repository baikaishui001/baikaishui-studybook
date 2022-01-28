/**
 * @param {number} n
 * @return {number}
 */
 var fib = function(n) {
    if(n==0)return 0
    if(n==1||n==2){
        return 1
    }else{
        return fib(n-1)+ fib(n-2)
    }
};
var fib1 = function(n) {
    if(n==0)return 0
    if(n==1||n==2){
        return 1
    }
    let fibs=[1,1]
    for (let i = 2; i < n; i++) {
        fibs[i]=fibs[i-1]+fibs[i-2]
        
    }
    return fibs[fibs.length-1]
};

var fib2=function(n){
    
    if(n==0)return 0
    if(n==1||n==2)return 1
    let cache=[1n,1n];
    function memorize(key){
        if(cache[key]!==undefined){
            return cache[key]
        }
        
        cache[key]= memorize(key-1)+ memorize(key-2)
        return cache[key]
        
    }
    let result=memorize(n)
    return result % 1000000007n
}
console.log(fib2(41))