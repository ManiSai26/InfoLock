import React from 'react';
import '../Stylesheet/PopupBox.css';
import {Link, useNavigate} from "react-router-dom";
import Cookies from 'universal-cookie';
import firestore, { app } from "../firebase.config";
import {doc,setDoc,collection,getDoc,deleteDoc} from "firebase/firestore";
const PopupBox = (props) => {
    const navigate = useNavigate();
    const checkData= async ()=>
         {
        const namecookie= new Cookies();
        const name=namecookie.get("name");
        const docRef = doc(firestore, name, props.title);
        const dkey=document.getElementById('dkey').value;
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            // console.log("Document data:", docSnap.data());
            // console.log(docSnap.data().key==dkey);
            if(dkey==docSnap.data().key)
            {
             navigate(`/notepage/?noteid=${props.title}`);
            }  
        } else {
            console.log("No such document!");
        }
        navigate('/dashboard');
         }
    return (
         
        <div className='PopupmainDiv'>
            <div className='PopBox'>
                <div className='PBCloseDiv' onClick={()=>
                {
                    props.setPopup(false);
                    const square =document.getElementById("DBMainDiv");
                    square.style.filter = "none";
                    square.style.height = "auto";
                    square.style.overflow = "auto";
                    square.style.pointerEvents="auto";                    
                }}>
                    <span>X</span>
                </div>
                <div className='PopBoxContent'>
                    <div className='PopupTitle'>
                        <span>Enter the Decryption Key</span>
                    </div>
                    <input id='dkey' className='PopupInput'></input>
               
                        <div className='SubmitButton' onClick={()=>{
                        checkData();
                         }}>
                            <span>submit</span>
                        </div>
                </div>
            </div>
        </div>
     );
}
 
export default PopupBox;