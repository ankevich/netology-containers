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
    newMembers.forEach((member) => {
      this.members.add(member);
    });
  }

  toArray() {
    return [...this.members];
  }
}
// eslint-disable-next-line import/prefer-default-export
export { Team };

// / Spacify
// let spacify = new Team();
// spacify.addAll(den, tim);
// console.log(spacify.members); // 2 members: Den, Tim

// spacify.addAll(tim, annie); // No errors, no throw
// console.log(spacify.members); // 3 members: Den, Tim, Annie

// let arr = spacify.toArray()
// console.log(`.toArray() -> ${typeof arr}`); // [annie, den]

// // Yoffix
// let yoffix = new Team();
// console.log(yoffix.members); // 0 members

// yoffix.add(annie);
// yoffix.add(den);

// console.log(yoffix.members); // 2 members
// //yoffix.add(annie); // Throw error
