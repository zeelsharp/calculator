class calculator {
    total = 0;
    currentValue = '';
    displayDiv = document.querySelector('#display');

    init() {
        this.initNumberHandlers();
        this.initEventHandlers();
    }

    onNumberClick(event) {
        event.preventDefault();
        const num = Number(event.target.textContent);
        this.currentValue = `${this.currentValue}${num}`;
        this.renderDisplay();
    }

    renderDisplay() {
        this.displayDiv.textContent = this.currentValue;
    }

    equals(event) {
        console.log('currentValue', this.currentValue);
    }
    
    initNumberHandlers() {
        const numbers = document.querySelectorAll('.data-number');
        numbers.forEach(numButton => 
            numButton.addEventListener('click', (ev) => {this.onNumberClick(ev)}, false));
    }

    initEventHandlers() {
        document.querySelector('#equal').addEventListener('click', (ev) => {this.equals(ev)}, false);
    }
}

(() => {
    const calc = new calculator();
    calc.init();
})()

