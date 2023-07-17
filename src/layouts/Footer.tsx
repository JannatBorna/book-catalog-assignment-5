import logo from '../assets/images/logo-2.png';
import { RiFacebookBoxFill, RiInstagramLine } from 'react-icons/ri';
export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className="bg-[#242630] text-secondary p-20">
      <div className="flex justify-between">
        <div>
          <img className="w-40 h-30" src={logo} alt="Logo" />
        </div>
        <div className="flex gap-20">
          <ul className="space-y-2">
            <li>Book</li>
            <li>Story Book</li>
            <li>Book is mind</li>
          </ul>
          <ul className="space-y-2">
            <li>Support</li>
            <li>Careers</li>
          </ul>
          <ul className="space-y-2">
            <li>List your gear</li>
            <li>Contact team</li>
          </ul>
        </div>
        <div className="flex gap-2 text-2xl">
          <RiFacebookBoxFill />
          <RiInstagramLine />
        </div>
      </div>
      <div className="flex w-full gap-5 mt-20">
        <p>Privacy Policy</p>
        <p>Terms & Condition</p>
        <p className="ml-auto"> &#169; Book catalog {year}</p>
      </div>
    </div>
  );
}
