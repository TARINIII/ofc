// a = "jnj"
// b = "jnk l"
// alert(a+b)
// var name = prompt("what is your name ?");
// var name_140 = name.slice(0,10);
// alert(name_140);
// var a = "tarini";
// alert(a.toUpperCase());
// var a = 5;
// var a = 7;
// a = 'ytgyu';
// at = a.toUpperCase();
// ay = at.toLowerCase();
// var name = prompt("What is your name ?");
// var len = name.length;
// // alert(len);
// var name1 = name.slice(0,1);
// // alert(name1);
// var name2 = name.slice(1,len);
// // alert(name2);
// alert("Hello" + " "+ name1.toUpperCase() + name2.toLowerCase());
// var dogAge = prompt("enter dog age");
// var humanAge = (dogAge-2)*4+21;
// alert(humanAge);


// function addTwo_num(a,b){
//     var c = a + b
//     console.log(c)
// }


// /* problem fizzBuzz*/

// function FizzBuzzz(x) {
//     var list1 = [];
//     for (var i = 1; i < x; i++) {
//         if ((i % 3 ===0) && (i % 5 === 0) ) {
//             list1.push("FizzBuzz");
//         }    
//         else if ((i % 3 === 0)) {
//             list1.push("Fizz");
//         } 
//         else if ((i % 5 === 0)) {
//             list1.push("Buzz");
//         }
//         else {
//             list1.push(i);
//         }
               
//     }
//     console.log(list1)
// }


// // var list1 = [];
// // list1.push(0);
// // list1.push(1);
// // for(var i = 0; i < 10; i = i + 1){
// //     list1.push(list1[(list1.length-1)]+list1[(list1.length)-2]);
// // }
// // console.log(list1)

// function fibo(j) {
//     var list1 = [];
//     list1.push(0);
//     list1.push(1);
//     for(var i = 0; i < j; i = i + 1){
//         list1.push(list1[(list1.length-1)]+list1[(list1.length)-2]);
//     }
//     // console.log(list1)
//     for(var i1 = 0; i1 < list1.length;i1++){
//         console.log(list1[i1])
//     }
// }


// Pallendrom string //

function Pallen() {
    var a = prompt("Give input a any word:- ");
    var c1 = [];
    for(i = 0; i <a.length; i++){
        c1.push(a[i]);
    }
    console.log(a);
    console.log(c1);
    var b = a.length;
    console.log(b);
    var c = [];
    for(i = b-1;i >= 0; i--){
        c.push(a[i]);
    }
    console.log(c);
 // 
    k1  = 0;
    for(i = 0; i<=(c.length)-1;i++){
        if(c[i] === c1[i]){
            k1 = k1 + 1;
        }
        else{
            
        }    
    }
    console.log(k1)
    if(k1===a.length){
        console.log("Pallendrom");
    }
    else{
        console.log("Not Pallendrom");
    }
}

Pallen();


// Median of 2 sorted aray

var nums1 = [3,2];
var nums2 = [1,4];
var k = nums1.sort();
var k1 = nums2.sort();
for(i = 0;i < k.length; i++){
    k1.push(k[i])
}
console.log(k1)
console.log(k1.sort());
var k3 = k1.length;
if(k3 % 2 !== 0){
    console.log(k1[(k3-1)/2]);
    console.log("gg");
} 
else if(k3 % 2 === 0){
    var t = k3/2;
    var t1 = t-1;
    console.log((k1[t]+k1[t1])/2);
    console.log("kk");
}

// incomplete function

function Med() {
    function Enter_no() {
    var x = 1;
    while (x === 1) {
    var a = prompt("Enter a no into list");
    var a1 = parseInt(a,10);
        // while (a1 < 10 && a1 >= 0){
        //   var a = prompt("Enter a no into list less than 10 & greater than 0"); 
        //   var a1 = parseInt(a,10);
        // }
    var a2 = a1.toString();
    if((Number.isNaN(a1) === true) || (a2.length !== a.length)){
        x = 1;
        alert("Put integer")
    }
    else{
        x = 0;
    }
    }
    return a1;    
    }   
    var k = Enter_no();
    for(i = 0; i <)
    
}

// 
// leetcode problem no 23

