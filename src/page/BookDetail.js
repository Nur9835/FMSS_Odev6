import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useBook } from "../context/BooksContext"
import background from "..//img/page.jpg";

const BookDetail = () => {
  const [bookDetail, setBookDetail] = useState({});
  const { loading, setLoading } = useBook();
  const { id } = useParams();

  //  kitap detayları apiden çekilir
  useEffect(() => {
    const fetchBook = async () => {
      try {
        setLoading(true);
        await axios(`https://www.googleapis.com/books/v1/volumes/${id}`).then(
          (res) => {
            setBookDetail(res.data); 
          }
        );
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchBook();
  }, [id, setLoading]); // id ve setLoading değiştiğinde useEffecti tekrar çağır

  return (
    // Kitap detaylarını ekrana yazdır

    <div      style={{  
      background: `url(${background})`,    
    }}>
    <div className="min-h-screen w-screen flex flex-col  items-center">
      {!loading ? 
      (
        bookDetail && bookDetail.volumeInfo ? (

          <div className="p-5  shadow-lg w-9/12">
          
            <a
          href="/"
          className="flex items-center space-x-2  px-4 py-2 rounded transition duration-150"
          title="Return Home"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span>HOME PAGE</span>
        </a>


            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-6">
             
              <div className="flex-shrink-0">
                <img
                  src={
                    bookDetail.volumeInfo.imageLinks
                      ? bookDetail.volumeInfo.imageLinks.thumbnail
                      : "https://via.placeholder.com/150"
                  }
                  alt={bookDetail.volumeInfo.title}
                  className="w-72 h-96 rounded-md shadow-lg object-contain"
                />
              </div>


              <div className="flex-1 flex flex-col gap-y-4 text-center md:text-left">
    
              <p className=" text-3xl font-bold uppercase"> 
                  {bookDetail.volumeInfo.title}        
                </p>
             
                <p className=" text-2xl font-bold uppercase"> 
                  {bookDetail.volumeInfo.subtitle}
                </p>

                <p className="text-xl leading-relaxed uppercase">  
                 {bookDetail.volumeInfo.description}  </p>
                <br/>

                <p className=" text-xl font-bold uppercase"> 
                Author(s) :&nbsp;
                  {bookDetail.volumeInfo.authors
                    ? bookDetail.volumeInfo.authors.join(", ")
                    : "Yazar Bilgisi Mevcut Değil"}
                </p>


                    <p className="text-xl font-bold  uppercase"> 
                    Published Date:&nbsp;
                      {bookDetail.volumeInfo.publishedDate
                        ? bookDetail.volumeInfo.publishedDate
                        : "Çıkış Tarihi Mevcut Değil"}
                    </p>
                
             
                    <p className="text-xl font-bold  uppercase"> 
                      Page Count:&nbsp;
                      {bookDetail.volumeInfo.pageCount
                        ? bookDetail.volumeInfo.pageCount
                        : "Sayfa Sayısı Mevcut Değil"}
                    </p>

                    <p className="text-xl font-bold  uppercase"> 
                      Language:&nbsp;  
                            {bookDetail.volumeInfo.language
                        ? bookDetail.volumeInfo.language
                        : "Dil Mevcut Değil"}

                    </p>             
               <a
              href={bookDetail.volumeInfo.previewLink}
              className=""
              >
         <button className=" text-sm py-2 px-2 border-double font-extrabold   border-2 border-text-black border-green">
                PREVIEW
             </button>

            </a>
              </div>

            </div>
          </div>


        ) : (
          <div className="min-h-screen w-screen  flex flex-col items-center">
            <p>Kitap detayı mevcut değil...</p>
            <a
              href="/"
              className="flex items-center space-x-2  px-4 py-2 rounded transition duration-150"
              title="Return Home Page" 
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span>HOME PAGE</span>
            </a>
          </div>
        )
      ) : (
        <div className="flex">

        </div>
      )}
    </div>
</div>

  );
};

export default BookDetail;
