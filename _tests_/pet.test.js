const Pet = require('../src/pet');

describe('constructor', () => {
  it('returns an object', () => {
    expect(new Pet()).toBeInstanceOf(Object);
  });
});

describe('constructor', () => {
  it('sets the name property', () => {
    const pet = new Pet('Fido');

    expect(pet.name).toEqual('Fido');
    expect(pet.hunger).toEqual(0);
    expect(pet.fitness).toEqual(10);
  });
});

describe('growUp', () => {
  it('has a initial age of 0', () => {
    const pet = new Pet('Fido');

    expect(pet.age).toEqual(0);
  });
});

describe('growUp and getting unhealthier', () => {
  it('increases the age of our pet by 1', () => {
    const pet = new Pet('Fido');
    pet.growUp();

    expect(pet.age).toEqual(1);
    expect(pet.hunger).toEqual(5);
    expect(pet.fitness).toEqual(7);
  });

  it("growup does not function if pet is not alive" ,() => {
    const pet = new Pet("Fido");
    pet.age = 30;
    expect(() => pet.growUp()).toThrow("your pet is no longer alive :(");
  });
});

describe('walk', () => {
  it('increases fitness by 4 to a maximum of 10', () => {
    const pet = new Pet('fido');

    pet.fitness = 8;
    pet.walk();

    expect(pet.fitness).toEqual(10);
  });
  it("walk does not function if pet is not alive" ,() => {
    const pet = new Pet("Fido");
    pet.fitness = -1;
    expect(() => pet.walk()).toThrow("your pet is no longer alive :(");
  });
});

describe('feed', () => {
  it('decreases the pets hunger levels', () => {
    const pet = new Pet('fido');

    pet.hunger = 0;
    pet.feed();

    expect(pet.hunger).toEqual(0);
  });
  it("feed does not function if pet is not alive" ,() => {
    const pet = new Pet("Fido");
    pet.hunger = 30;
    expect(() => pet.feed()).toThrow("your pet is no longer alive :(");
  });
});

describe('checkUp', () => {
  it('check if pet needs a walk', () => {
    const pet = new Pet('fido');

    pet.fitness = 3
    expect(pet.checkUp()).toBe('I need a walk');
  });
  it('check if pet is hungry', () => {
    const pet = new Pet('fido');
    pet.hunger = 5;
    expect(pet.checkUp()).toEqual('I am hungry');
   });
  it('check if pet needs both walking and feeding', () => {
    const pet = new Pet('fido');
    pet.fitness = 3;
    pet.hunger = 6;
    expect(pet.checkUp()).toEqual('I am hungry AND I need a walk');
   });
   it('if pet is neither hungry nor in need of a walk', () => {
    const pet = new Pet('fido');
   pet.fitness = 6;
   pet.hunger = 3;
   expect(pet.checkUp()).toEqual('I feel great'); 
  });
  it("checkup does not function if pet is not alive" ,() => {
    const pet = new Pet("Fido");
    pet.age = 30;
    expect(() => pet.growUp()).toThrow("your pet is no longer alive :(");
  });
});

describe('death', () => {
  it('should be alive when growing up and walking', () => {
    const pet = new Pet('Fido');
    pet.growUp();
    expect(pet.isAlive).toEqual(true);

    pet.walk();
    expect(pet.isAlive).toEqual(true);
  });
  it('check if pets fitness is 0', () => {
    const pet = new Pet('fido');
    pet.fitness = 0;
    expect(pet.isAlive).toEqual(false);
  });
  it('check if pets hunger is 10 or more', () => {
    const pet = new Pet('fido');
    pet.hunger = 10;
    expect(pet.isAlive).toEqual(false);
  });
  it('check if pets age is 30', () => {
    const pet = new Pet('fido');
    pet.age = 30;
    expect(pet.isAlive).toEqual(false);
  });
})
