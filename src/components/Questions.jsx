import React from "react";
 
import { Answers } from "./Answers";
 
export const Questions=({data,setData})=>{
    return(
        <div className="row justify-content-between">
                 {data.map((obj)=>(
                    <Answers key={obj.id} title={obj.title} info={obj.info} />
 
             ))}
 
        </div>
    )
}