var lists = [[1,4,5],[1,3,4],[2,6]];
var target = [];
for(i = 0; i < lists.length; i++){
    // console.log(lists[i])
    j = lists[i].length
    // console.log(j);
    for(k = 0; k < j; k++){
        k1 = lists[i][k];
        target.push(k1)
    }
}    
console.log(target.sort());


// leetcode problem 32
x = "()())))()())))((()()))()(())))()((()())()))()()()))()((((()))())())())()";
c = 0;
for(i = 0; i < (x.length-2);i++){
    y = x.slice(i,i+2);
    if(y === "()"){
        c = c + 1;
        // console.log(y);
    }
}
// console.log("***************");
y1 = x[x.length-1];
// console.log(y1)
y2 = x[x.length-2];
// console.log(y2)
y3 = y2 + y1;
if(y3 === "()"){
    c = c + 1;
    // console.log(y3);
}
console.log(c);

// input validation for integer for no of element to fill in list

function Enter_no_list() {
    var x = 1;
    while (x === 1) {
    var a = prompt("Enter a no of element in list1");
    var a1 = parseInt(a,10);
    var a2 = a1.toString();
    if((Number.isNaN(a1) === true) || (a2.length !== a.length)){
        x = 1;
        alert("Put integer")
    }
    else {
        if (a1 >= 0 && a1 < 10) {
            x = 0;
        }    
        else{
            x = 1;
            alert("Put a no range from 0 to 9");
        }  
    }
    }
    return a1; 
}    

// Enter_no();
 
// // // *********************************
function Enter_no() {
    var x = 1;
    while (x === 1) {
    var a = prompt("Enter a no into list");
    var a1 = parseInt(a,10);
        // while (a1 < 10 && a1 >= 0){
        //   var a = prompt("Enter a no into list less than 10 & greater than 0"); 
        //   var a1 = parseInt(a,10);
        // }
    var a2 = a1.toString();
    if((Number.isNaN(a1) === true) || (a2.length !== a.length)){
        x = 1;
        alert("Put integer")
    }
    else{
        x = 0;
    }
    }
    return a1;    
}   

// //function to take input in a list

function enterValueinlist1() {
    var k = Enter_no();
    var list1 = [];
    alert("Now add value to list1")
    for (let i = 0; i < k ; i++) {
        var mess = i.toString();
        k1 = Enter_no_list();
        list1.push(k1);
        alert("Element"+mess+ "added");
    }
    // console.log(list1);
    return list1;
    
}

//input of a collections// 

var col = enterValueinlist1();
var col1 = enterValueinlist1();

// logic for addition//

// var col = [1,2,4];
// var col1 = [2,9,9,9,9];
console.log(col);
console.log(col1);
var fliper = 0;
var lenCol = col.length;
var lencol1 = col1.length;
if(lenCol<lencol1){
    i = lenCol;
}
else{
    i = lencol1;
}
var targetcol = [];
for(i1 = 0; i1 < i; i1++){
    sum = col[i1]+col1[i1]+fliper;
    if(sum < 10){
        fliper = 0;
        targetcol.push(sum);
    }
    else{
        sum1 = sum-10;
        targetcol.push(sum1);
        fliper = 1;
    }
    
}
// console.log(targetcol);

targetcol2 = [];

if(lenCol>lencol1){
    var j = Col.length;
    var longcol = Col;
}
else{
    var j = col1.length;
    var longcol = col1;
}  
// console.log(longcol);
// console.log(j);

for(i2 = i; i2<j;i2++){
    targetcol2.push(longcol[i2]);
}  
// console.log(targetcol2);


var targetcol3 = [];
for(i = 0; i < targetcol2.length; i++){
    if(targetcol2[i]+fliper < 10){
        targetcol3.push(targetcol2[i]+fliper);
    }
    else{
        targetcol3.push(10-(targetcol2[i]+fliper));
        fliper = 1;
    }
    
}
if(fliper === 1){
    targetcol3.push(fliper);
}
else{
    
}

// console.log(targetcol3);
for(i = 0 ; i < targetcol3.length ; i++){
    targetcol.push(targetcol3[i]);
}
console.log(targetcol);


