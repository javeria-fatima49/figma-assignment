import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white h-screen flex items-center">
      <div className="flex flex-col gap-4 px-10 w-1/2 h-48">
      <h1 className="font-bold text-[44px] text-black">Welcome To Our Website</h1>
      <p className="font-normal text-[32px] text-black">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard
      </p>
      <button className="text-white w-[237px] h-[66px] p-4 bg-black">Contact US</button>
      </div>
      <div> <Image
    src="/image/premium_photo-1673384114537-6b2aa10ca00a.avif"
    alt="Description of the image"
     width={800}
     height={600}
/>
</div>
    </div>
  );
}