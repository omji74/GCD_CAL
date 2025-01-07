function calculateGCD() {
    const numA = parseInt(document.getElementById('numA').value);
    const numB = parseInt(document.getElementById('numB').value);
    const stepList = document.getElementById('stepList');
    const resultElement = document.getElementById('result');
    const steps = [];
    stepList.innerHTML = '';
    resultElement.style.opacity = 0;

    if (isNaN(numA) || isNaN(numB) || numA <= 0 || numB <= 0) {
        alert('Please enter positive numbers');
        return;
    }

    let a = numA;
    let b = numB;

    while (b !== 0) {
        let remainder = a % b;
        steps.push(`${a} % ${b} = ${remainder}`);
        a = b;
        b = remainder;
    }
//Mst Animation for insert step
    steps.forEach((step, index) => {
        const li = document.createElement('li');
        li.textContent = step;
        li.style.animationDelay = `${index * 0.3}s`;
        stepList.appendChild(li);
    });

    // FINAL GCD :)
    resultElement.textContent = `GCD is: ${a}`;
    resultElement.style.animationDelay = `${steps.length * 0.3}s`;
    resultElement.style.opacity = 1;
}
