import React, { useEffect,useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import sefiller from '../img/sefiller.jpeg';

function Books() {
  const [books,setBooks] = useState([]);

  useEffect(()=>{
    const fetchAllBooks = async () =>{
      try{
        const res = await axios.get("http://localhost:8800/books");
        setBooks(res.data);
      }catch(err){
        console.log(err);
      }
    }
    fetchAllBooks();
  },[])
  return (
    <div>
      <h2>BOOK SHOP</h2>
        <div className='books'>
      {books.map(book =>(
        <div className='book' key={book.id}>
            {book.cover && <img src={sefiller} alt="" />}
            <h2>{book.title}</h2>
            <p>{book.desc}</p>
            <span>${book.price}</span>
            <div className='buttons'>
              <button className='delete-button'>Delete</button>
              <button className='update-button'>
                <Link to="/update" style={{textDecoration: 'none'}}>
                  Update
                </Link>
              </button>
            </div>
        </div>
      ))}
      </div>

      <button className='add-button'>
        <Link to="/add" style={{textDecoration: 'none',color:"white",fontSize:"18px"}}>
          Add New Book
        </Link>
      </button>

    </div>
  )
}

export default Books