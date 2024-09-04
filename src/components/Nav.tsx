import { useEffect, useState } from 'react';

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
    <nav className="p-8 text-lg">
      <div className="max-w-7xl mx-auto flex justify-center">
        <ul className="flex flex-wrap justify-center space-x-4">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className={`text-gray-800 dark:text-gray-200 hover:underline transition-all duration-200 ${
                  currentPath === item.href ? 'underline' : ''
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
