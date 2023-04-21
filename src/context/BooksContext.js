import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";

const BookContext = new createContext();

export const BookProvider = ({ children }) => {
  const [bookList, setBookList] = useState([]);
  // filtreli alanların default değerleri
  const [printType,setPrintType]=useState("all");
  const [orderBy,setOrderBy]=useState("relevance");
  const [filter,setFilter]=useState("full");
  const [loading, setLoading] = useState(false);
  // aranan kitap adını tutar 
  const [searchBookName, setSearchBookName] = useState("");

  // Google Books'da oluşturduğum API_KEY:
  const API_KEY = "AIzaSyCs4yLoDJ6K1zdJwk9V1I8HXsmF_q3F2vs"
   const fetchBooks = async () => {    
    try {
      setLoading(true); 
      if (searchBookName) {
        const response  = await axios.get(       
// apide maxresult değeri max 40 verildiği için 40 atadım.
   `https://www.googleapis.com/books/v1/volumes?q=${searchBookName}&maxResults=40&startIndex=0&printType=${printType}&orderBy=${orderBy}&filter=${filter}&key=${API_KEY}`

        );
        setBookList(response .data.items); 
      }
    } catch (error) {
      console.error(error); 
    } finally {
      setLoading(false);
    }
  };
    const values = {
      bookList,
      loading,
      setLoading,
      setBookList,
      searchBookName,
      setSearchBookName,
      orderBy,
      setOrderBy,
      filter,
      setFilter,
      printType,
     setPrintType,
    };
  

  useEffect(() => {
    fetchBooks();
  }, [searchBookName,printType,filter,orderBy]); 

  return <BookContext.Provider value={values}>{children}</BookContext.Provider>;
};

export const useBook = () => useContext(BookContext);
