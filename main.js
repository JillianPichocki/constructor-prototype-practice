//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/





function Dog(status, color, hungry, owner) {
    this.status = status;
    this.color = color;
    this.hungry = hungry;
    this.owner = owner;

}

let sadie = new Dog("normal", "black", false, "mason");

let moonshine = new Dog(undefined, undefined, true);


let atticus = new Dog();






//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/


function Human(cool) {
    this.cool = cool;

    this.pet = function (dog) {
        dog.status = "happy";
    }
    this.feed = function (dog) {
        dog.hungry = false;
    }
}

let mason = new Human(false);
let julia = new Human(true);


