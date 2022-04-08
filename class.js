employees=[
    {
        id: 089,
        firstName: "Shahzaib",
        lastName: "Ekram",
        salary: 900
    },
    {
        id: 129,
        firstName: "John",
        lastName: "Bob",
        salary: 78900
    }
]

class Emp{
    constructor(id, firstName, lastName, salary){
        this.id1 = id;
        this.f_Name= firstName;
        this.l_Name = lastName;
        this.salary1 = salary;
    }

    getID(){
        employees.forEach(element => {
            if(element.id == this.id1){
                console.log("ID=" +" " + element.id)
            }
        });
    }

    getFirst_Name(){
        employees.forEach(element => {
            if(element.firstName == this.f_Name){
                console.log("First Name=" +" "+element.firstName)
            }
        });
    }


    getLast_Name(){
        employees.forEach(element => {
            if(element.lastName == this.l_Name){
                console.log("Last Name=" + " "+ element.lastName)
            }
        });
    }

    getSalary(){
        employees.forEach(element => {
            if(element.salary == this.salary1){
                console.log("Salary=" + " " + element.salary)
            }
        });
    }

    getAnnualsalary(){
        employees.forEach(element => {
            if (element.id == this.id1){
                console.log("Annual Salary=" + " "+ element.salary * 12)     
            } 
        });
    }

    getIncreasesalary(){
        employees.forEach(element => {
            
            if (element.id == this.id1){
                console.log("Increament" + Math.ceil(element.salary/12 * 100))       
                
            } 
        });
        }

}
Employee =  new Emp(089, "Shah", "Ekram", 900)
// Employee =  new Emp(129, "John", "Bob", 78900)
Employee.getID()
Employee.getFirst_Name()
Employee.getLast_Name()
Employee.getSalary()
Employee.getAnnualsalary()
Employee.getIncreasesalary()