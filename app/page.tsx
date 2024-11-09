import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white min-h-screen flex flex-col lg:flex-row items-center px-6 lg:px-10 py-10 lg:py-0">
      <div className="flex flex-col gap-4 w-full lg:w-1/2 mb-10 lg:mb-0">
        <h1 className="font-bold text-3xl lg:text-5xl text-black">Welcome To Our Website</h1>
        <p className="font-normal text-lg lg:text-2xl text-black">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard
        </p>
        <button className="text-white  w-[237px] h-[66px] px-4 py-2 lg:py-4 bg-black">
          Contact Us
        </button>
      </div>
      <div className="w-full lg:w-1/2 flex justify-center">
        <Image
          src="/image/premium_photo-1673384114537-6b2aa10ca00a.avif"
          alt="Description of the image"
          width={800}
          height={600}
          className="w-full h-auto object-cover max-w-[400px] md:max-w-[600px] lg:max-w-[800px]"
        />
      </div>
    </div>
  );
}
