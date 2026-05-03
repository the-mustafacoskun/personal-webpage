

import { useEffect, useState } from 'react'

export const useLocalStorage=(key,defaultValue)=> {
    const [value,setValue] =useState(()=>{
        const savedValue=localStorage.getItem(key);
        if(savedValue !==null){
            try {
                return JSON.parse(savedValue);
            } catch {
                return savedValue;
            }
        }
        return defaultValue;
    });
    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(value));
    },[key,value])
    return [value,setValue]
}


