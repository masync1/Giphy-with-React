import React, { useState,Fragment} from 'react'
import { AddCategory } from "./AddCategory";
import { GifGrid } from "./GifGrid";
import { Menu } from "./Navbar";
import {Container} from "react-bootstrap"

const GifExpertApp = () =>{
    const [categories, SetCategories] = useState(['Naruto']);
  
    return(
        <Fragment>
            <Menu/>        
        <Container >
            
            <AddCategory SetCategories= {SetCategories}/>
            <hr/>

         
               {
                   categories.map((list) =>(
                      <GifGrid
                      key= {list}
                      list= {list}
                      />
                               
                ))}
      
        </Container>
        </Fragment>
    )
}


export default GifExpertApp