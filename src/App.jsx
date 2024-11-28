// import Card from './components/Card'
// import {Button} from './components/Button/Button'

import { ToDoList } from "./components/ToDoList"

// import { ArrayOfObjects } from "./components/ArrayOfObjects"
// import { StateArray } from "./components/StateArray"

// import { StateObject } from "./components/StateObject"

// import ButtonClick from "./components/ButtonClick"
// import ChangeEvent from "./components/ChangeEvent"
// import { ColorPicker } from "./components/ColorPicker"
// import { UpdaterFunction } from "./components/UpdaterFunction"
// import { Counter } from "./components/Counter"
// import { List } from "./components/List"
// import MyComponent from "./components/MyComponent"
// import { ProfilePicture } from "./components/ProfilePicture"

// import { UserGreetings } from "./components/Button/UserGreetings"

// import Student from "./components/Student"

// import StyleSheet from "./components/StyleSheet"

// import {Button1} from './components/Button1'
function App() {
  const fruits = [
       { id:1,name: "Apple", calories: 50 },
        { id:2,name: "Orange", calories: 20 },
        { id:3,name: "Banana", calories: 110 },
        { id:4,name: "Coconut", calories: 40 },
        { id:5,name: "Pineapple", calories: 22 } 
  ]
  const vegetables = [
        { id:6,name: "Potatoes", calories: 50 },
        { id:7,name: "Carrots", calories: 20 },
        { id:8,name: "Brinjal", calories: 110 },
        { id:9,name: "Corn", calories: 40 },
        { id:10,name: "Tomato", calories: 22 }
  ]
  
  return (
    <>
      {/* <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/> */}
      {/* <Button/> */}
      {/* <Button1 /> */}
      {/* <StyleSheet primary={false} />
      <Student name="Ravi" age={30} isStudent={ false} />
      <Student name="Shravya" age={22} isStudent={false}>
        <p>This is children props</p>
        <h2>This is testing</h2>
      </Student>
      <Student name="Pradeep" age={32} isStudent={ true} />
      <Student name="FATHIMA" age={100} isStudent={false} >
        <button>Click me</button>
      </Student>
      <Student name="Feroz" age={30} />
      <Student name="Rizwan" age={30} isStudent={true}>
        <input placeholder="Enter your data"/>
       </Student> */}
      {/* <UserGreetings userName="Fathima" isLoggedIn={true} /> */}
      {/* {
        fruits.length > 0 && <List items={fruits} category="Fruits" />
      }
      {
        vegetables.length > 0 && <List items={vegetables} category="Vegetables" />
      } */}
      {/* <ButtonClick/> */}
      {/* <ProfilePicture/> */}
      {/* <MyComponent/> */}
      {/* <Counter/> */}
      {/* <ChangeEvent/> */}
      {/* <ColorPicker/> */}
      {/* <UpdaterFunction/> */}
      {/* <StateObject/> */}
      {/* <StateArray/> */}
      {/* <ArrayOfObjects/> */}
      <ToDoList/>
    </>
    
  )
  
}

export default App
