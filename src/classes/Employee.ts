interface Work {
    recievePay: (pay: number) => number;
}

class Employee implements Work{
    private name: string; 
    private id: number;
    private title: string;
    private salary: number;

    
    constructor(name: string, id: number, title: string, salary: number){
        this.name = name;
        this.id = id;
        this.title = title;
        this.salary = salary;
    }

    recievePay(pay: number): number{
        return pay
    }
}

export default Employee