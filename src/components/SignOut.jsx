import { useState, } from "react"

const SignOut = (props) => {

    const [loading, setLoading] = useState(false)
    const [errMessage, setErrMessage] = useState(false)

    console.log(props)
    const doSignup = async (e) => {
        e.preventDefault()
        setLoading(true)
        setErrMessage(false)
        props.setLoggedIn(false)
        localStorage.removeItem("token")
        props.setShowModal(false)
    }

    return (
        <div>
            <form>
                <div className="h-80 flex flex-col justify-start items-center">
                  
                    <button onClick={doSignup} className="bg-emerald-700 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="submit">
                        {loading ? "Signing Out..." : "Sign Out"}
                    </button>
                    {errMessage ? <p>Something went wrong when signing you out, please try again</p> : null}
                </div>
            </form>
        </div>
    )
}

export default SignOut