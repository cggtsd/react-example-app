
// const Student = (props) => {
    
//     return (
//         <div className="student">
//         <p>Name: {props.name}</p>
//         <p>Age: {props.age}</p>
//         <p>Student: {props.isStudent ? 'Yes' : 'No'}</p>
//             {props.children}
//         </div>
//     )
// }

// Student.defaultProps = {
//     name:'Guest',
//     age:0,
//     isStudent:false
// }

//destructuring props
const Student = ({name='Guest',age=0,isStudent=false,children}) => {
    
    return (
        <div className="student">
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Student: {isStudent ? 'Yes' : 'No'}</p>
            {children}
        </div>
    )
}


export default Student