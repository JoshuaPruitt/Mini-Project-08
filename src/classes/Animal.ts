import ZooAnimals from "../interfaces/ZooAnimals";

class Animal implements ZooAnimals {
    species: string;
    hungry: boolean;
    amount: number;
    weight: number;

    constructor(species: string, hungry: boolean, amount: number, weight: number){
        this.species = species;
        this.hungry = hungry;
        this.amount = amount;
        this.weight = weight;
    }

}

export default Animal;