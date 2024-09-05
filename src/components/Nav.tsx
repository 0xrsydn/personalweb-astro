import { useEffect, useState } from 'react';
import { ModeToggle } from '@/components/ModeToggle'; // Import the ModeToggle component

const Nav = () => {
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About Me', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Blog', href: '/blog' },
  ];

  return (
    <nav className="border-b-2 border-border bg-white dark:bg-pink-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="hidden sm:block w-10"></div> {/* Spacer for small screens */}
          <div className="flex-grow flex justify-center space-x-2 sm:space-x-4 overflow-x-auto">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-text hover:underline px-2 sm:px-3 py-2 transition-all duration-200 whitespace-nowrap ${
                  currentPath === item.href ? 'font-bold' : ''
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="flex-shrink-0"> 
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;