import Image from "next/image";

import { RegisterUIForm } from "./Form";
import { Divider } from "@/components/common/Divider";

import login1 from '../../../../public/icons/registerIcon1.svg';
import login2 from '../../../../public/icons/registerIcon3.svg';
import login3 from '../../../../public/icons/registerIcon2.svg';

export const RegisterUI = () => (
  <section className="w-full flex xl:flex-row flex-col justify-center items-center min-h-screen">
    <div className="flex flex-col gap-20 w-full mb-[17px] pt-28 ">
      <div className="grid p-2  items-start justify-end">
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

    <div className="relative xl:w-2/5 gap-2 flex flex-col justify-center items-center w-full max-xl:px-4 pt-28">
      <RegisterUIForm />
      <Divider styles="w-[100vw] absolute h-0.5 bg-yellow-primary bottom-20" />
      <p className="text-[14px]">Copyright @Sunrise | Política de Privacidad</p>
    </div>

    <div className="flex justify-center items-center w-full p-2 mb-[51px] mt-[390px]">
      <Image
        src={login1}
        alt="logo"
        width={500}
        height={29}
      />
    </div>
  </section>
);
