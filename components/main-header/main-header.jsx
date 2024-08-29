import Link from "next/link";
import logoImg from '@/assets/logo.png';
import  classes from './main-header.module.css';
import Image from "next/image";
import MainHeaderBackground from '@/components/main-header/main-header-background';
import Navlink from "./nav-link";

export default function MainHeader() {
    return (
        <>
            <MainHeaderBackground />
            <header className={classes.header}>
                <Link className={classes.logo} href="/" >
                    <Image src={logoImg} alt="A plate with food on it" priority />
                    NextLevel Food
                </Link>

                <nav className={classes.nav}>
                    <ul>
                        <Navlink href="/meals">Browse Meals</Navlink>
                        <Navlink href="/community">Foodies Community</Navlink>
                    </ul>
                </nav>
            </header>
        </>
    )
}