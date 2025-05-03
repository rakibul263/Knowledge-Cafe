import './App.css'
import Navbar from './components/navbar/Navbar'
import Blogs from './components/Blogs/Blogs'
import { useState } from 'react'


function App() {
  const [bookMarked, setBookMarked] = useState([]);
  const [readingCount, setReadingCount] = useState(0);

  const handelBookMark = (blog) => {
    // console.log(blog);
    setBookMarked([...bookMarked, blog]);
  }

  const handelMarkAsRead = (time, id) => {
    setReadingCount(readingCount+time);
    console.log(id);
    handelRemoveFromBookMark(id);
  }

  const handelRemoveFromBookMark = (id) => {
    const remainingBookmark = bookMarked.filter((mark) => mark.id != id);
    // console.log(remainingBookmark);
    setBookMarked(remainingBookmark);  
  }
  // console.log(readingCount);
  // console.log(bookMarked);
  return (
    <>
      <Navbar></Navbar>

      <div className="main-container flex text-center">
        <div className="left-container w-[70%]">

          <Blogs handelMarkAsRead={handelMarkAsRead} handelBookMark={handelBookMark}></Blogs>
        </div>
        <div className="right-container w-[30%] border-2 rounded-3xl text-red-600">
          <div className='text-2xl'>
            <h1>Reading Time : {readingCount}</h1>
            <h1>Bookmark Count : {bookMarked.length}</h1>
          </div>
          {
            bookMarked.map((marked)=> <p key={marked.id} className='bg-red-400 p-2 shadow-2xl m-3 border-2 rounded-3xl text-white font-bold'>{marked.title}</p>)
          }

        </div>
      </div>
    </>
  )
}

export default App
