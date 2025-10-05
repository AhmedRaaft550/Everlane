const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-5  mt-auto">
      <div className="text-center font-bold  text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Everlane. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
