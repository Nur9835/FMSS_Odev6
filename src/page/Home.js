import React from "react";
import { useBook } from "../context/BooksContext";
import { VscLoading } from 'react-icons/vsc';
import { Link } from "react-router-dom";
import background from "../img/page.jpg";
import background2 from "../img/homebackground.jpg";
import SearchBook from "../components/SearchBook";


const Home = () => {
  const { bookList, loading } = useBook();
  return (
    <>
    <div
    className=" !bg-cover max-[600px]:h-[800px] max-[768px]:h-[700px] xl:p-40  sm:p-0"
    style={{  
      background: `url(${background2})`,    
    }}
  >
    <SearchBook />
  </div>
    <div style={{  
      background: `url(${background})`,    
    }}>
      <div className="flex flex-wrap justify-center  gap-6">
        {!loading ? (
          bookList ? (
            bookList.map((book) => (
              <div
                key={book.id}
                className="w-full p-2 md:w-1/2 lg:w-1/3 xl:w-1/4 "
              >
                <div
               
   className="flex flex-col overflow-auto  ml-5 items-center 
    border border-green rounded-lg shadow md:flex-row 
    md:max-w-xl  "
                >
                  {
                    <img
                      className="object-cover w-full rounded-t-lg h-80 md:h-80 md:w-48 md:rounded-none md:rounded-l-lg"
                      src={
                        book.volumeInfo.imageLinks
                          ? book.volumeInfo.imageLinks.thumbnail
                          : "https://via.placeholder.com/150"
                      }
                      alt={book.volumeInfo.title}
                    />
                  }

                  <div className="flex flex-col space-y-4 justify-between p-4 leading-normal w-full">
                    <h5 className=" text-xl font-bold tracking-tight border-b-2 text-black ">
                      {book.volumeInfo.title}
                    </h5>

                    <p className="mb-3 text-black font-bold text-l">
                      {book.volumeInfo.authors?.join(", ")}
                    </p>

                    <div className="flex  ">
                    <Link  to={`/detail/${book.id}`}>        
               <button className="mx-2  px-2 text-sm  border-double font-extrabold   border-2 border-text-black border-green  text-center py-2">
                      DETAILS
                      </button>
                       </Link>
                    </div>

                    

                  </div>
                  
                </div>
              </div>
            ))
          ) : (
            <h1 className="flex text-5xl !content-normal">
             Aradığınız kriterlere uygun kayıt bulunamamaktadır...
         
            </h1>
          )
        ) : (
          <div className="flex text-5xl content-normal">
            <VscLoading className="animate-spin  size={32} " /> 
        
          </div>
        )}
      </div>
    </div>
    </>
  );
};

export default Home;
