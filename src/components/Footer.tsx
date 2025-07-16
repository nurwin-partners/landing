import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="bg-[url(../assets/bg-footer.svg)] h-[500px] flex items-end px-4"
      id="contacts"
    >
      <div className="w-full max-w-[1114px] mx-auto mb-16 max-xl:mb-8">
        <p className="text-[32px]/[74px] font-semibold uppercase text-gradient font-[Unbounded] max-xl:text-center">
          CONTACTS
        </p>
        <div className="flex gap-[88px] max-xl:gap-6 mt-[33px] max-xl:mt-6 mb-[86px] max-xl:mb-11 flex-wrap max-xl:flex-col">
          <div className="flex flex-col gap-4 max-xl:gap-1 items-start max-xl:items-center">
            <p className="text-[#B6C4E7] text-sm font-semibold uppercase font-[Inter]">
              Email address for additional information
            </p>
            <a
              href="mailto:partner.support@nurwin.com"
              className="text-white text-[26px] max-xl:text-[16px] font-semibold uppercase font-[Unbounded]"
            >
              partner.support@nurwin.com
            </a>
          </div>
          <div className="flex flex-col gap-4 max-xl:gap-1 items-start max-xl:items-center">
            <p className="text-[#B6C4E7] text-sm font-semibold uppercase font-[Inter]">
              telegram
            </p>
            <a
              href="https://t.me/affiliate_nurwin"
              className="text-white text-[26px] max-xl:text-[16px] font-semibold uppercase font-[Unbounded]"
            >
              @affiliate_nurwin
            </a>
          </div>
        </div>
        <div className="flex flex-row gap-10 max-xl:flex-col-reverse max-xl:items-center">
          <p className="text-[#B6C4E7] text-sm font-semibold uppercase font-[Inter] max-xl:text-center">
            ALL RIGHTS RESERVED ©2025
          </p>
          <Link
            className="text-[#E7D6B6] text-sm font-semibold uppercase font-[Inter] max-xl:text-center"
            href="/terms/index.html"
          >
            terms and conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}
