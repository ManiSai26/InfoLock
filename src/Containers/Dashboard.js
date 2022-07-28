import React,{useState,useEffect} from 'react';
import '../Stylesheet/Dashboard.css';
import Logo from '../media/Logo.svg';
import Plus from '../media/PlusSymbol.svg'
import { Link,useNavigate} from "react-router-dom";
import Cookies from "universal-cookie";
import {collection,getDocs } from "firebase/firestore";
import firestore from "../firebase.config";
import PopupBox from '../Components/PopupBox';
// let notes=[["12/10/2022","Title of Note"],["13/10/2022","Title of Note2"],["14/10/2022","Title of Note3"],["12/10/2022","Title of Note"],["12/10/2022","Title of Note"],["12/10/2022","Title of Note"]];
let notes=[];

const Dashboard = () => {  
    const [popup,setPopup] = useState(false);
    const [key,setKey] =useState('');
    const [title,setTitle]=useState('');
    useEffect(() => {
         getData();
      });
    const [documents, setDocuments = (notes) => {
        documents = notes
    }]=useState([]);
    const navigate = useNavigate();
    const cookie= new Cookies();
    const getData= async ()=>
    {
        const namecookie= new Cookies();
        const name=namecookie.get("name");
        const collectionref =collection(firestore,name);
        const querySnapshot = await getDocs(collectionref);
        if(notes.length===0)
        {
            querySnapshot.forEach((doc) => {
            notes.push(doc.data());
            });
            notes.sort((a,b)=> parseInt(b.date)-parseInt(a.date));
            setDocuments(notes);
        }
    }
    return (
        
        <div onPointerMove={()=>
        {
        const user =cookie.get("user");
        if(!user)
        {
            navigate("/login");
        }
        }}>
            {popup &&(
               <PopupBox title={title} setPopup={setPopup}/>
            )}
            <div id='DBMainDiv'>
                <div className='DBNavMain'>
                    <Link to ='/' className='Links'>
                        <div className='DBNavlogo'>
                            <img src={Logo}/>
                            <span>INFOLOCK</span>
                        </div>
                    </Link>
                    <div className='DBNavLogoutdiv'>
                        <div className='DBNavLogoutBox'>
                            <Link to='/' className='Links'><span>Logout</span></Link>
                        </div>
                    </div>
                </div>
                        <div className='DBBody'>
                <span>Your Notes</span>
                <div className='DBNotes'>
                    {documents.map((test)=>
                    {
                        const date= new Date(parseInt(test.date));
                        const fdate=date.getDate().toString().padStart(2,"0")+'/'+(date.getMonth()+1).toString().padStart(2,"0")+"/"+date.getFullYear();
                        return(
                                // <Link to={{pathname:`/notepage/?noteid=${test.title}`}} style={{textDecoration: 'none'}}>
                                    <div className='DBNoteBox'onClick={()=>{
                                        setPopup(true);
                                        setTitle(test.title);
                                        const square =document.getElementById("DBMainDiv");
                                        square.style.filter = "blur(6px)";
                                        square.style.height = "100vh";
                                        square.style.overflow = "hidden";
                                        square.style.pointerEvents="none";
                                    }}>
                                        <div className='DBNoteHead'>
                                            <span>{fdate}</span>
                                        </div>
                                        <div className='DBNotedesc'>
                                            <span>{test.title}</span>
                                        </div>
                                    </div>
                                // </Link>
                        );
                    })}
                    <Link to='/notepage' className='DBlink'>
                        <div className='DBPlusBox'>
                            <div className='DBPluslogo'>
                                <img src={Plus}/>
                            </div>
                            <div className='DBNotedesc'>
                                <span>Add</span>
                            </div>
                        </div>
                    </Link>
                </div>
                        </div>
            </div>
            
        </div>
     );
}
 
export default Dashboard;