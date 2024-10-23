export default function Header(){
return(
    <div className="flex justify-between px-4 p-2 shadow-2xl bg-gray-500">
<div>Logo</div>

 <div className="flex gap-4">
<div className="cursor-pointer">Home</div>
<div className="cursor-pointer">About</div>
<div className="cursor-pointer">Services</div>
<div className="cursor-pointer">Contact Us</div>
</div>
</div>
);
}