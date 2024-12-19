// import Card from './components/Card'
// import {Button} from './components/Button/Button'

import { useState } from "react"
// import { Modal } from "./components/Modal"

import { Hero } from './components/Hero'
import ErrorBoundary from "./components/ErrorBoundary"
import DocTitleOne from "./components/DocTitleOne"
import DocTitleTwo from "./components/DocTitleTwo"
// import PortalDemo from "./components/PortalDemo"

// import GreetParent from "./components/GreetParent"

// import FRParentComponent from "./components/FRParentComponent"
// import StopWatch from "./components/StopWatch"

// import { ComponentD } from "./components/ComponentD"
// import { ComponnetA } from "./components/ComponnetA"
// import { RefComponent } from "./components/RefComponent"
// import { RefComponentFocus } from "./components/RefComponentFocus"

// import { DigitalClock } from "./components/DigitalClock"

// import { PostForm } from "./components/PostForm"

// import { PostList } from "./components/PostsList"
// import { DataFetching } from "./components/DataFetching"

// import { EffectComponent } from "./components/EffectComponent"

// import { ToDoList } from "./components/ToDoList"

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
  const [showModal, setShowModal] = useState(false)
  const handleShowMessageClick = () => {
    setShowModal(true)
  }
  const handleCloseModal = () => {
    setShowModal(false)
  }
  return (
    <>
    {/* <ErrorBoundary>
      <Hero heroName="Batman" />
    </ErrorBoundary>
    <ErrorBoundary>
      <Hero heroName="Superman" />
     </ErrorBoundary>
    <ErrorBoundary>
      <Hero heroName="Joker" />
      </ErrorBoundary> */}
      <DocTitleOne/>
      <DocTitleTwo/>
      </>
  )
}

export default App
