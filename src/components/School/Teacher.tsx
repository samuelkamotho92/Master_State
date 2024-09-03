import { useReducer } from "react"

interface TeacherType{
    name:string,
    age:number,
    gender:string,
    subjects:string
}

interface ActionType{
    type:string,
}


const reducer = (state:TeacherType,action:ActionType):TeacherType=>{
switch(action.type){
case "increment":
    return {
        ...state,
        age:Math.min(200,state.age + 1)
    };
case "decrement":
    return {
        ...state,
        age:Math.max(0,state.age - 1)
    }
    default:
        throw new Error("Invalid action type");
}


}
const Teacher = () => {
    const [state,dispatch] = useReducer(reducer,{name:"Cynthia", age:1 ,gender:"female",subjects:"Maths" });


  return (
    <div>
        <p>{state.name}</p>
        <button onClick={()=>dispatch({type:"increment"})}>
            +
        </button>
       {state.age} 
        <button onClick={()=>dispatch({type:"decrement"})}>
            -
        </button>
    </div>
  )
}

export default Teacher
