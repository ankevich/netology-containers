import { Character } from "./character";
import { Team } from "./app";

let annie = new Character("Annie", "Daemon");
let den = new Character("Den", "Magician");
let tim = new Character("Tim", "Swordsman");

test("функция выбрасывает ошибку если такой персонаж уже добавлен в команду ", () => {
  const expected = `${annie.type} ${annie.name} уже существует в команде`;
  let spacify = new Team();
  spacify.add(annie);
  const t = () => {
    spacify.add(annie);
  };
  expect(t).toThrow(expected);
});

test("функция добавляет персонажа в команду", () => {
  const expected = new Set([annie]);
  let spacify = new Team();
  spacify.add(annie);
  expect(expected).toEqual(spacify.members);
});

test('функция добавляет всех персонажей', () => {
    const expected = new Set ([annie, den, tim])
    let spacify = new Team()
    spacify.addAll(annie, den, tim)
    expect(expected).toEqual(spacify.members)
})

test('функция превращает персонажей в массив', () => {
    const expected = [annie, den, tim]
    let spacify = new Team()
    spacify.addAll(annie, den, tim)
    const array = spacify.toArray()
    expect(expected).toEqual(array)
})
