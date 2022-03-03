"use strict";
class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}
const addTwoNumber = (l1, l2) => {
    let l1Reverse = (l1) ? l1.reverse() : [];
    let l2Reverse = (l2) ? l2.reverse() : [];
    let respUniendo1 = l1Reverse.join('');
    let respUniendo2 = l2Reverse.join('');
    let ansSum = +respUniendo1 + +respUniendo2;
    let ansString = ansSum + '';
    let respTotalArr = ansString.split('');
    let respNum = respTotalArr.map((value) => +value);
    let algo = respNum.reverse();
    return algo;
};
const reverso = (l1, l2) => {
    let algomas = new ListNode();
    l1 = l1 ? l1 : [];
    l2 = l2 ? l2 : [];
    let arr1 = [];
    let arr2 = [];
    let algo = [];
    for (let i = l1.length - 1; i >= 0; i--) {
        arr1.push(l1[i]);
    }
    for (let i = l2.length - 1; i >= 0; i--) {
        arr2.push(l2[i]);
    }
    let respUniendo1 = arr1.join('');
    let respUniendo2 = arr2.join('');
    let ansSum = +respUniendo1 + +respUniendo2;
    let ansString = ansSum + '';
    let respTotalArr = ansString.split('');
    let respNum = respTotalArr.map((value) => +value);
    for (let i = respNum.length - 1; i >= 0; i--) {
        algo.push(respNum[i]);
    }
    console.log(typeof algo);
    return algo;
};
