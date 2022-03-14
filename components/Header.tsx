import Image from 'next/image';
import Gublight from '../public/assets/icon/GubLight.svg';
import Github from '../public/assets/icon/Github.svg';
import Link from 'next/link';

function Header() {
  return (
    <div className="web-header bg-[#161B22] w-full h-20 ">
      <div className="container flex justify-between items-center my-0 mx-auto  h-20 ">
        <Link href="/">
          <a className="pt-[6px]">
            <Image src={Gublight} alt="GubLight Logo" />
          </a>
        </Link>

        <a
          href="https://github.com/ericting2000/2022-Dcard-Web-Frontend-Intern-Homework"
          className="pt-[6px]"
        >
          <Image src={Github} alt="Github Logo" />
        </a>
      </div>
    </div>
  );
}

export default Header;
