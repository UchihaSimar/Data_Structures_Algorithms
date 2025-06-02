class Solution {
    rotateString(s, goal) {
        //your code goes here
        if (s.length !== goal.length) {
        return false;
    }
    return (s + s).includes(goal);
    }
}