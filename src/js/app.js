//import { Character } from "./character"

class Character {
  constructor(name, type) {
    if (name.length > 2 && name.length < 10) {
      this.name = name;
    } else {
      throw new Error("Имя должно быть от 2 до 10 символов");
    }

    const types = [
      "Bowman",
      "Swordsman",
      "Magician",
      "Daemon",
      "Undead",
      "Zombie",
    ];
    if (types.includes(type)) {
      this.type = type;
    } else {
      throw new Error(
        "Тип должен быть отдним из: Bowman, Swordsman, Magician, Daemon, Undead, Zombie"
      );
    }

    this.health = 100;
    this.level = 1;
  }
}

class Team {
  constructor() {
    this.members = new Set();
  }

  add(member) {
    if (this.members.has(member)) {
      throw new Error(`${member.type} ${member.name} уже существует в команде`);
    } else {
      this.members.add(member);
    }
  }
  addAll(...newMembers) {
    newMembers.map((member) => {
      this.members.add(member);
    });
  }
  toArray() {
    return [...this.members];
  }
}

let annie = new Character("Annie", "Daemon");
let den = new Character("Den", "Magician");
let tim = new Character("Tim", "Swordsman");

/// Spacify
let spacify = new Team();
spacify.addAll(den, tim);
console.log(spacify.members); // 2 members: Den, Tim

spacify.addAll(tim, annie); // No errors, no throw
console.log(spacify.members); // 3 members: Den, Tim, Annie

let arr = spacify.toArray()
console.log(`.toArray() -> ${typeof arr}`); // [annie, den]

// Yoffix
let yoffix = new Team();
console.log(yoffix.members); // 0 members

yoffix.add(annie);
yoffix.add(den);

console.log(yoffix.members); // 2 members
//yoffix.add(annie); // Throw error
