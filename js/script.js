// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Aimar Fernandez
// Created on: May 2025
// This file contains the JS functions for index.html

"use strict"

function myButtonClicked() {
  let answer = 0
  const inputNumber = parseInt(document.getElementById("input-number").value)
  for (let counter = 0; counter <= inputNumber; counter = counter + 1) {
    answer = answer + counter
  }
  document.getElementById("answer").innerHTML = 
    "<p>The answer is: " + answer + "</p>"
}
