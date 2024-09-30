// components/Navbar.js
"use client"
import Link from 'next/link';
import { GiHamburgerMenu } from "react-icons/gi";
import LoadingBar from 'react-top-loading-bar'
import { usePathname } from 'next/navigation';
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ModeToggle } from './theme-button';
import { useEffect, useState } from 'react';



const Navbar=()=> {
  const [progress,SetProgress]=useState(0)
  const pathName=usePathname()

  useEffect(()=>{
    SetProgress(30)

    setTimeout(() => {
      SetProgress(70)
      
    }, 100);

    setTimeout(()=>{
      SetProgress(100)
    },400)

  },[pathName])

  useEffect(()=>{
    SetProgress(0)
    setTimeout(() => {
      
    }, 500);
  },[])
  

  return (
    <nav className="p-4 z-10 bg-background/50 sticky border-b  backdrop-blur shadow-md">
       <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => SetProgress(0)}
      />
      <div className="container mx-auto px-4   sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold ">
              MyBlogApp
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
          <Link href="/" >
                    Home
                </Link>
                <Link href="/about" >
                About
                </Link>
                <Link href="/blog" >
                    Blog
                </Link>
                <Link href="/contact" >
                    Contact
                </Link>
          
          <div className='pl-8'>
          <Button className="mx-1 " variant="outline">Login</Button>
          <Button className="mx-1 " variant="outline">Signup</Button>
          </div>
          <ModeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div>
          <div className="md:hidden flex items-center">
          <Sheet>
           <SheetTrigger> 
             <GiHamburgerMenu/>
            </SheetTrigger>
            <span className='ml-4'>
            <ModeToggle />
            </span>
            <SheetContent>
         <SheetHeader>
       <SheetTitle>MyBlogApp</SheetTitle>
       <SheetDescription>
      <div className="flex flex-col gap-5 text-center">
          <Link href="/" >
                    Home
                </Link>
                <Link href="/about" >
                About
                </Link>
                <Link href="/blog" >
                    Blog
                </Link>
                <Link href="/contact" >
                    Contact
                </Link>
                <div>
          <Button className="mx-1"  variant="outline">Login</Button>
          <Button className="mx-1"  variant="outline">Signup</Button>
          </div>
          </div>

      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
          </div>
          </div>
        </div>
      </div>

    
    </nav>
  );
}

export default Navbar









