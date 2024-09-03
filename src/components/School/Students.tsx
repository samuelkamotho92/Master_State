import { useState } from "react"

type StudentDetails = {
    name: string,
    age: number,
    location: string,
    score: number,
    grade: string
}

interface DevType {
    specialization: string,
    language: string,
    car: string,
    age: number
}


const Students = () => {
    const [student, setStudent] = useState<StudentDetails>({
        name: "samuel",
        age: 20,
        location: "Nairobi",
        score: 20,
        grade: "A"
    });

    //Arrays
    const [developer, setDeveloper] = useState<DevType[]>([
        {
            specialization: "Frontend",
            language: "Angular",
            car: "Audi",
            age: 40
        },
        {
            specialization: "Backend",
            language: ".NET",
            car: "Audi",
            age: 60
        }
    ]);

    const averageAge: number = developer.reduce((acc, currentVal) => acc + currentVal.age, 0) / 2;
    console.log(averageAge);

const addDeveloper = ()=>{
setDeveloper([...developer, {
    specialization: "Frontend",
    language: "Angular",
    car: "Audi",
    age: 300
}
]);
} 


    const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(e.target)
        console.log(student);
    }
    return (
        <div>
            <button onClick={()=>addDeveloper()}>Add</button>
            <form onSubmit={(e) => handleForm(e)}>
                <label>Name</label>
                <input type="text" value={student.name} onChange={(e) => setStudent({ ...student, name: e.target.value })} />
                <label>Name</label>
                <input type="text" placeholder={student.location} value={student.location} onChange={(e) => setStudent({ ...student, location: e.target.value })} />
                <label>Name</label>
                <input type="text" placeholder={student.grade} value={student.grade} onChange={(e) => setStudent({ ...student, grade: e.target.value })} />
                <button type="submit">Save</button>
            </form>
        </div>
    )
}

// const averageAge: number = developer.reduce((acc, currentVal) => acc + currentVal.age, 0) / developer.length;

export default Students;
