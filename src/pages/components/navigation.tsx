import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { Ribeye } from "next/font/google";

export default function Navigation({ children }) {
    const [isMounted, setIsMounted] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const router = useRouter();

    const mountedStyle = {
        animation: "inAnimation 500ms ease-out"
    };
    const unmountedStyle = {
        animation: "outAnimation 400ms ease-out",
        animationFillMode: "forwards"
    };

    return (<div className="h-screen  min-w-nav max-w-nav object-left-top bg-black text-white ">
        <div className="flex items-center ml-5 pt-10 group" onClick={() => { setIsMounted(!isMounted); setMenuOpen(true) }}>
            <div className="space-y-2 pt-1 mr-5">
                <div className="w-10 h-0.5 bg-white"></div>
                <div className="w-7 h-0.5 bg-white group-hover:w-10 ease-in-out duration-300"></div>
                <div className="w-6 h-0.5 bg-white group-hover:w-10 ease-in-out duration-300"></div>
            </div>
            {children}
        </div>
        <div className="fixed bottom-0 left-0 min-w-nav max-w-nav">
            <ul className="flex justify-around text-lg pb-2">
                <li><Link className={router.pathname == "/imprint" ? "active" : ""} href="imprint">Impressum</Link></li>
                <li><Link className={router.pathname == "/privacy" ? "active" : ""} href="privacy">Datenschutz</Link></li>
            </ul>
        </div>
        {
            menuOpen && (
                <div className="text-3xl ml-5 mt160 flex column transitionDiv relative"
                    style={isMounted ? mountedStyle : unmountedStyle}
                    onAnimationEnd={() => {
                        if (!isMounted) setMenuOpen(false);
                    }}>
                    <ul>
                        <li className="pt-16"><Link className={router.pathname == "/" ? "active" : ""} href="/">Home</Link></li>
                        <li className="pt-16"><Link className={router.pathname == "/books" ? "active" : ""} href="/books">Bücher</Link></li>
                        <li className="pt-16"><Link className={router.pathname == "/about" ? "active" : ""} href="/about">Über uns</Link></li>
                    </ul>
                </div>)
        }
        <div className="bottom-10 absolute min-w-nav max-w-nav border-x-10 border-black">
            <Link href="/">
                <img src="index.png"></img></Link>
        </div>
    </div>
    );
}
8