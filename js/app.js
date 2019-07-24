// Cached Functions

    // const func = function() {
    //     const f = arguments.callee;
    //     const argsArray = Array.prototype.slice.call(arguments);
    //     let toCache = null;
    //     if(argsArray.length > 1 && argsArray.length !== 0) {
    //         toCache = [];
    //         // We have an array of arguments
    //         argsArray.forEach(function(argument) {
    //             resultsArray.push(checkAndReturnSomething(argument));
    //         });
    //     } else {
    //         // We have length of 1
    //         toCache = checkAndReturnSomething(argsArray[0]);
    //     }

    //     function checkAndReturnSomething(argument) {
    //         let result = null;
    //         switch (typeof argument) {
    //             case 'function':
    //                 result = argument();
    //                 break;
    //             case 'string':
    //                 result = argument + ' is a string';
    //                 break;
    //             case 'number':
    //                 result = argument + 5;
    //                 break;
    //             default:
    //                 result = 'nothing was passed';
    //                 break;
    //         }

    //         return result;
    //     }

    //     const toCacheKey = JSON.stringify(argsArray);
    //     f.cache[toCacheKey] = toCache;

    //     return f.cache[toCacheKey];
    // }

    // func.cache = {};

    // console.log(func('Hello'));
    // console.log(func(1));
    // console.log(func(function() {return 'My name is shelby'}));

    // console.log(func.cache);
// Namespace Patterns
    // to eliminate any spacing collisions
    // to make it implementable by any 3rd party lib and so on
    // easy to maintain

    // create a namespace
    // const MY_APP = {};

    // MY_APP.namespace = function namespace(path) {
    //     // convert path to array of nested props
    //     const parts = path.split('.');
    //     let i;
    //     let parent = MY_APP;
    //     // remove the fisrt param from the array 
    //     // if it's the name of our namespace
    //     if(parts[0] === 'MY_APP') {
    //         parts = parts.slice(1);
    //     }

    //     for (i = 0; i < parts.length; i += 1) {
    //         // Create a prop if it doesn't exist
    //         if (typeof parent[parts[i]] === 'undefined') {
    //             parent[parts[i]] = {};
    //         }

    //         parent = parent[parts[i]];
    //     }   

    //     return parent;
    // }   

    // MY_APP.namespace('modules.timer.simulateReload')
    // console.log(MY_APP);
// Module Pattern
    // // Core APP Object
    // const MY_APP = {};
    // // Namespace function expression
    // MY_APP.namespace = function namespace(path) {
    //     // convert path to array of nested props
    //     const parts = path.split('.');
    //     let i;
    //     let parent = MY_APP;
    //     // remove the fisrt param from the array 
    //     // if it's the name of our namespace
    //     if(parts[0] === 'MY_APP') {
    //         parts = parts.slice(1);
    //     }
    //     for (i = 0; i < parts.length; i += 1) {
    //         // Create a prop if it doesn't exist
    //         if (typeof parent[parts[i]] === 'undefined') {
    //             parent[parts[i]] = {};
    //         }
    //         parent = parent[parts[i]];
    //     }   
    //     return parent;
    // }   

    // // #1 Step: Create a namespace
    //     MY_APP.namespace('modules.timer');
    // // #2 Create Module
    //     MY_APP.modules.timer = (function() {
    //         // #3 Declare dependancies
    //             // const module1 = MY_APP.modules.module1,
    //             //       module2 = MY_APP.modules.module2           
    //         // #4 Add some methods and vars
    //             const state = {
    //                 intervalTime: 700,
    //                 counter: 0
    //             }

    //             function setTimer() {
    //                 let counter = state.counter;
    //                 const time = state.intervalTime;
    //                 setInterval(function() {
    //                     console.log(counter);
    //                     counter++;
    //                 }, time);
    //             }

    //             return {
    //                 setTimer
    //             }
    //     })();
