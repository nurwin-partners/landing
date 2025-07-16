import { REGISTRATION_URL } from "@/data/consts";

export default function WomanBlock() {
  return (
    <>
      <section className="flex justify-center items-center w-full px-14 max-md:hidden">
        <div className="flex flex-row max-w-[1170px] w-full items-start gap-6 rounded-2xl bg-[rgba(255,_255,_255,_0.04)] pl-14 py-14 relative bg-[url(../assets/bg-banner.png)] bg-cover bg-center bg-no-repeat">
          <div className="flex flex-col gap-6 max-w-[530px]">
            <div className="flex gap-4 flex-col items-start">
              <p className="text-white text-[32px] font-semibold uppercase">
                START EARNING <br />
                WITH US TODAY!
              </p>
              <p className="text-[#B6C4E7] text-lg font-normal font-[Inter]">
                Once you sign up, our manager will reach out to answer any
                questions you may have and help you get started on your journey
                to profit!
              </p>
            </div>
            <a className="button" href={REGISTRATION_URL}>
              My Account
            </a>
          </div>
          <div className="min-w-[438px] h-[1px]">
            <img
              className="absolute bottom-0 right-0"
              src="assets/woman.png"
              alt="woman"
            />
          </div>
          <img
            className="absolute -top-16 right-[45%]"
            src="assets/coin-1.png"
            alt="coin"
          />
          <img
            className="absolute -bottom-16 -left-18"
            src="assets/coin-2.png"
            alt="coin"
          />
          <img
            className="absolute -bottom-22 right-[31%]"
            src="assets/heart.png"
            alt="heart"
          />
        </div>
      </section>

      <section className="flex-col gap-8 hidden max-md:flex">
        <div className="flex flex-col relative">
          <img
            className="absolute top-0 z-10 w-[25%]"
            src="assets/coin-1.png"
            alt="coin"
          />
          <img
            className="absolute -bottom-10 -left-5 z-10 w-[25%]"
            src="assets/coin-2.png"
            alt="coin"
          />
          <div className="relative overflow-hidden">
            <img
              className="absolute -right-10 bottom-0 z-10 w-[25%]"
              src="assets/heart.png"
              alt="heart"
            />
            <img
              className="w-full"
              src="assets/woman-mobile.png"
              alt="woman-mobile"
            />
          </div>
          <div className="px-4 -mt-7">
            <div className="flex flex-col gap-4 pt-4 pb-8 px-5 items-center rounded-2xl bg-[rgba(0,0,0,_0.08)] backdrop-blur-[32px] shadow-[0px_0px_48px_0px_rgba(181,_194,_227,_0.16)_inset] border-2 border-white w-full relative">
              <p className="font-semibold uppercase text-white text-center text-[17px]">
                START EARNING WITH US TODAY!
              </p>
              <div className="flex flex-col justify-center items-center ">
                <p className="text-[11px] font-semibold uppercase text-[#E7D6B6] text-center font-[Inter]">
                  Once you sign up, our manager will reach out to answer any
                  questions you may have and help you get started on your
                  journey to profit!
                </p>
              </div>
              <a className="button" href={REGISTRATION_URL}>
                My Account
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