// var list1 = [];
// list1.push(0);
// list1.push(1);
// for(var i = 0; i < 10; i = i + 1){
//     list1.push(list1[(list1.length-1)]+list1[(list1.length)-2]);
// }
// console.log(list1)

function fibo(j) {
    var list1 = [];
    list1.push(0);
    list1.push(1);
    for(var i = 0; i < j; i = i + 1){
        list1.push(list1[(list1.length-1)]+list1[(list1.length)-2]);
    }
    // console.log(list1)
    for(var i1 = 0; i1 < list1.length;i1++){
        console.log(list1[i1])
    }
}

//  leetcode problem 49

var strs = ["eat","tea","tan","ate","nat","bat","etbna"];

var strs1 = [];

for(i = 0; i < strs.length; i++){
    strs1.push(strs[i]);
}

var target1 = [];

for(i = 0; i < strs.length; i++){
    
    k = strs[i];
    
    var working = [];
    
    for(j = 0; j < k.length; j++){
        working.push(k[j]);
    }
    target1.push(working);
}
// console.log(target1);

var target3 = [];

for(i = 0; i < target1.length ; i++){
    k1 = target1[i].sort();
    // console.log("****");
    // console.log(k1);
    // console.log("****");
    var target2 = [];
    for(j = 0; j < strs.length; j++){
        if(k1.toString() === strs[j].split("").sort().toString()){
            // console.log("##############");
            // console.log(strs[j].split("").sort())
            // console.log(strs[j])
            // console.log("##############");
            target2.push(strs[j]);
            // k2 = strs[j].indexOf();
            // strs.splice(k2,1,strs[j]);
            
        }     
    } 
    if(target3.includes(target2) === true){
        // pass
    }
    else{
        target3.push(target2);
    }
    
}

// y = Array.from(new Set(target3));

// var target4 = new Set(target3);

console.log(target3.sort());

// next step :- try to find unique element in target3 , problem will be solved.



var target4 = [];

var target5 = [];

for(i = 0; i < target3.length; i++){
    if(target5.includes(target3[i].toString())){
        // pass
    }
    else{
        target4.push(target3[i]);
        target5.push(target3[i].toString());
    }
}

console.log(target4)
// output ok

// python set datatype function in JS

// var x = [1,1,1,2,2,2,3,3,3,4];

var x = [10,10,1,1,2,2,2,3,"tar","tar","tar"];

var y = [];

for(i = 0; i < x.length; i++){
    c = 0;
    for(j = 0; j < x.length; j++){
        if(y.includes(x[j]) === true){
            // pass
        }
        else{
            if(x[j] === x[i]){
                c = c + 1;
            }
            else{
                // pass
            }
        }
    }
    if(c === 0){
        // pass
    }
    else if(c > 0){
        y.push(x[i])
    }
}

console.log(y.sort());

// 

// leetcode problem 1
function twoSums(nums,target) {
// var nums = [3,2,4];

// var target = 6;

var lists = [];

for(i = 0; i < nums.length; i++){
    for(j = i+1; j < nums.length; j++){
        // console.log(nums[i]);
        // console.log(nums[j]);
        // console.log("*****")
        if(nums[i]+nums[j] === target){
            lists.push(i);
            lists.push(j);    
        }
    }
}
// console.log("*****************************************")
// console.log(lists)
  return lists;  
}


// leetcode problem 15

// var nums = [-1,0,1,2,-1,-4];

// var nums = [0,1,1];

var nums = [0,0,0];

var targetlist = [];

for(i = 0; i < nums.length-2; i++){
    for(j = i+1; j < nums.length-1; j++){
        list1 = [];
        for(k = j+1; k < nums.length; k++){
            if(nums[i]+nums[j]+nums[k] === 0){
                list1.push(nums[i]);
                list1.push(nums[j]);
                list1.push(nums[k]);
                
            }
            else{
                // pass
            }
        }
        if(list1.length === 0){
            // pass
        }
        else{
            targetlist.push(list1);
        }
    }
}

console.log(targetlist);

// leetcode problem 15 converting to function