// Sandbox Pattern
        // Add Modules To Sandbox;
        // function Sandbox() {
        //     let args = Array.prototype.slice.call(arguments),
        //         callback = args.pop(),
        //         modules = (args[0] && typeof args[0] === "string") ? args : args[0],
        //         i;
        //     // Make sure the constructor function is called properly
        //         if (!(this instanceof Sandbox)) {
        //             return new Sandbox(modules, callback);
        //         }
        //     // Add props to this as needed
        //         this.showThis = function() {
        //             console.log(this);
        //         }
        //     // Add Modules if all of them needed to be there
        //         if(!modules || modules [0]=== '*') {
        //             modules = [];
        //             for (inner_module in Sandbox.modules) {
        //                 if(Sandbox.modules.hasOwnProperty(inner_module)) {
        //                     modules.push(inner_module);
        //                 }
        //             }
        //         } 

        //     // Initialize modules that we have
        //         for (i = 0; i < modules.length; i+=1) {
        //             Sandbox.modules[modules[i]](this);
        //         }

        //     // call the Callback 
        //         callback(this);
        // }

        // Sandbox.modules = {};

        // Sandbox.modules.dom = function(box) {
        //     box.getElement = function() { return 'element' };
        //     box.getStyle = function() { return 'style' };
        // }

        // Sandbox('*', function(box) {
        //     console.log(box);
        //     console.log(box.getElement());
        // });
// Sandbox practice:
    // Set the modules 
    //     Sandbox.modules = {
    //         dom: function(box) {
    //                 const vars = {
    //                     var1: 2,
    //                     var2: 5
    //                 }
    //                 // Pass the box and attach methods to it
    //                     box.getDocument = function() {
    //                         return document;
    //                     }

    //                     box.getVars = function() {
    //                         return vars;
    //                     }
    //         },
    //         ajax: function(box) {
    //             const vars = {
    //                 var1: "String",
    //                 var2: "another string"
    //             }

    //             box.post = function(path) {
    //                 if(path && typeof path === "string") {
    //                     console.log('Making request to ' + path + ' ...');
    //                     setTimeout(function() {
    //                         console.log('Success....')
    //                         return {
    //                             data: [1, 2, 3, 4]
    //                         }
    //                     }, 500);
    //                 }
    //             }
    //             box.getVars = function() {
    //                 return vars;
    //             }
    //         }
    //     };
    // // Sandbox constructor function
    // function Sandbox() {
    //     // Get all the arguments
    //     let argsArr = Array.prototype.slice.call(arguments),
    //         callback = argsArr.pop(),
    //         modules = (typeof argsArr[0] === "string" && argsArr[0]) ? argsArr : argsArr[0],
    //         i;
    //     // Check if the proper this object was passed
    //         if (!(this instanceof Sandbox)) {
    //             return new Sandbox(modules, callback);
    //         }
    //     // Add my own props
    //         this.sandboxVersion = 'v1.0.0';
    //     // Push all modules if no provided OR '*' provided
    //         if(!modules || modules[0] === '*') {
    //             modules = [];
    //             for (app_module in Sandbox.modules) {
    //                 if(Sandbox.modules.hasOwnProperty(app_module)) {
    //                     modules.push(app_module);
    //                 }
    //             }
    //         }
    //     // Initialize them
    //         for (i = 0; i < modules.length; i++) {
    //             Sandbox.modules[modules[i]](this);
    //         }
    //     // call calback with this obj
    //         callback(this);
    // }

    // new Sandbox('*', function(box) {
    //     console.log(box.getVars());
    // });
