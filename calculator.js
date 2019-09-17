"use strict"

var btn0 = document.getElementById('btn0');
var btn1 = document.getElementById('btn1');
var btnClr = document.getElementById('btnClr');
var btnEql = document.getElementById('btnEql');
var btnSum = document.getElementById('btnSum');
var btnSub = document.getElementById('btnSub');
var btnMul = document.getElementById('btnMul');
var btnDiv = document.getElementById('btnDiv');

var result;

var digits = [];


btn0.onclick = function() {
                digits.push(0);
        document.getElementById('res').innerHTML = digits.join('');
            };

btn1.onclick = function() {
                digits.push(1);
        document.getElementById('res').innerHTML = digits.join('');
            };

btnSum.onclick = function() {
                digits.push('+');
        document.getElementById('res').innerHTML = digits.join('');
            };

btnSub.onclick = function() {
                digits.push('-');
        document.getElementById('res').innerHTML = digits.join('');
            };

btnMul.onclick = function() {
                digits.push('*');
        document.getElementById('res').innerHTML = digits.join('');
            };

btnDiv.onclick = function() {
                digits.push('/');
        document.getElementById('res').innerHTML = digits.join('');
            };


btnClr.onclick = function() {
                digits = [];
        document.getElementById('res').innerHTML = digits.join('');
            };


btnEql.onclick = function() {
        let num1;
        let num2;
        
        if (digits.indexOf('+') !== -1) {
          [num1, num2] = digits.join('').split("+");
          num1 = parseInt(num1, 2);
          num2 = parseInt(num2, 2);
          result = (num1+num2).toString(2);
        } else if (digits.indexOf('-') !== -1) {
          [num1, num2] = digits.join('').split('-');
          num1 = parseInt(num1, 2);
          num2 = parseInt(num2, 2);
          result = (num1-num2).toString(2);
        } else if (digits.indexOf('*') !== -1) {
          [num1, num2] = digits.join('').split('*');
          num1 = parseInt(num1, 2);
          num2 = parseInt(num2, 2);
          result = (num1*num2).toString(2);
        } else if (digits.indexOf('/') !== -1) {
          [num1, num2] = digits.join('').split('/');
          num1 = parseInt(num1, 2);
          num2 = parseInt(num2, 2);
          result = (num1/num2).toString(2);
        }
	digits = result.split('');
        document.getElementById('res').innerHTML = result;
            };  