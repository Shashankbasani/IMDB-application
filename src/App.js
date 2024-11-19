import logo from './logo.svg';
import './App.css';
import Producst from './products';
import { useState,useEffect } from 'react';
import Banner from './Banner/Banner';
import { BrowserRouter,Route,Switch,Routes, useAsyncError } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import DetailsPage from './Pages/DetailsPage/DetailsPage';
import NotFound from './Pages/NotFound/NotFound';
import Callback from './Callback/Callback';
import { useCallback } from 'react';
import Context from './Context/Context';
import WatchListPage from './WatchListPage/WatchListPage';
import NativeBar from './NavigationBar/NativeBar';
function App() {
 
  let [watchList, setWatchlist] = useState(JSON.parse(localStorage.getItem('MOVIES')));

  function handleToAddWatchlist(MovieObj){
  // Clone the array using the spread operator
  let updatedWatchlist = [...watchList];
  // Now push the new MovieObj to the cloned array
  updatedWatchlist.push(MovieObj);
  // Set the new array as the state
  setWatchlist(updatedWatchlist);
  localStorage.setItem('MOVIES',JSON.stringify(updatedWatchlist))
  }
  
  function deleteFromWatchlist(MovieObj){
   let filteredObj = watchList.filter(movie=>{
    return movie.id !== MovieObj.id;
   })
   setWatchlist(filteredObj);
   localStorage.setItem('MOVIES',JSON.stringify(filteredObj))
  }
   //callBack
  //  const [input,setInput] = useState("");
  //  const [count,setCount] = useState(0);

  //  let inc = useCallback(()=>{
  //   setCount(count+1);
  //  },[count])
   //
  return (
    <div className="App">
      
      {/* <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
      <button onClick={inc}>inc</button>
      <h3>input text:{input}</h3>
      <h3>count: {count}</h3>
      <Callback count={count} func={inc}/> */}
       <BrowserRouter>
       <NativeBar/>
       <Context.Provider value={{watchList,setWatchlist, handleToAddWatchlist, deleteFromWatchlist}}>
          <Routes>
              <Route
                path="/"
                element={<HomePage/>}
              />

              <Route
                path="/details/:id"
                exact={true}
                element={<DetailsPage/>}
              />
              <Route
                path="/watchlist"
                exact={true}
                element={<WatchListPage/>}
              />
              <Route path='*' element={<NotFound/>}/>
            
            </Routes>
    </Context.Provider>
    </BrowserRouter>
    </div>
  );
}

export default App;
