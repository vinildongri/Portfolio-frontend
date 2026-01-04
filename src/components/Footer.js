const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-950 text-gray-700 dark:text-white py-6 px-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Footer Text */}
        <div className="footer-text text-center sm:text-left">
          <p>&copy; 2025 by Dongri Vinil | All Rights Reserved</p>
        </div>

        {/* Footer Icon (Scroll to Top) */}
        <div className="footer-iconTap">
          <a
            href="#home"
            className="text-gray-700 dark:text-white text-2xl transition-transform transform hover:scale-110"
          >
            <i className="bx bx-up-arrow-alt"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;