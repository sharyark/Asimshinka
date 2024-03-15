import React from 'react';

const Home = () => {
  return (
    <div className="bg-gray-100">
      {/* Header Section */}
      <header className="bg-gray-100 py-4">
        <div className="bg-gray-100 container mx-auto px-4">
          {/* Your header content goes here */}
          <h1 className=" text-3xl font-bold text-gray-800"><strong>Asim Blend Serivce</strong></h1>
        </div>
      </header>

      {/* Welcome Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Welcome to Our Commitment to Excellence</h1>
          <p className="text-lg text-gray-600">Welcome to our business! At <strong>PureBlend</strong> Service, we pride ourselves on offering both services and products that prioritize transparency and purity. Our services are designed to be fully transparent, ensuring that you understand every step of the process. Additionally, our products are guaranteed in purity, meaning that you can trust the quality of what you're receiving. We believe in providing straightforward and reliable solutions that you can count on.
<br /> <strong>Thank you for choosing PureBlend Service for your needs!</strong></p>

        </div>
      </section>

      {/* Service Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Services</h2>
          <div className="flex flex-wrap -mx-4">
            {/* Service Cards */}
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Wheat to Wheat Flour</h3>
                <p className="text-gray-600">We provide wheat grinding services to produce high-quality wheat flour.</p>
                <a href="/wheat-flour" className="block mt-4 text-blue-600 hover:underline">Learn More</a>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Corn to Corn Flour</h3>
                <p className="text-gray-600">We offer corn milling services to produce premium corn flour.</p>
                <a href="/corn-flour" className="block mt-4 text-blue-600 hover:underline">Learn More</a>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Mustard to Mustard Oil</h3>
                <p className="text-gray-600">We specialize in extracting high-quality mustard oil from mustard seeds.</p>
                <a href="/mustard-oil" className="block mt-4 text-blue-600 hover:underline">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Products</h2>
          <div className="flex flex-wrap -mx-4">
            {/* Product Cards */}
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Wheat Flour</h3>
                <p className="text-gray-600">Our wheat flour is made from high-quality wheat grains, perfect for baking and cooking.</p>
                <a href="/wheat-flour" className="block mt-4 text-blue-600 hover:underline">View Product</a>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Corn Flour</h3>
                <p className="text-gray-600">Our corn flour is finely ground from premium corn, ideal for various culinary uses.</p>
                <a href="/corn-flour" className="block mt-4 text-blue-600 hover:underline">View Product</a>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Mustard Oil</h3>
                <p className="text-gray-600">Our mustard oil is extracted from the finest mustard seeds, ensuring purity and quality.</p>
                <a href="/mustard-oil" className="block mt-4 text-blue-600 hover:underline">View Product</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
