// import React from 'react'
// import Navbar from './components/Navbar'
// import Footer from './components/Footer'
// import Card from './components/Card'
// import Ex from './components/Ex'
// import Ex2 from './components/Ex2'

// const App = () => {
//   const users = [
//     { name: "John", age: 25, city: "NYC" },
//     { name: "Jane", age: 30, city: "LA" },
//     { name: "Mike", age: 28, city: "Chicago" },
//     { name: "Sarah", age: 22, city: "Miami" },
//     { name: "Alex", age: 35, city: "Seattle" }
//   ];
//   return (
//     <>
//       <div>
//         <div className='p-10'>
//           {users.map(function(users){
//             return <h1>{users.name} {users.age} {users.city}</h1>;
//           })}

//         </div>
//       </div>
//       <Ex name="tanmeet" />
//       <Ex2 user="tanmeet2" />
//     </>
//   )
// }

// export default App

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const App = () => {
//   const [data, setdata] = useState([]);
//   const getData = async () => {
//     const response = await axios.get("https://picsum.photos/v2/list");
//     setdata(response.data);
//   };


//   useEffect(() => {
//     getData()
//   }, [])
  
//   return (
//     <div>
//       <div className="bg-blue-950">
//         {data.map(function(elem,idx){
//           return <div key={idx} className="bg-white text-black flex items-center p-20 rounded m-20">
//             <h1>{idx}</h1>
// <img className="h-60" src={elem.download_url} alt="" />
// <h1>{elem.author}</h1>
//           </div>
//         })}
//       </div>
//     </div>
//   );
// };

// export default App;


import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Header from './components/Header.jsx'
import Product from './pages/Product.jsx'
import Usercontext, { DataContext } from './context/Usercontext.jsx'

const App = () => {

  const data = useContext(DataContext);
  return (
    <div>
      {/* <Header /> */}
      {/* <Routes> */}
        {/* <Route path='/' element={<Home />}></Route>
        <Route path='/product' element={<Product />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route> */}
      {/* </Routes> */}
      <h1>this is app {data}</h1>
    </div>
  )
}

export default App
