import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <>
      <header className='bg-[#333] text-white p-6 flex justify-between text-base font-bold'>
        <Link to="/" className=''>Blog</Link>
        <Link to="/contact" className=''>お問い合わせ</Link>
      </header>
    </>
  );
}