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


