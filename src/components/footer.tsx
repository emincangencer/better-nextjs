
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-card text-card-foreground p-4 border-t border-border mt-8">
      <div className="max-w-screen-xl mx-auto text-center text-sm">
        <p>&copy; {new Date().getFullYear()} My App. All rights reserved.</p>
        <nav className="mt-2">
          <ul className="flex justify-center space-x-4">
            <li><a href="/faq" className="hover:text-primary">FAQ</a></li>
            <li><a href="/privacy" className="hover:text-primary">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-primary">Terms of Service</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
