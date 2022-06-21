import React, { useState } from "react";

// import ReactDOM from "react-dom";
// import Head from 'next/head';
// import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  // const [movies,setMovies]=useState("set");
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");

  const taskSearchValueChange = (val) => {

      setSearch(val);
      // console.log(search);
  };

  const taskValueSearch = async (e) => {
      e.preventDefault();
      // console.log(e);
      const link = `http://www.omdbapi.com/?s=${search}&apikey=a3a5cd9b`;
      // console.log(link);
      // to fetch url;
      const fetched_url = await fetch(link);
      //to visualze data ;
      const data = await fetched_url.json();
      setTasks(data.Search);
      console.log(tasks);
  }
  // const movieDetails=() => {

  // }

  return (
      <>
          <div className="center">
              <h1 className="Heading_style">Movies</h1>
              {/* <input type="text" value={movies} onChange={(e) => taskValueChange(e.target.value)} /> */}
              {/* <button type="button" onClick={() => addTask()} >Insert Movie name</button> */}
              <br></br>
              <br></br>
              <input type="text" value={search} onChange={(e) => taskSearchValueChange(e.target.value)} placeholder="Enter the Movie Name" id="input_box_style" />
              <button type="button" onClick={taskValueSearch} >Search</button>
              {/* onClick={() => taskValueSearch()} */}
          </div>
          <br>
          </br>
          <h3 className="Heading_style"> Results found for "{search}"</h3>
          <br>
          </br>
          <div>
              
                <>
                  <div>
                  {tasks.map(task => (
                  <div >
                    <img src={task.Poster} alt='Movie' className="image_style" ></img>
                    {/* onClick={movieDetails}  */}

                    {/* <div onClick={() => } */}
                  </div>
                  ))}
                  </div>
                  {/* heloo comment */}
                  {/* hdfhvxc */}
                  </>
          </div>
      </>
  );
}