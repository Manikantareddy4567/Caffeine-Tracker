import { useState } from 'react'
import Authentication from "./Authentication"
import Model from "./Model"
import { useAuth } from '../context/AuthContext'

export default function Layout(props) {
    const { children } = props

    const [showModel, setShowModel] = useState(false)

    const { globalUser, logout } = useAuth()

    const header = (
        <header>
            <div>
                <h1 className="text-gradient">CAFFIEND</h1>
                <p>For Coffee Insatiates</p>
            </div>
            {globalUser ? (
                <button onClick={logout}>
                    <p>Logout</p>
                </button>
            ) : (
                <button onClick={() => { 
    console.log("Sign up clicked"); // Add this line
    setShowModel(true); 
}}>
    <p>Sign up free</p>
    <i className="fa-solid fa-mug-hot"></i>
</button>
            )}
        </header>
    )

const footer = (
    <footer>
        <p>
            <span className="text-gradient">Caffiend</span> &copy; {new Date().getFullYear()} &mdash; 
            Your personal coffee tracker. <br />
            Made for coffee lovers, by coffee lovers.<br />
            Open source on <a href="https://www.github.com/jamezmca/reactjs-full-course" target="_blank" rel="noopener noreferrer">GitHub</a>.
        </p>
    </footer>
)

    function handleCloseModel() {
        setShowModel(false)
    }

    return (
        <>
            {showModel && (
    <Model handleCloseModel={handleCloseModel}>
        <div role="dialog" aria-modal="true">
            <Authentication handleCloseModel={handleCloseModel} />
        </div>
    </Model>
)}
            {header}
            <div className='site-wrapper'></div>
            <main>
                {children}
            </main>
            {footer}
        </>
    )
}