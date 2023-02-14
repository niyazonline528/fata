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

    return (<
        div >

        <
            Dash />




        <
        /div>

        );
}

        export default App;