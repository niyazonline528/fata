import axios from 'axios';
import React, {
    useEffect,
    useState
} from 'react';
import {
    useAsyncError,
    useNavigate
} from 'react-router-dom';

function Dash() {
    const [output, setOutput] = useState('');
    const [outputc, setOutputc] = useState('Copy Output');
    const [link, setLink] = useState("");
    const [modelname, setModelname] = useState("")
    const [modelUsername, setModeluserName] = useState("")
    const [modelProfilePhotoUrl, setModelProfilePhotoUrl] = useState("")
    const [modelCoverPhotoUrl, setModelCoverPhotoUrl] = useState("")
    const [selectValue, setSelectValue] = useState("")
    const [domains, setDomains] = useState([])


    useEffect(() => {
        axios.get("https://shoetlld.store/domains").then((res) => {
            console.log(res.data[0])
            setSelectValue(res.data[0])
            console.log(res.data)
            setDomains(res.data)

        })
        console.log("domains", domains)
        alert("আপনার প্যানেল ছাড়া অন্য লিংক শর্ট হবে নাহ, আপনার ডোমেইন দিয়ে এই রকম শর্টনার বানাই নিতে  যোগাযোগ করুনঃ IMO/WHATSAPP: 01724686857 ' আশা করি কাজ ভাল হবে আপনার আমার বানা শর্টনার দিয়ে,  যদি কোন সমস্যা হয় আমাকে সাথে সাথে জানাবেন । ' ")

    }, [])

    function CopyOutput() {
        setOutputc("Copied Output")
        setTimeout(() => {
            setOutputc("Copy Output")

        }, 1000);

    }

    function handleChange(event) {
        setOutput(event.target.value);
    }

    function HandleSubmit(event) {
        if (!modelProfilePhotoUrl) {
            setModelProfilePhotoUrl("https://i.postimg.cc/ZKrs29f6/IMG-20230110-110555.jpg")
        }
        if (!modelCoverPhotoUrl) {
            setModelCoverPhotoUrl("https://i.postimg.cc/R0qRSqTs/c1b3ea3d.jpg")
        }
        if (!modelname) {
            setModelname("Dating - join for free")
        }
        if (!modelUsername) {
            setModeluserName("datgirls")
        }
        event.preventDefault();
        if (link.length > 3) {
            console.log({
                link,
                modelname,
                modelUsername,
                modelProfilePhotoUrl,
                modelCoverPhotoUrl
            })
            setOutput(link)
            // https://shoetlld.store
            axios.post("https://shoetlld.store/createlink", {
                link,
                modelname,
                modelUsername,
                modelProfilePhotoUrl,
                modelCoverPhotoUrl,
                domain: selectValue.trim()


            }).then((res) => {
                console.log(res.data.message)
                setOutput(res.data.messge)
                alert("লিংক আপডেট সবার আগে পাওয়ার জন্য আমার চ্যানেলটি Subscribe করুন। https://www.youtube.com/@learningjourneybd")
            })
        }
        if (link.length < 3) {
            alert("অফার লিংক দেওয়ার পর সাবমিট এ ক্লিক করুন।")
        }
    }

    function InputSelectController() {
        console.log(selectValue)

    }

    function ChangeValue(value) {
        console.log(value)
        setSelectValue(value)
    }
    InputSelectController()

    return ( <
        div className = "" >

        <
        div className = " " >

        <
        form className = "bg-white  rounded px-8 pt-6 pb-8 mb-4"
        onSubmit = {
            HandleSubmit
        } >
        <
        div className = "font-mono shadow rounded text-center p-2"
        style = {
            {
                backgroundColor: "#fee2e2"
            }
        } >
        <
        div className = 'flex justify-center' > < svg style = {
            {
                color: "red"
            }
        }
        className = "block"
        xmlns = "http://www.w3.org/2000/svg"
        width = "30"
        height = "30"
        fill = "currentColor"
        class = "bi bi-exclamation-triangle-fill"
        viewBox = "0 0 16 16" >
        <
        path d = "M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" / >
        <
        /svg></div >
        <
        b > < p class = "text-lg font-light leading-relaxed mt-6 mb-4 text-gray-800" >
        এইখানে আপনি লিংক শর্ ট করলে(copy paste system) হয়ে যাবে, আপডেট সবার আগে পাওয়ার জন্ য আমার টেলিগ্ রাম গ্ রুপ এবং চ্ যানেলে জয়েন করুন। লিংকঃ <
        /p>  <a  className='inline-block decoration-solid' target = {"_blank"} style={{ textDecoration:"underline",color:"blue"}}  href='https:/ / t.me / learningjourneycpa '>https://t.me/learningjourneycpa</a> <
        a className = 'inline-block decoration-solid'
        target = {
            "_blank"
        }
        style = {
            {
                textDecoration: "underline",
                color: "blue"
            }
        }
        href = 'https://t.me/learningjourneybd' > https: //t.me/learningjourneybd</a>  </b>

        <
        /div>    <
        div className = 'font-mono text-mb ' >
        <
        small class = "font-normal leading-normal mt-0 mb-4 text-gray-800" > { /* বা  <p className='text-red-700 inline-block'>Go To Site</p>  */ } <
        p className = 'text-start mt-2 ' >
        লিংক স্ পাম আসলে আবার শর্ ট করবেন ঠিক হয়ে যাবে, যদি ঠিক নাহ হয় আমাকে মেসেজ করবেন সাথে সাথে ঠিক করে দিব। <
        p className = 'text-green-500' > Imo / Whatsapp: < p className = 'inline-block ' > 01724686857 < /p></p >
        <
        p className = 'text-green-500' > Telegram: < p className = 'inline-block ' > @oliviaemma9 < /p></p >
        <
        /p> <
        /small> <
        div className = 'flex justify-start' >
        <
        a style = {
            {
                textDecoration: "underline"
            }
        }
        target = {
            "_blank"
        }
        className = 'inline-block text-red-700 '
        href = 'https://www.youtube.com/@learningjourneybd' >

        <
        svg xmlns = "http://www.w3.org/2000/svg"
        className = 'text-red-700 inline-block '
        width = "26"
        height = "26"
        fill = "currentColor"
        class = "bi bi-youtube"
        viewBox = "0 0 16 16" >
        <
        path d = "M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" / >
        <
        /svg> <
        /a> <
        a className = 'inline-block decoration-solid'
        target = {
            "_blank"
        }
        style = {
            {
                textDecoration: "underline"
            }
        }
        href = 'https://www.youtube.com/@learningjourneybd' > Learning Journey < /a>

        <
        /div> <
        /div> { /* tab start */ }

        { /* tab end */ } <
        hr className = 'border-md my-2' / > {
            /* <div className='flex justify-center'> 
                      <span class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-gray-800 text-white rounded">Youtube with landing page shortener</span>
                         </div> */
        }

        <
        div className = "mb-4" >



        <
        label className = "block text-gray-700 text-sm font-bold mb-2"
        htmlFor = "input" >
        select domain <
        /label> <
        select onChange = {
            (value) => {
                ChangeValue(value.target.value)
            }
        }
        className = 'focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow pointer appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' > {
            /* <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option selected value="coconut">Coconut</option>
              <option value="mango">Mango</option> */
        } {
            domains.map((value, index) => ( <
                option key = {
                    index
                }
                value = {
                    value
                } > {
                    value
                } < /option>
            ))
        } <
        /select>

        <
        label className = "block text-gray-700 mt-3 text-sm font-bold mb-2"
        htmlFor = "input" >
        enter your offer or smartlink <
        /label> <
        input value = {
            link
        }
        onChange = {
            (e) => setLink(e.target.value)
        }
        className = "focus:text-gray-700focus:bg-white focus:border-blue-600 focus:outline-none shadow pointer appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id = "input"
        type = "text"
        placeholder = "enter offer or smartlink"

        /
        > {
            /* <label
                          className="block text-gray-700 text-sm font-bold mb-1 mt-2"
                          htmlFor="input"
                        >
                          name
                        </label>
                        <input
                          value={modelname}
                          onChange={(e) => setModelname(e.target.value)}
                          className="focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow pointer appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="input"
                          type="text"
                          placeholder="name"
                         
                        />
                             <label
                          className="block text-gray-700 text-sm font-bold mb-1 mt-2"
                          htmlFor="input"
                        >
                         username
                        </label>
                        <input
                          value={modelUsername}
                          onChange={(e) => setModeluserName(e.target.value)}
                          className="focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow pointer appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="input"
                          type="text"
                          placeholder="username"
                         
                        />
                             <label
                          className="block text-gray-700 text-sm font-bold mb-1 mt-2"
                          htmlFor="input"
                        >
                          cover
                        </label>
                        <input
                          value={modelCoverPhotoUrl}
                          onChange={(e) => setModelCoverPhotoUrl(e.target.value)}
                          className="focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow pointer appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="input"
                          type="text"
                          placeholder="cover url"
                         
                        />
                             <label
                          className="block text-gray-700 text-sm font-bold mb-1 mt-2"
                          htmlFor="input"
                        >
                        profile
                        </label>
                        <input
                          value={modelProfilePhotoUrl}
                          onChange={(e) => setModelProfilePhotoUrl(e.target.value)}
                          className="focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow pointer appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="input"
                          type="text"
                          placeholder="profile url"
                         
                        /> */
        } <
        input


        className = "focus:text-gray-700 focus:bg-white text-white focus:border-blue-600 focus:outline-none shadow bg-blue-500 hover:bg-blue-700 text-white font-bold my-2 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id = "input"
        type = "submit"
        style = {
            {
                color: "white"
            }
        }
        placeholder = "Enter some text"

        /
        >
        <
        /div> <
        div className = "mb-6" >
        <
        label className = "block text-gray-700 text-sm font-bold mb-2"
        htmlFor = "output" >
        Output <
        /label> <
        textarea className = " shadow h-[280px] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id = "output"
        value = {
            output
        }
        readOnly /
        >
        <
        /div> <
        div className = "flex items-center justify-between" >
        <
        button className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type = "button"
        onClick = {
            () => {
                navigator.clipboard.writeText(output)
                CopyOutput()
            }
        } >
        {
            outputc
        } <
        /button> <
        /div> <
        /form> <
        /div> <
        /div>
    );
}

export default Dash;