import React from "react";
import SearchBar from "../../components/SearchBar";
import Table from "../../components/Table";
import API from "../../utils/API"

class Main extends React.Component {
    state = {
        employees: [],
        word: ""
    }

    componentDidMount() {
        this.randomEmployees()
    }

    randomEmployees = () => {
        API.getUsers()
            .then(res => this.setState({employees: res.data.results}))
    }

    searchVal = (e) => {
        console.log(e.target.value)
        this.setState({word: e.target.value})
    }

    render() {
        return(
            <>
                {/* <h1>Hello, {this.state.word}</h1> */}
                <SearchBar searchFn = {this.searchVal}/>
                <Table employees={this.state.employees}/>
            </>
        )
    }
}

export default Main;