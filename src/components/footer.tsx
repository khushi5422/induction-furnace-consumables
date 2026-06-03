import { FaMapMarkerAlt } from 'react-icons/fa';
import Home from '@/styles/Home.module.css'
import { BsFillTelephoneFill } from 'react-icons/bs';
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { BsFillThreadsFill } from "react-icons/bs";
import { IoMdMail } from 'react-icons/io';
import { MdFiberManualRecord } from 'react-icons/md';
import React from 'react';
import Link from 'next/link';
import { Col, Row } from 'react-bootstrap';
export default function Footer() {
    return (
        <>
            <style jsx>
                {`
                a{
                    text-decoration:none !important;
                    min-width: fit-content;
                    width: fit-content;
                    width: -webkit-fit-content;
                    width: -moz-fit-content;
                }
                
                a, p{
                    font-size:14px;
                }
                
                h1, h2, h3, h4, h5, h6{
                    font-weight:600;
                }
                
                a, button, input, textarea, select{
                    outline:none !important;
                }
                
                fieldset{
                    border:0;
                }
                
                .flex, .fixed_flex{
                    display:flex;
                }
                
                .flex-content{
                    width:100%;
                    position:relative;
                }
                
                @media (max-width:920px){
                    .flex{
                        flex-wrap:wrap;
                    }
                    a, p{
                        font-size:12px;
                    }
                }
                footer{
                    background-color: #182933;
                    padding-bottom: 0px !important;
                }
                
                footer h3{
                    margin-bottom:1.5rem;
                }
                
                footer a{
                    display:block;
                    margin:15px 0;
                }
                
                footer fieldset{
                    padding:0;
                }
                
                footer fieldset input{
                    background-color:#334f6c;
                    border:0;
                    padding:1rem;
                }
                
                footer .flex:last-child{
                    align-items:center;
                }
                
                footer .flex:last-child .flex-content:last-child{
                    text-align:right;
                }
                
                footer .flex:last-child a{
                    width:40px;
                    display:inline-block;
                    background-color:#334f6c;
                    padding:0.5rem;
                    margin-right:3px;
                    text-align:center;
                }
                
                footer .flex:last-child a:hover{
                    background-color:white;
                    color:gray;
                }
                
                @media (max-width:1100px){
                    footer .flex:first-child{
                        flex-wrap:wrap;
                    }
                    
                    footer .flex:first-child .flex-content{
                        flex: 1 1 40%;
                    }
                }
                
                @media (max-width:920px){
                    footer .flex:last-child .flex-content:last-child{
                        text-align:left;
                    }
                }
                
                @media (max-width:320px){
                    footer .flex:first-child .flex-content{
                        flex:1 1 100%;
                    }
                }
                @media (max-width:767px){
                    small {
                        font-size: small
                    }
                }
                .image_logo{
                    width: 10vw;
                }
                .bg{
                    background-color: #00000073;
                }

        
        `}
            </style>
            <div>
                <footer className={`${Home.white_link} p-2`}>
                    <div className="flex">
                        <section className="flex-content p-1">
                            <img src='../../logo.svg' alt='Loading..' className='image_logo' loading="lazy" />
                            <p className="mt-2 text-white">Fieldman Induction </p>
                            <p className="mt-2 text-white">Fieldman Sensors </p>
                            <p className="mt-2 text-white">Fieldman Control System </p>
                            <p className="mt-2 text-white">Fieldman Food Stuff Groups </p>
                        </section>
                        <section className="flex-content p-1">
                            <h3 className='text-white'>Products</h3>
                            <div className='p-0 m-0 d-flex flex-column'>
                                <Link href="/gallery" className='small text-white '>AUTOMATION & INSTRUMENTS</Link>
                                <Link href="/gallery" className='small text-white'>INDUCTION FURNACE & SPARES MANUFACTURING</Link>
                                <Link href="/gallery" className='small text-white'> INDUCTION FURNACE - CCM & ROLLING MILL Equipment  </Link>
                                <Link href="/gallery" className='small text-white'>ALL TYPES POWDER REFACTORY MANUFACTURING</Link>
                                <Link href="/gallery" className='small text-white'>EXPORT HOUSE</Link>
                            </div>
                        </section>
                        <section className="flex-content p-1 ">
                            <h3 className='text-white'>Get in touch</h3>
                            <div className='p-0 m-0 d-flex flex-column '>
                                <Link href="#" className='small text-white'><FaMapMarkerAlt color='orange' /> Ahmedabad , India</Link>
                                <Link href="tel://+91 9898997644" className='small text-white'><BsFillTelephoneFill color='orange' /> +91 98989 97644</Link>
                                <Link href="mailto:sales.fieldman89@gmail.com" className='small text-white'><IoMdMail color='orange' /> sales.fieldman89@gmail.com</Link>
                                {/*<Link href="https://www.instagram.com/_jk_exports/" className='small text-white'><AiFillInstagram   color='orange'/> _jk_exports</Link>
                            <Link href="https://www.facebook.com/jkexports2023" className='small text-white'><FaFacebook  color='orange'/> jkexports2023</Link>
                            <Link href="https://www.threads.net/@_jk_exports" className='small text-white'><BsFillThreadsFill color='orange'/> _jk_exports</Link> */}
                            </div>

                        </section>
                        <section className="flex-content p-1">
                            <h3 className='text-white'>Quick Links</h3>
                            <div className='p-0 m-0 d-flex flex-column'>
                                <Link href="/" className='small text-white'><MdFiberManualRecord color='orange' />Home</Link>
                                <Link href="/aboutus" className='small text-white'><MdFiberManualRecord color='orange' />About Us</Link>
                                <Link href="/gallery" className='small text-white'><MdFiberManualRecord color='orange' />Gallery</Link>
                                <Link href="/contactus" className='small text-white'><MdFiberManualRecord color='orange' />Contact</Link>
                            </div>
                        </section>

                    </div>
                    <div>
                        <section className="flex-content p-1 text-center bg text-white">
                            <p>Copyright ©2006 All rights reserved || Fieldman Groups Of Industries </p>
                        </section>
                    </div>

                </footer>
            </div>
        </>
    )
}
