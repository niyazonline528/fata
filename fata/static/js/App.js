import {
    useEffect,
    useState
} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    BrowserRouter,
    Routes,
    useNavigate
} from 'react-router-dom';
import './App.css';

import Dash from "./Dash"
import axios from 'axios';
import Alert from './Alert';




function App() {

    //   axios.post("http://localhost:5051/loginuser",{email:"cpaxyz@gmail.com",password:"cpaxyz"}).then((res)=>{
    //     console.log(res)
    // })
    const [link, setLink] = useState("")
    const [dec, setDec] = useState("")
    // useEffect(()=>{
    //   axios.post("https://codeadmincoderunner.xyz/output",{mesage:"ok"}).then((res)=>{
    //     console.log(res.data)
    //     setLink(res.data)
    //   })

    // },[])
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [reShort, setReShort] = useState(false);
    const [login, setLogin] = useState(true);
    const [loginTrue, setLoginTrue] = useState(true);

    function handleSubmit(event) {

        event.preventDefault();
        console.log(email, password)
        axios.post("https://shoetlld.store/loginuser", {
            email,
            password
        }).then((res) => {
            console.log(res)
            if (res.data.message) {
                sessionStorage.setItem("auth", "ok")
                setReShort(true)
                setLogin(false)
            }
        })
        // Add code here to send the form data to the server, or to process it in some way
    }
    return ( <
        div >

        <
        Dash / >




        <
        /div>

    );
}

export default App;