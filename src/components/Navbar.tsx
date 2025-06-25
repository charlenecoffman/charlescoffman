import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <>
      {/* Fixed header */}
      <div className="fixed top-[2rem] left-0 w-full z-50">
        <div className="mx-auto max-w-6xl px-6 py-4 border border-white flex justify-center">
          <nav className="flex justify-between items-center w-full text-lg font-serif tracking-wide">
            <div className="flex items-center space-x-2">
              <NavItem href="#home" label="Home" />
            </div>
            <div className="flex items-center space-x-2">
              <Star />
            </div>
            <div className="flex items-center space-x-2">
              <NavItem href="#books" label="Books" />
            </div>
            <div className="flex items-center space-x-2">
              <Star />
            </div>
            <div className="flex items-center space-x-2">
              <NavItem href="#about" label="About" />
            </div>
            <div className="flex items-center space-x-2">
              <Star />
            </div>
            <div className="flex items-center space-x-2">
              <NavItem href="#contact" label="Contact" />
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};


// ✨ Star separator
const Star = () => (
  <span className="text-2xl leading-none select-none">⚙</span>
);

// 🧭 Nav item
const NavItem = ({ href, label }: { href: string; label: string }) => {
  return (
    <a
      href={href}
      className="uppercase text-[#DDDDDD] transition-colors duration-200 cursor-pointer no-underline"
    >
      {label}
    </a>
  );
};
