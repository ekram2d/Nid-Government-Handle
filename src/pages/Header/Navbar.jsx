import { Link } from 'react-router-dom'; // Assuming React Router is used for navigation

const Header = () => {
  return (
    <header className="bg-white shadow-md rounded-lg">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center">
          {/* Bangladesh National Emblem */}
          <img
            src="path/to/bangladesh-national-emblem.svg"
            alt="Bangladesh National Emblem"
            className="w-10 h-10 mr-2"
          />

          {/* Website Title */}
          <Link to="/" className="text-xl font-bold text-primary">
            বাংলাদেশ নির্বাচন কমিশন (Bangladesh Election Commission)
          </Link>
        </div>

        <div className="hidden md:flex">
          {/* Navigation Links */}
          <ul className="flex items-center space-x-4 text-gray-700">
            <li>
              <Link to="/nid-verification">এনআইডি যাচাইকরণ (NID Verification)</Link>
            </li>
            <li>
              <Link to="/nid-services">এনআইডি সেবা (NID Services)</Link>
            </li>
            <li>
              <Link to="/data-protection">ডেটা সুরক্ষা (Data Protection)</Link>
            </li>
            <li>
              <Link to="/generate-encrypted-nid">এনক্রিপ্টেড এনআইডি ইমেজ তৈরি করুন (Generate Encrypted NID Image)</Link>
            </li>
            <li>
              <Link to="/contact">যোগাযোগ (Contact)</Link>
            </li>
            <li>
              <Link to="/about">আমাদের সম্পর্কে (About Us)</Link>
            </li>
            {/* Additional links as necessary */}
          </ul>
        </div>

        <div className="flex items-center md:hidden">
          {/* Hamburger Menu for Mobile Navigation (Optional) */}
          <button className="btn btn-sm btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
