import Image from "next/image";
import { LoginUIForm } from "./Form";
import login1 from '../../../../public/icons/loginIcon1.svg';
import login2 from '../../../../public/icons/loginIcon2.svg';
import login3 from '../../../../public/icons/loginCart.svg';
import { Divider } from "@/components/common/Divider";

export const LoginUI = () => (
  <section className="w-full flex xl:flex-row flex-col justify-center items-center min-h-screen">
    <div className="grid gap-20 w-full mb-[50px] pt-28 ">
      <div className="grid p-2  items-start justify-end pr-10">
        <Image
          src={login2}
          alt="logo"
          width={250}
          height={29}
        />
      </div>
      <div className="grid p-2 items-start justify-start">
        <Image
          src={login3}
          alt="logo"
          width={280}
          height={29}
        />
      </div>
    </div>

    <div className="relative xl:w-2/5 gap-4 flex flex-col justify-center items-center w-full max-xl:px-4 pt-28">
      <LoginUIForm />
      <Divider styles="w-[95vw] absolute h-0.5 bg-yellow-primary bottom-20" />
      <p className="text-[14px]">Copyright Sunrise 2024 | Política de Privacidad</p>
    </div>

    <div className="flex justify-center items-center w-full p-2 mb-[51px] mt-[350px]">
      <Image
        src={login1}
        alt="logo"
        width={450}
        height={29}
      />
    </div>
  </section>
);
