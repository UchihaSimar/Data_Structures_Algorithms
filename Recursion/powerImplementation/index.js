class Solution {
    myPow(x, n) {
         //your code goes here
         if(n === 0) return 1;
         if(n < 0) return (1/x)*this.myPow(x,n+1);
         return x*this.myPow(x,n-1);
    }
}