function sum3(nums) {
    
var targetlist = [];

for(i = 0; i < nums.length-2; i++){
    for(j = i+1; j < nums.length-1; j++){
        list1 = [];
        for(k = j+1; k < nums.length; k++){
            if(nums[i]+nums[j]+nums[k] === 0){
                list1.push(nums[i]);
                list1.push(nums[j]);
                list1.push(nums[k]);
                
            }
            else{
                // pass
            }
        }
        if(list1.length === 0){
            // pass
        }
        else{
            targetlist.push(list1);
        }
    }
}

console.log(targetlist);

    
}

// leetcode problem 14

/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

*/


strs = ["flower","flow","flight"];

shorTeststr = strs[0];


for(i = 0 ; i < strs.length; i++){
    if(strs[i].length < shorTeststr.length){
        shorTeststr = strs[i];
    }
}

// console.log(shorTeststr);

list1 = [];

for(i = 0 ; i < shorTeststr.length; i++){
    c = 0;
    for(j = 0; j < strs.length; j++){
        if(strs[j][i] === shorTeststr[i]){
            c = c + 1;
        }
    }
    if( c === strs.length){
        list1.push(shorTeststr[i]);
    }
}

console.log(list1.join(""));

// Correct Output


// Leetcode problem 18

/*
Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:

0 <= a, b, c, d < n
a, b, c, and d are distinct.
nums[a] + nums[b] + nums[c] + nums[d] == target
You may return the answer in any order.

 

Example 1:

Input: nums = [1,0,-1,0,-2,2], target = 0
Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
Example 2:

Input: nums = [2,2,2,2,2], target = 8
Output: [[2,2,2,2]]
*/

// var nums = [1,0,-1,0,-2,2];

var nums = [2,2,2,2,2];

var final_list = [];

var targetvalue = 8;


for(i = 0; i < nums.length-3; i++){
    for(j = i+1; j < nums.length-2; j++){
        for(k = j+1; k < nums.length-1; k++){
            for(l = k+1; l < nums.length; l++){
                var targetlist = [];
                // console.log(nums[i]);
                // console.log(nums[j]);
                // console.log(nums[k]); 
                // console.log(nums[l]);  
                // console.log("******************");
                if(nums[i] + nums[j] + nums[k] + nums[l] === targetvalue){
                    targetlist.push(nums[i],nums[j],nums[k],nums[l]);
                }
            
                if(targetlist.length === 0){
                // pass
                }
                else{
                    final_list.push(targetlist.sort());
                }
            }    
        }
    }
}

console.log(final_list);

var list1 = [];

var list2 = [];

for(i = 0; i < final_list.length; i++){
    if(list2.includes(final_list[i].toString()) === true ){
        // pass
    }
    else{
        list1.push(final_list[i])
        list2.push(final_list[i].toString())
    }
}

console.log(list1);

// output ok


// Leetcode problem no 20 valid parenthesis

// 

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
 

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false
//

// var x = "()[]{}";

var x = "(}";

c = 0;

for(i = 0; i < x.length-1; i++){
    if(x[i] === "(" && x[i+1] ===")") {
        c = c + 1;
    }
    if(x[i] === "{" && x[i+1] ==="}") {
        c = c + 1;
    }
    if(x[i] === "[" && x[i+1] ==="]") {
        c = c + 1;
    }
}

if(2*c === x.length){
    console.log("True");
}
else{
    console.log("false");
}

// output ok


// leetcode problem no 22 generate parentheses

/*Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

 

Example 1:

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
Example 2:

Input: n = 1
Output: ["()"]
*/

// create the list as per Input

var inPut = 3  //prompt("Enter No:- ");

var masterList = [];

for(i = 0; i < inPut; i++){
    masterList.push("()");
}

// console.log(masterList);
// console.log("***************");

var x = masterList.join("");

var y = masterList.length;

for(i = 0; i <= y; i++){
   masterList.pop(); 
}

masterList.push(x);

console.log(masterList);

// Total no of combination possible

for(i = 0; i < masterList[0].length; i++){
   
}







// Find the valid parentheses


// not clear how to do it


// Leetcode no 43 multiply string

/*
Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.

 

Example 1:

Input: num1 = "2", num2 = "3"
Output: "6"
Example 2:

Input: num1 = "123", num2 = "456"
Output: "56088"
*/
 
var num1 = "123";

var num2 = "456";

console.log((num1*num2).toString());

console.log("**************");

console.log(typeof((num1*num2).toString()));

// output ok
