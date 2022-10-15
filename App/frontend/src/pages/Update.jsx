import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

function Update() {
  const [book,setBook] = useState({
    title:"",
    desc:"",
    price:null,
    cover:""
  });

  const navigate = useNavigate();
  const location = useLocation();

  const bookId = location.pathname.split("/")[2];

  const handleChange = (e) =>{
    setBook(prev => ({...prev,[e.target.name] : e.target.value}));
  }

  const handleClick = async (e) => {
    e.preventDefault();
    try{
      await axios.put("http://localhost:8800/books/"+bookId,book);
      navigate('/');
    }catch(err){
      console.log(err);
    }
  }
  return (
    <div className='form'>
    <h1>Update The Book</h1>
    <input type="text" placeholder="title" name="title" onChange={handleChange} />
    <input type="text" placeholder="desc" name="desc" onChange={handleChange} />
    <input type="number" placeholder="price" name="price" onChange={handleChange} />
    <input type="text" placeholder="cover" name="cover" onChange={handleChange} />
    <button onClick={handleClick}>Update</button>
  </div>
  )
}

export default Update