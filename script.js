const calculateButton = document.getElementById('calculate');
const forceInput = document.getElementById('force');
const areaInput = document.getElementById('area');
const resultElement = document.getElementById('result');

calculateButton.addEventListener('click', () => {
    const force = parseFloat(forceInput.value);
    const area = parseFloat(areaInput.value);

    if (!isNaN(force) && !isNaN(area) && area !== 0) {
        const stress = force / area;
        resultElement.textContent = `Stress: ${stress.toFixed(2)} N/m²`;
    } else {
        resultElement.textContent = 'Invalid input';
    }
});