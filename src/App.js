import { Component } from "react"
import "./App.css"
import Header from "./Components/Header"
import ListDisplay from "./Components/ListDisplay"

class App extends Component {
  constructor() {
    super()
    this.state = {
      username: "Matt",
      todoList: ["Code the things", "Eat", "Sleep"],
    }
  }

  render() {
    return (
      <section>
        <Header />
        <ListDisplay />
      </section>
    )
  }
}

export default App
