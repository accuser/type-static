import { Person } from "./implementations/person.js";

const alice = Person.from({ id: "1", name: "Olive Brockwell" });

Person.is(alice); // returns `true`
