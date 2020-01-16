class Pizza {
    constructor() {
        this.tomato = false;
        this.cheese = false;
        this.thinDough = false;
        this.pineappleSlices = 0;
        this.baconStrips = 0;
        this.otherIngredients = [];
    }

    setTomato() {
        this.tomato = true;
        return this;
    }

    setCheese() {
        this.cheese = true;
        return this;
    }

    setThingDough() {
        this.thinDough = true;
        return this;
    }

    setPineappleSlices(slices) {
        this.pineappleSlices = slices;
        return this;
    }

    setBaconStrips(strips) {
        this.baconStrips = strips;
        return this;
    }

    setOtherIngredients(ingredient) {
        this.otherIngredients.push(ingredient);
        return this;
    }

    build() {
        return {
          tomato: this.tomato,
          cheese: this.cheese,
          thinDough: this.thinDough,
          pineappleSlices: this.pineappleSlices,
          baconStrips: this.baconStrips,
          otherIngredients: this.otherIngredients
        };
    }

    showPizza() {
        return `La pizza contiene:</br> tomato: ${this.tomato} </br> cheese: ${this.cheese} </br>
                thindough: ${this.thinDough} </br> pineappleSlices: ${this.pineappleSlices} </br>
                baconStrips: ${this.baconStrips} </br> otherIngredients: ${this.otherIngredients}`;
    }
}

function submitPizza() {

    const pizza = new Pizza();

    document.getElementById('formBuilder').addEventListener('click', function(event){
        event.preventDefault();
    });

    const form = document.getElementById('formBuilder');
    
    for(let i = 0; i < form.elements.length; i++) {
        if( form.elements[i].value === 'tomato' && form.elements[i].checked) {
            pizza.setTomato();
        } else if ( form.elements[i].value === 'cheese' && form.elements[i].checked ) {
            pizza.setCheese();
        } else if ( form.elements[i].value === 'thinDough' && form.elements[i].checked ) {
            pizza.setThingDough();
        }
    }

    for(let i = 3; i < form.elements.length; i++) {
        if (form.elements[i].name === 'pineappleSlices' && form.elements[i].value) {
            pizza.setPineappleSlices(form.elements[i].value);
        } else if ( form.elements[i].name === 'baconStrips' && form.elements[i].value) {
            pizza.setBaconStrips(form.elements[i].value);
        } else if ( form.elements[i].name === 'other' && form.elements[i].value) {
            pizza.setOtherIngredients(form.elements[i].value);
        }
    }
    
    const parrafo = document.getElementById('parrafo');
    parrafo.innerHTML = pizza.showPizza();
}
