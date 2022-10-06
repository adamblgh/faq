import React from 'react';
import { motion } from "framer-motion";
import { useState } from 'react';
import Button from "react-bootstrap/Button";

export const Questions=({data,setData})=> {
  return (
    <>
    <div className="row justify-content-space-between">
        {data.map((obj)=>(
        <h5>{obj.title}</h5>
        <motion.span  whileHover={{ scale: 1.3 }}>
          <Button id={obj.id} size="small" color="primary">
          +
        </Button>
        </motion.span>
    ))}
        
    </div>
    </>
  )
}
