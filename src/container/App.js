import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import "./App.css"

import { setSearchField } from '../actions'

const mapStateToProps = (state) => {
    return {
        searchField: state.searchRobots.searchField
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value))
    }
}

function App({ store }) {

    const [robots, setRobots] = useState([])
    const [searchfield, setSearchfield] = useState('')

    //Runs when function is called --- Similar to Beginplay in game engines
    useEffect(() => {
        console.log(store.getState())
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(users => setRobots(users));
    }, []) //only run once

    const onSearchChange = (event) => {
        setSearchfield(event.target.value)
    }

    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })

    if (robots.length === 0) {
        return <h1>Loading...</h1>
    }
    else {
        return (
            <>
                <div className="tc">
                    <h1 className="f2">Robo Friends</h1>
                    <SearchBox searchChange={onSearchChange} />
                    <CardList robots={filteredRobots} />
                </div>
            </>
        )
    }


}

export default connect(mapStateToProps, mapDispatchToProps)(App);