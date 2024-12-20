import React, { Component } from 'react'

class ErrorBoundary extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        hasError:false
      }
    }
    static getDerivedStateFromError(error) {
      
        return {
            hasError:true
        }
  }  
    render() {
        if (this.state.hasError) {
          return <h1>Something went wrong on server !1</h1>
        }
        else
    return this.props.children
  }
}

export default ErrorBoundary