// Basic Inheritance 
    // #1
        // function Parent(name) {
        //     this.name = name || "Alex";
        // }

        // Parent.prototype.sayHi = function() {
        //     console.log("Hi " + this.name);
        // }

        // function Child() {}

        // function inherit(C, P) {
        //     C.prototype = new P();
        // }
        // // inherit
        // inherit(Child, Parent);
        
        // const a = new Child('Misha');
        // const b = new Child('Lisha');
        // a.sayHi()
        // b.sayHi();
    // #2
        // Rent a Constructor
        //     function Parent(firstName, lastName) {  
        //         this.firstName = firstName;
        //         this.lastName = lastName;
        //     }
        //     function Child(firstName, lastName) {
        //         Parent.apply(this, arguments);
        //         this.ageRestricted = true;
        //     }
        //     let newChild = new Child('Alex', 'Swarowsky');
        //     console.log(newChild);
    // #3 
        // Multiple inheritance by borrowing constructors
            // function Machine() {
            //     this.type = "Mechanical";
            //     this.purpose = "To Serve";
            // }

            // function CarMachine(maxSpeed, material) {
            //     this.type = "Car";
            //     this.material = material;
            //     this.maxSpeed = maxSpeed;
            // }

            // function Car(maxSpeed, material) {
            //     Machine.apply(this);
            //     CarMachine.apply(this, arguments);
            // }

            // let newCar = new Car(450, 'Titanium');
            // console.log(newCar);
    // #4 
        // Rent and set a prototype
            // function Machine(material) {
            //     this.material = material || null;
            //     this.type = "Mechanical";
            //     this.purpose = "To Serve";
            // }

            // function CarMachine(maxSpeed) {
            //     this.maxSpeed = maxSpeed || null;
            //     this.type = "Car";
            // }

            // CarMachine.prototype.defaultMaxSpeed = 300;
            // CarMachine.prototype.getMaxSpeed = function() {
            //     return this.maxSpeed || this.defaultMaxSpeed + 3;
            // };
            // CarMachine.prototype.setMaxSpeed = function(speed) {
            //     this.defaultMaxSpeed = speed;
            // }

            // function Car(maxSpeed, material) {
            //     Machine.apply(this, arguments);
            //     CarMachine.apply(this, arguments);
            // }   
            // Car.prototype = new CarMachine();

            // let newCar = new Car(null, 'Titanium');
            // console.log(newCar);
            // console.log(newCar.getMaxSpeed());
            // newCar.setMaxSpeed(1000);
            // console.log(newCar.getMaxSpeed());

            // let anotherCar = new Car(null, "Plastic");
            // console.log(anotherCar.getMaxSpeed());            
            // anotherCar.setMaxSpeed(1000);
            // console.log(anotherCar.getMaxSpeed());     

    // #5   
        // Share the Prototype       
            // function Machine() {
            //     this.type = "Machine";
            // };
            // Machine.prototype.getType = function() {
            //     return this.type;
            // }
            // Machine.prototype.getMaxSpeed = function() {
            //     return this.maxSpeed;
            // }

            // function inheritPrototype(C, P) {
            //     C.prototype = P.prototype;
            // }

            // function Car(maxSpeed) {
            //     // Call the parent Constructor
            //     Machine.apply(this);
            //     this.maxSpeed = maxSpeed;
            // }

            // inheritPrototype(Car, Machine);

            // let newCar = new Car(650);
            // console.log(newCar.getType());
            // console.log(newCar.getMaxSpeed());
    // #6 
        // inherit function (proxy constructors)
            // let inheritWithProxy = (function () {
            //     function F = function() {};
            //     return function(C, P) {
            //         F.prototype = P.prototype;
            //         C.prototype = new F();
            //         C.uber = P.prototype;
            //         C.prototype.constructor = C;
            //     }
            // })(); 
// Classical Inheritance Practice
    // function Person() {
    //     this.props = {
    //         name: true,
    //         age: true,
    //         job: true
    //     }
    // }
    // Person.prototype.getProps = function() {
    //     return this.props;
    // }

    // function DefaultPerson(name, age, job) {
    //     // call the parent constructor
    //     Person.apply(this);
    //     // retrieve the array of arguments
    //     const argsArr = Array.prototype.slice.call(arguments);
    //     // go through each argument and apply
    //     this.name = name;
    //     this.age = age;
    //     this.job = job;
    // }
    // function inheritProto(C, P) {
    //     function F(){};
    //     F.prototype = P.prototype;
    //     C.prototype = new F();
    //     C.uber = P.prototype;
    //     C.prototype.constructor = C;
    // }
    // // inherit from Parent prototype methods
    // inheritProto(DefaultPerson, Person);
    // // make nick inherit from default person instance of the class / just object
    // const Nick = new DefaultPerson('Nick', '18', 'Software Developer');
    // console.log(Nick);
// Prototypal Inheritance
    // Object.create() 1/2
        // function Person() {
        //     this.props = {
        //         name: true,
        //         age: true,
        //         job: true
        //     }
        // }
        // Person.prototype.getProps = function() {
        //     return this.props;
        // }

        // const defPerson = new Person();
        // // make nick inherit from default person instance of the class / just object
        // const Nick = Object.create(defPerson);
        // console.log(Nick);
    // Object.create() 2/2
        // let obj = {
        //     hello: 'Man',
        //     my: 'Name',
        //     is: "steve"
        // }
        // let obj2 = Object.create(obj, {
        //     name: 'Lego'
        // });
        // console.log(obj2);
