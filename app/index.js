import { addToDom } from './helpers'; //when we have to import another file;
import add from './add';
//import Person from './person';
import SuperPerson from './person';

// addToDom('<h1>Add this here!</h1>'); //using the function here from another file;
// addToDom(`18 + 24 = ${add(18, 24)}`);

addToDom('<hr>'); //hr tag is the horizontal rule;

// const Bob = new Person('Bob');
// const Susie = new Person('Susie');
const Bob = new SuperPerson('Bob', 'BobCat');
const Susie = new SuperPerson('Susie', 'SusieQ');

addToDom(Bob.speak('Hello'));
addToDom(Susie.speak('Hi, Bob'));

addToDom(Susie.xRay());

addToDom(Bob.sayHeroName());

