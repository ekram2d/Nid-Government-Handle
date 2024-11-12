import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            বাংলাদেশ নির্বাচন কমিশন
          </h1>
          <p className="text-lg md:text-2xl">
            বাংলাদেশ নির্বাচন কমিশন – আপনার ভোট, আপনার অধিকার
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4 py-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">আমাদের সম্পর্কে</h2>
        <p className="text-gray-700 mb-8">
          বাংলাদেশ নির্বাচন কমিশন দেশের নির্বাচন পরিচালনা এবং জাতীয় পরিচয়পত্র
          ব্যবস্থাপনায় দায়িত্বপ্রাপ্ত সংস্থা। আমাদের লক্ষ্য হলো সুষ্ঠু, নিরপেক্ষ
          ও গ্রহণযোগ্য নির্বাচন প্রক্রিয়া নিশ্চিত করা।
        </p>
        <Link
          to="/about"
          className="btn bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark"
        >
          আরও জানুন
        </Link>
      </section>

      {/* Services Section */}
      <section className="bg-gray-200 py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold text-center mb-6">সেবা সমূহ</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* NID Verification */}
            <Link
              to="/nid-verification"
              className="bg-white shadow-lg p-6 rounded-lg text-center hover:bg-gray-100"
            >
              <h3 className="text-xl font-semibold mb-2">এনআইডি যাচাই</h3>
              <p>জাতীয় পরিচয়পত্র যাচাই করার সুবিধা</p>
            </Link>

            {/* Voter Registration */}
            <Link
              to="/voter-services"
              className="bg-white shadow-lg p-6 rounded-lg text-center hover:bg-gray-100"
            >
              <h3 className="text-xl font-semibold mb-2">ভোটার নিবন্ধন</h3>
              <p>ভোটার নিবন্ধন ও তথ্য হালনাগাদ</p>
            </Link>

            {/* Election Information */}
            <Link
              to="/election-info"
              className="bg-white shadow-lg p-6 rounded-lg text-center hover:bg-gray-100"
            >
              <h3 className="text-xl font-semibold mb-2">নির্বাচনী তথ্য</h3>
              <p>বাংলাদেশের নির্বাচনী তথ্য ও নির্দেশিকা</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold text-center mb-6">সর্বশেষ খবর</h2>
        <div className="space-y-4">
          <div className="bg-white shadow-lg p-4 rounded-lg">
            <h3 className="text-xl font-semibold">নতুন ভোটার নিবন্ধন কার্যক্রম শুরু</h3>
            <p className="text-gray-600">বাংলাদেশ নির্বাচন কমিশন নতুন ভোটার নিবন্ধন কার্যক্রম শুরু করেছে...</p>
            <Link to="/news" className="text-primary hover:underline">আরও পড়ুন</Link>
          </div>
          <div className="bg-white shadow-lg p-4 rounded-lg">
            <h3 className="text-xl font-semibold">জাতীয় নির্বাচন সংক্রান্ত গুরুত্বপূর্ণ তথ্য</h3>
            <p className="text-gray-600">বাংলাদেশের জাতীয় নির্বাচন সম্পর্কে নতুন নির্দেশিকা প্রকাশিত হয়েছে...</p>
            <Link to="/news" className="text-primary hover:underline">আরও পড়ুন</Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-primary text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-semibold mb-4">যোগাযোগ</h2>
          <p>বাংলাদেশ নির্বাচন কমিশনের সাথে যোগাযোগ করতে ইমেল করুন বা আমাদের অফিসে আসুন।</p>
          <Link
            to="/contact"
            className="btn bg-white text-primary mt-4 px-4 py-2 rounded-md hover:bg-gray-100"
          >
            যোগাযোগ করুন
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
