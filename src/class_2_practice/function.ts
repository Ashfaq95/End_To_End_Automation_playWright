interface DogData {
    name: string;
    age: number;
    breed: string;
  }
  const dogs: DogData[] = [
    {
      name: "maxie",
      age: 2,
      breed: "deshi",
    },
    {
      name: "foxie",
      age: 3,
      breed: "bideshi",
    },
  ];
  type DogLogic = (dog: DogData) => boolean;
  function giveMeDogOfUserCriteria(
    dogArray: DogData[],
    dogLogic: DogLogic
  ): DogData | null {
    for (const dog of dogArray) {
      const isMatch = dogLogic(dog);
      if (isMatch) {
        return dog;
      }
    }
    return null;
  }
  giveMeDogOfUserCriteria(dogs, (dog) => {
    const nm = dog.name;
    return dog.age >= 2 && nm === "maxie";
  });