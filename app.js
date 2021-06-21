function measureBMI () {
    // true = metric, false = imperial
    let unit = document.getElementById("bmi-metric").checked,
        weight = document.getElementById("bmi-weight"),
        weightu = document.getElementById("bmi-weight-unit"),
        height = document.getElementById("bmi-height"),
        heightu = document.getElementById("bmi-height-unit");
    
    if (unit) {
      weightu.innerHTML = "KG";
      weight.min = 1;
      weight.max = 635;
      heightu.innerHTML = "CM";
      height.min = 54;
      height.max = 272;
    } else {
      weightu.innerHTML = "LBS";
      weight.min = 2;
      weight.max = 1400;
      heightu.innerHTML = "IN";
      height.min = 21;
      height.max = 107;
    }
  }
  
  function calcBMI () {
    // (A) Get elements
    let bmi = null,
        unit = document.getElementById("bmi-metric").checked, // true = metric, false = imperial
        weight = parseInt(document.getElementById("bmi-weight").value),
        height = parseInt(document.getElementById("bmi-height").value),
        results = document.getElementById("bmi-results");
  
    // (B) Calculate BMI
    // Metric BMI = Mass (kg) / Height (m) square 
    if (unit) {
      height = height / 100;
      bmi = weight / (height * height);
    }
    // Imperial BMI = 703 X Mass (lbs) / Height (in) square 
    else {
      bmi = 703 * (weight / (height * height));
    }
    // Round off
    bmi = Math.round(bmi * 100) / 100; // Round off 2 decimal places
  
    // (C) Show Results
    if (bmi < 18.6) {
      results.innerHTML = bmi + " - ✖ Oh no, You're underweight!";
      results.style.color="red";
    } else if (bmi < 25.9) {
      results.innerHTML = bmi + " - ✔ Congrats, You’re Healthy!";
      results.style.color="green";
    } 
    else {
      results.innerHTML = bmi + " - ✖ Oh no, You’re overweight!";
      results.style.color="red";
    }
    return false;
  }