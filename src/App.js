import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import { combineReducers, createStore } from '@reduxjs/toolkit'
import { TvShows } from "components/TvShows"
import { Details } from "components/Details"
import { comments } from "reducers/comments"

// Variable combining reducers from comments
const reducer = combineReducers({ comments: comments.reducer })

// Creates the store using reducers and the retrieved state
const store = createStore(reducer/* , persistedState */)


export const App = () => {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <TvShows/>
          </Route>
          <Route path="/shows/:showId">
            <Details/>
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}
