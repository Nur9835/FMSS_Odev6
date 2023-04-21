import React, { useEffect, useState } from "react";
import { useBook } from "../../context/BooksContext";

const SearchBook = () => {

const {setSearchBookName,setFilter,setOrderBy,setPrintType }= useBook();
 // const [searchedBook, setSearchedBook] = useState();

  const handleSubmit = (e) => {
   e.preventDefault();//sayfa refresh önlemek için
  //  form submit olduğunda kullanıcının seçtiği filtreli değerler set ediliyor
   setSearchBookName(initialValues.searchBook);
   setFilter(initialValues.filter);
   setPrintType(initialValues.printType);
   setOrderBy(initialValues.orderBy);
  //  localStorage'e depolanması için en son aratılan kitap adını set ederiz
   localStorage.setItem("book", initialValues.searchBook);
  };


  const [initialValues, setInitialValues] = useState({
    searchBook: "",
    filter: "full",
    startIndex: 0,
    maxResults: 40,
    printType: "all",
    orderBy: "relevance",
  });
  

 useEffect(() => {
//console.log("localStorage" , localStorage.getItem("book")) ; 
const localBook=localStorage.getItem("book");
if(localBook) setSearchBookName(localBook)
//submit etmeye gerek kalmadan filtreleme yapıldığında 
// sonuçların getirilmesi için  initialValues deki değerler set edilir
setFilter(initialValues.filter);
setPrintType(initialValues.printType);
setOrderBy(initialValues.orderBy);
 }, [initialValues.filter,initialValues.printType,initialValues.orderBy]);


// mevcut formda kullanacağımız classların cssleri
  const classes = {
   inputClass:  " border rounded w-full py-3 px-3 text-tBrown leading-tight focus:outline-none focus:shadow-outline",
   labelClass: "block text-wood  uppercase text-l text-center  font-extrabold mb-3",
   sublabelClass:"text-wood  font-extrabold  uppercase text-center py-4 md:text-5xl  ",
   selectClass :"block   py-3 px-4 pr-8  appearance-none w-full bg-white border border-gray-300  rounded shadow leading-tight focus:outline-none focus:shadow-outline hover:border-gray-500 px-4 py-2 pr-8",
   searchClass:"text-black border-2 border-text-black border-black bg-wood  border-double font-extrabold text-center text-sm  py-4 px-6",
   divClass:"relative    inline-block w-32",
    
  };



  return (
    <div className="max-w-6xl  mx-auto max-[1279px]:pt-[22%] ">
     <h1 className={classes.sublabelClass}>
     Book Search App
    </h1>
  <form
      className="flex flex-col  md:mx-0"
      onSubmit={handleSubmit}
    >
<div class="flex flex-col items-center p-5">
      <div className="flex items-center justify-between flex-wrap md:flex-nowrap"> 
        <div className= {" pr-5 flex-auto w-full md:w-fit" }  > 
          <label className={classes.labelClass} htmlFor="Search">
            Search Book
          </label> 
          <input
            onChange={(e) =>
              setInitialValues({ ...initialValues, searchBook: e.target.value })
            }
            value={initialValues.searchBook}
            className={classes.inputClass}
            required
            type="text"
            name="text"
            placeholder="Book Title..."
          />
        </div>

        <div className={classes.divClass}>
       <label className={classes.labelClass} htmlFor="filter">
            Filter       
         </label>
      <div className={classes.divClass}>   
  <select   
   value={initialValues.filter}
  onChange={(e) =>
    setInitialValues({ ...initialValues, filter: e.target.value })
  }
  name="filter"
 className={classes.selectClass}>
            <option value="partial">Partial</option>
            <option value="full">Full</option>
            <option value="free-ebooks">Free Ebooks</option>
            <option value="paid-ebooks">Paid Ebooks</option>
            <option value="ebooks">Ebooks</option>
  </select>
  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
      <path d="M7 10l5 5 5-5z" />
    </svg>
  </div>
  <span class="absolute top-0 right-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
    <i class="fas fa-caret-down"></i>
  </span>
</div>
        </div>




        <div className={classes.divClass}>
<label className={classes.labelClass} htmlFor="printType">
Print Type
          </label>
        <div className={classes.divClass}>
      
  <select   
  value={initialValues.printType}
   onChange={(e) =>
    setInitialValues({
      ...initialValues,
      printType: e.target.value,
    })
  }
  name="printType"
 className={classes.selectClass}>
              <option value="all">All</option>
            <option value="books">Books</option>
            <option value="magazines">Magazines</option>
  </select>
  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
      <path d="M7 10l5 5 5-5z" />
    </svg>
  </div>
  <span class="absolute top-0 right-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
    <i class="fas fa-caret-down"></i>
  </span>
</div>
        </div>
        <div className={classes.divClass}>
<label className={classes.labelClass} htmlFor="orderBy">
Order By
          </label>
        <div className={classes.divClass}>
      
  <select   
        value={initialValues.orderBy}
   onChange={(e) =>
    setInitialValues({
      ...initialValues,
      orderBy: e.target.value,
    })
  }
  name="orderBy"
 className={classes.selectClass}>
            <option value="relevance">Relevance</option>
            <option value="newest">Newest</option>
  </select>
  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
      <path d="M7 10l5 5 5-5z" />
    </svg>
  </div>
  <span class="absolute top-0 right-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
    <i class="fas fa-caret-down"></i>
  </span>
</div>
  </div>
</div>

<br/>
<br/>
     <div className=" py-5 m-10" >
        <button className={classes.searchClass}
        >SEARCH BOOK  </button>
      </div>

</div>

    </form>
  </div>

  );
};

export default SearchBook;
