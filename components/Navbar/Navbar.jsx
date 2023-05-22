import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div>
        <nav>
            <manu>
                <Link href="/">
                    Home
                </Link>
                <Link href="/about">
                    About
                </Link>
            </manu>
        </nav>
    </div>
  )
}

export default Navbar