import react ,{useState}from "react";
import Book from "./book";
import axios from "axios";
const Main=()=>{
    const [search,setSearch]=useState("");
    const [bookData,setData]=useState([]);
    const searchBook=(evt)=>{
        if(evt.key==="Enter")
        {
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU'+'&maxResults=40')
            .then(res=>setData(res.data.items))
            .catch(err=>console.log(err))
        }
    }
    return(
        <>
             <div className="main">
            <div className="header">
                <div className="row2">
                    <img src="http://cdn.shopify.com/s/files/1/0042/4673/2846/products/OA-137_Dark_Wood_Faux_Paneling_DARKWOODFAUXPANELING_1024x.jpg?v=1600380770" alt="" width="1500px" height="150px"/>
                    <h1>BOOK SEARCH</h1>
                    <div className="search">
                        <input type="text" placeholder="Enter Your Book Name"
                        value={search} onChange={e=>setSearch(e.target.value)}
                        onKeyPress={searchBook}/>
                        <button className="button"><img src="https://www.freeiconspng.com/thumbs/search-icon-png/search-icon-png-21.png" width="60px" height="40px" alt=""/></button>
                    </div>
            
                </div>
            </div>


            <div className="container">
              {
                    <Book book={bookData}/>
              }  
            </div>
            </div>
        </>
    )
}
export default Main;