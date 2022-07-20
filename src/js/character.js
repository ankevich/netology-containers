class Character {
    constructor(name, type) {
      if (name.length > 2 && name.length < 10) {
        this.name = name;
      } else {
        throw new Error('Имя должно быть от 2 до 10 символов');
      }
  
      const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
      if (types.includes(type)) {
        this.type = type;
      } else {
        throw new Error(
          'Тип должен быть отдним из: Bowman, Swordsman, Magician, Daemon, Undead, Zombie',
        );
      }
  
      this.health = 100;
      this.level = 1;
    }
}

export {Character}