
function myFunction() {
    
    const switchButton = document.getElementById('try-it');
    switchButton.addEventListener('click', function() {
        document.getElementById("demo2").innerHTML = "Paragraph changed.";

    })

    
}

function pickCar() {
    const pickCarButton = document.getElementById('pick-car');
    pickCarButton.addEventListener('click',function() {
        var cars = ["BMW", "Volvo", "Saab", "Ford"];
        var i = 0;
        var text = "";
        for (;cars[i];) {
            text += cars[i] + "<br>";
            i++;
        }
        console.log(text)
        document.getElementById("car").innerHTML = text;

    })
}

function multiply(a,b) {
    return a*b;
}

function findMax() {

    const pickNumberButton = document.getElementById('pick-number');

    pickNumberButton.addEventListener('click', function() {
        let number = prompt("please set a number");
        if( number == null ) {
            document.getElementById('number').innerHTML = "this is no number";
        }
        else {
            var b = number.split(',');

            var i;
            var max = -Infinity;
            for (i=0;i<b.length; i++) {
                if (parseInt(b[i]) > max) {
                    max = parseInt(b[i]);
                }
            }
            
            document.getElementById('number').innerHTML = "max: " + max;
        }
  
    }) 
}

// Trying a Constructor
function Person(first,last,age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
}

function printPerson () {
    const pickPersonButton = document.getElementById('pick-person');

    pickPersonButton.addEventListener('click', function() {
        let person = prompt("please state person");
        if( person == null ) {
            document.getElementById('person').innerHTML = "this is no person";
        }
        else {
            var b = person.split(',');
            var i;
            f = b[0];
            l = b[1];
            a = b[2];
            var myPerson = new Person(f,l,a);

            document.getElementById("person").innerHTML = "this is " + myPerson.firstName + " " + myPerson.lastName + " and they are this old: " + myPerson.age;
        }
    })
}

//trying out forms
function numbValid() {
    const value = document.getElementById("numb").value;
    console.log(value);
    let text;

    if (isNaN(value) || value<1 || value>10) {
        text = "input not valid";
    }
    else {
        text = "input is ok and is : " + value;
    }
    console.log(text);
    document.getElementById("numb-text").innerHTML = text;

}

function X(n) {
    return function Y() {
        var Z = arguments[0];
        for (var i=1; i<n; i++){
            Z = Z +arguments[i];
        }
        console.log(Z);
    }
}


$(window).on('load',() => {
    myFunction();
    pickCar();
    document.getElementById("multiply").innerHTML = multiply(4,3);
    findMax();
    printPerson();
    numbValid();
    X();
});



