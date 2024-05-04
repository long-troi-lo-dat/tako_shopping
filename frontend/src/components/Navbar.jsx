import { Link } from "react-router-dom"
import '../index.css'
import { useState } from "react"

const Navbar = () => {
    const [menu, setMenu] = useState("trangchu")

    return (
        <nav className="w-full text-sm bg-[#feb0bd] text-white sticky top-0 z-40 font-semibold h-12">
            <ul className="h-full flex items-center justify-between text-sm uppercase mx-48">
                <li className="hover:opacity-70" onClick={() => { setMenu("trangchu") }}>
                    <Link to="/" className={menu === "trangchu" ? "py-3 text-[red]" : "py-3"}>
                        Trang chủ
                    </Link>
                </li>
                <li className="hover:opacity-70" onClick={() => { setMenu("gaubongcaocap") }}>
                    <Link to="/cua-hang/capybara" className={menu === "gaubongcaocap" ? "py-3 text-[red]" : "py-3"}>
                        Gấu bông cao cấp
                    </Link>
                </li>
                <li className="hover:opacity-70" onClick={() => { setMenu("hoathinh") }}>
                    <Link to="/cua-hang/2" className={menu === "hoathinh" ? "py-3 text-[red]" : "py-3"}>
                        Hoạt hình
                    </Link>
                </li>
                <li className="hover:opacity-70" onClick={() => { setMenu("thubong") }}>
                    <Link to="/cua-hang/3" className={menu === "thubong" ? "py-3 text-[red]" : "py-3"}>
                        Thú bông
                    </Link>
                </li>
                <li className="hover:opacity-70" onClick={() => { setMenu("bosuutap") }}>
                    <Link to="/cua-hang/4" className={menu === "bosuutap" ? "py-3 text-[red]" : "py-3"}>
                        Bộ sưu tập
                    </Link>
                </li>
                <li className="hover:opacity-70" onClick={() => { setMenu("gaubongvaphukien") }}>
                    <Link to="/cua-hang/5" className={menu === "gaubongvaphukien" ? "py-3 text-[red]" : "py-3"}>
                        Gấu bông & phụ kiện
                    </Link>
                </li>
                <li className="hover:opacity-70" onClick={() => { setMenu("hangsapve") }}>
                    <Link to="/cua-hang/6" className={menu === "hangsapve" ? "py-3 text-[red]" : "py-3"}>
                        Hàng sắp về
                    </Link>
                </li>
            </ul>
            {/* <ul className="">
                <li className="pl-8 inline-block hover:bg-white border-b-2"><a href="/#" className="w-full h-full flex py-3">
                    <svg
                        viewBox="0 0 1024 1024"
                        fill="currentColor"
                        height="1.5em"
                        width="1.5em"
                        className="mr-2"
                    >
                        <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" />
                        <path d="M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z" />
                    </svg>
                    <span className="">About us</span>
                </a></li>
                <li className="pl-8 inline-block hover:bg-white border-b-2"><a href="/#" className="w-full h-full flex py-3">
                    <svg
                        viewBox="0 0 1024 1024"
                        fill="currentColor"
                        height="1.5em"
                        width="1.5em"
                        className="mr-2"
                    >
                        <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" />
                        <path d="M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z" />
                    </svg>
                    <span className="">FAQ</span>
                </a></li>
                <li className="pl-8 inline-block hover:bg-white border-b-2"><a href="/#" className="w-full h-full flex py-3">
                    <svg
                        viewBox="0 0 1024 1024"
                        fill="currentColor"
                        height="1.5em"
                        width="1.5em"
                        className="mr-2"
                    >
                        <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" />
                        <path d="M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z" />
                    </svg>
                    <span className="">Operational regulations</span>
                </a></li>
                <li className="pl-8 inline-block hover:bg-white border-b-2"><a href="/#" className="w-full h-full flex py-3">
                    <svg
                        viewBox="0 0 1024 1024"
                        fill="currentColor"
                        height="1.5em"
                        width="1.5em"
                        className="mr-2"
                    >
                        <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" />
                        <path d="M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z" />
                    </svg>
                    <span className="">Information privacy policy</span>
                </a></li>
            </ul> */}
        </nav>
    )
}

export default Navbar