// Inheritance by copying Properties\
    // Shallow Copy
        // function shallowExtend(parent, p_child) {
        //     let prop,
        //         child = p_child || {};
        //     for (prop in parent) {
        //         if (parent.hasOwnProperty(prop)) {
        //             child[prop] = parent[prop];
        //         }
        //     }
        //     return child;
        // }
        // let defObject = {
        //     name: 'rick',
        //     age: 4,
        //     getName: function() {
        //         return this.name;
        //     },
        //     getJob: function() {
        //         return this.job;
        //     }
        // }
        // let newObject = {
        //     job: 'Driver'
        // }
        // let extendedObject = shallowExtend(defObject, newObject);
        // console.log(extendedObject);
    // Deep Copy
        // function deepExtend(parent, child) {
        //     let prop,
        //         toStr = Object.prototype.toString,
        //         astr = "[object Array]";
        //     child = child || {};
        //     for (prop in parent) {
        //         if (parent.hasOwnProperty(prop)) {
        //             if (typeof parent[prop] === "object") {
        //                 child[prop] = (toStr.call(parent[prop]) === astr) ? [] : {};
        //                 deepExtend(parent[prop], child[prop]);
        //             } else {
        //                 child[prop] = parent[prop];
        //             }
        //         }
        //     }
        // }

// Design Patterns
    // #1 Singleton
        // Such things as Logger Class or else will be a good example of a Singleton patterns
        // where you have one object that needs to work in the whole system of classes
        // Cashed 
            // function Universe(world) {
            //     if (typeof Universe.cach === "object") {
            //         return Universe.cach;
            //     }

            //     this.world = world;
            //     this.name = "Universe v0.1";

            //     Universe.cach = this;

            // }

            // let uni_1 = new Universe('Heath');
            // let uni_2 = new Universe();
            // console.log(uni_1 === uni_2);
        // Closure
            // function Universe (world) {
            //     // the cashed instance
            //     let instance = this;
            //     // proceed as normal
            //     this.world = world;
            //     this.name = name;

            //     Universe = function() {
            //         return instance;
            //     }
            // }

            // let uni_1 = new Universe('Heath'),
            //     uni_2 = new Universe();
            // console.log(uni_1 === uni_2);
    // #2 Factory
        // When you need to create class instances during the runtime without knowing them beforehand
        // // parent constructor
        // function CarMaker() {};
        // // parent methods
        // CarMaker.prototype.drive = function drive() {
        //     console.log("Vroom, I have " + this.doors + " doors... ");
        // }
        // // the static factory method
        // CarMaker.factory = function factory(type) {
        //     let constr = type,
        //         newcar;
        //     // error if the constructor doesn't exist
        //     if (typeof CarMaker[constr] !== "function") {
        //         throw {
        //             name: "Error",
        //             message: constr + " doesn't exist"
        //         }
        //     }
        //     // inherit the parent but only once
        //     if (CarMaker[constr].prototype.drive !== "function") {
        //         CarMaker[constr].prototype = new CarMaker();
        //     }
        //     // create a new instance of type
        //     newcar = new CarMaker[constr]();
        //     // return
        //     return newcar;
        // }
        // // Define CarMaker Constructors
        // CarMaker.Compact = function() {
        //     this.doors = 4;
        // }
        // CarMaker.Convertible = function() {
        //     this.doors = 2;
        // }
        // CarMaker.SUV = function() {
        //     this.doors = 17;
        // }

        // var newCar = CarMaker.factory('SUV');
        // var newCar2 = CarMaker.factory('Compact');
        // newCar.drive();
        // newCar2.drive();
    // #3 Iterator
        // when you need to traverse a composite data structure that consist of separate pieces
        // it is simply an interface that allows you to traverse it in YOUR logic
        // const complexDataObj = (function () {
        //     // Private
        //     let index = 0,
        //         storage = [1, 2, 3, 4, 5, 6, 7, 8], 
        //         len = storage.length;
        //     function _hasNext() {
        //         if(index < len) {
        //             return true; 
        //         } else {
        //             return false;
        //         }
        //     }
        //     function getCurrent() {
        //         return storage[index];
        //     }
        //     function rewind() {
        //         index = 0;
        //     }
        //     // Public
        //     function next() {
        //         let element;
        //         if(!_hasNext()) {
        //             return null;
        //         }
        //         element = storage[index];
        //         index += 1;

        //         return element;
        //     }
        //     // Interface
        //     return {
        //         next,
        //         getCurrent,
        //         rewind
        //     }

        // })(); 
        // console.log(complexDataObj.next());
        // complexDataObj.next();
        // console.log(complexDataObj.getCurrent());
        // complexDataObj.rewind();
        // console.log(complexDataObj.getCurrent());
    // #4 Decorator
        // when you need to tweak an object 
        // by wrapping it with others objects at the runtime
        function Sale(price) {
            this.price = price;
        };
        Sale.prototype.getPrice = function (){
            return this.price;
        };
        // Decorators
        Sale.decorators = {};
        Sale.decorators.fedtax = {
            getPrice: function() {
                var price = this.uber.getPrice();
                price += price * 5 / 100;
                return price;
            }
        }











