import { useEffect, useState } from "react";

export default function OutsideClick(ref) {
    const [isClicked, setIsClicked] = useState(true);
    
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsClicked(()=>!isClicked);
      
        } else {
          
        }
      }
    
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
      return isClicked;
    }