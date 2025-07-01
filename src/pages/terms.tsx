/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Link from "next/link";

export default function Terms() {
  return (
    <>
      <Head>
        <title>Nurwin | Terms of Service</title>
      </Head>
      <header className="flex items-center bg-[rgba(255,_255,_255,_0.04)] backdrop-filter backdrop-blur-xl py-6 px-4">
        <div className="flex justify-between items-center max-w-[1406px] w-full mx-auto">
          <Link href="/">
            <img src="../assets/logo.svg" alt="logo" />
          </Link>
          <div className="flex gap-5 font-[Inter] max-md:hidden">
            <Link
              href="/#partners"
              className="text-[#B6C4E7] text-sm font-semibold leading-[22px] uppercase cursor-pointer"
            >
              Nurwin Partners
            </Link>
            <Link
              href="/#benefits"
              className="text-[#B6C4E7] text-sm font-semibold leading-[22px] uppercase cursor-pointer hover:text-white transition-colors"
            >
              Benefits
            </Link>
            <Link
              href="/#cooperation-models"
              className="text-[#B6C4E7] text-sm font-semibold leading-[22px] uppercase cursor-pointer hover:text-white transition-colors"
            >
              Cooperation Models
            </Link>
            <Link
              href="/#about-us"
              className="text-[#B6C4E7] text-sm font-semibold leading-[22px] uppercase cursor-pointer hover:text-white transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/#faq"
              className="text-[#B6C4E7] text-sm font-semibold leading-[22px] uppercase cursor-pointer hover:text-white transition-colors"
            >
              FAQ
            </Link>
            <Link
              href="/#contacts"
              className="text-[#B6C4E7] text-sm font-semibold leading-[22px] uppercase cursor-pointer hover:text-white transition-colors"
            >
              Contacts
            </Link>
          </div>
          <div className="max-md:hidden">
            <a className="button">My Account</a>
          </div>
          <div className="max-md:block hidden">
            <a className="button-mobile">
              <img src="../assets/account.svg" alt="account" />
            </a>
          </div>
        </div>
      </header>
      <main className="flex flex-col gap-10 max-w-[1406px] mx-auto py-20 max-md:py-4 px-4 font-[Unbounded]">
        <h1 className="text-white text-[50px] max-md:text-2xl font-semibold uppercase text-center">
          AFFILIATE PROGRAM AGREEMENT
          <br />
          (HEREINAFTER REFERRED TO AS "AGREEMENT")
        </h1>
        <div className="flex flex-col gap-5">
          <section className="flex flex-col gap-5">
            <h2 className="text-[#F3CB7D] text-xl font-semibold uppercase">
              1. Introduction
            </h2>
            <p className="text-white text-sm font-semibold uppercase">
              1.1. This Affiliate Program Agreement (the "Affiliate Agreement"
              or "Agreement") encompasses the terms and conditions set forth
              herein and any additional terms mutually agreed upon by the
              Company and the Affiliate.
            </p>
            <p className="text-white text-sm font-semibold uppercase">
              1.2. It is essential that you carefully review and understand both
              the terms and conditions detailed below and any supplementary
              terms agreed between the Company and the Affiliate.
            </p>
            <p className="text-white text-sm font-semibold uppercase">
              1.3. By registering an account on the website https://nurwin.com/
              and by selecting a checkbox confirming "I have read and agree to
              the Terms & Conditions, Data Protection and Cookie Policy", you
              acknowledge that you have read, understood and agreed to be
              legally bound by this Agreement. This Agreement constitutes a
              binding legal agreement between Fortunation Limited, a legal
              entity incorporated and officially registered in Belize under
              registration number 000041362, with its registered address at 9
              Barrack Road, Belize City, Belize ("Company") and you
              ("Affiliate"). The Company and the Affiliate are individually
              referred to as a "Party" and collectively as the "Parties".
            </p>
            <p className="text-white text-sm font-semibold uppercase">
              1.4. For any questions regarding the Affiliate Program Agreement,
              please contact us at partner.support@nurwin.com.
            </p>
          </section>

          <section className="flex flex-col gap-5">
            <h2 className="text-[#F3CB7D] text-xl font-semibold uppercase">
              2. Definitions
            </h2>
            <p className="text-white text-sm font-semibold uppercase">
              Affiliate refers to a webmaster (whether an individual or a legal
              entity) who complies with the terms outlined in this Affiliate
              Program Agreement. The Affiliate's primary role is to drive new
              users to the Company's platform and to promote the Company's
              products and services.
            </p>
            <p className="text-white text-sm font-semibold uppercase">
              Affiliate Account is a personal account of the Affiliate in the
              Affiliate Program.
            </p>
            <p className="text-white text-sm font-semibold uppercase">
              Affiliate Program is a collaborative arrangement between the
              Company and the Affiliate facilitated through the Company's
              platform, specifically https://nurwin.com/. Under this
              arrangement, the Affiliate may utilize its own platform(s) or
              resources to market the Company's services in exchange for
              compensation. The terms governing this cooperation are outlined
              herein and are deemed accepted by the Affiliate upon registration
              for the Affiliate Program via https://nurwin.com/.
            </p>
            <p className="text-white text-sm font-semibold uppercase">
              Advertisement encompasses marketing and creative materials,
              including but not limited to banners, direct links, reviews,
              landing pages, or similar content. These materials, provided or
              otherwise made accessible by one Party to the other, are designed
              to attract prospective Referred Customers through the designated
              Link(s) to the Company's Website(s).
            </p>
            <p className="text-white text-sm font-semibold uppercase">
              Betting company is an Internet resource of Company, where users
              are offered online betting facilities.
            </p>
            <p className="text-white text-sm font-semibold uppercase">
              Company's Products are the service or a set of services offered to
              the users on the Company's resources.
            </p>
            <p className="text-white text-sm font-semibold uppercase">
              Commission shall mean the monetary consideration to be paid by the
              Company to the Affiliate for the provision of Services in
              accordance with this Agreement.
            </p>
          </section>

          <section className="flex flex-col gap-5">
            <h2 className="text-[#F3CB7D] text-xl font-semibold uppercase">
              3. General provisions
            </h2>
            <p className="text-white text-sm font-semibold uppercase">
              3.1. The Affiliate acknowledges and agrees that it is their
              responsibility to thoroughly review and understand the terms and
              conditions of the Affiliate Program before initiating any
              collaboration with the Company. Participation in the Affiliate
              Program constitutes acceptance of these terms.
            </p>
            <p className="text-white text-sm font-semibold uppercase">
              3.2. Membership in the Affiliate Program is strictly limited to
              individuals who are at least 18 years of age.
            </p>
            <p className="text-white text-sm font-semibold uppercase">
              3.3. The Company disclaims all liability to third parties arising
              from the Affiliate's failure to comply with the age requirement.
              In the event of a breach of this provision, the Company reserves
              the right to withhold payment of any commissions, terminate
              cooperation with the Affiliate, and suspend or permanently disable
              the Affiliate's account without further notice.
            </p>
            <p className="text-white text-sm font-semibold uppercase">
              3.4. The Affiliate is solely responsible for the confidentiality
              and security of their account credentials, including but not
              limited to login details and passwords. The Company shall bear no
              liability for any unauthorized access, misuse, or loss of the
              Affiliate's personal data, nor for any disclosure of such data to
              third parties, whether intentional or accidental.
            </p>
          </section>

          <section className="flex flex-col gap-5">
            <h2 className="text-[#F3CB7D] text-xl font-semibold uppercase">
              4. Placement of Advertisement
            </h2>
            <p className="text-white text-sm font-semibold uppercase">
              4.1. The cooperation with the Affiliate as part of the Affiliate
              Program implies the placement of Advertisement on the Affiliate's
              resource or resources.
            </p>
            <p className="text-white text-sm font-semibold uppercase">
              4.2. The Affiliate is obligated to ensure that all Advertisements
              comply with the applicable laws of the jurisdiction where they are
              placed, adhere to regulatory requirements, and conform to ethical
              standards. Only Advertisements moderated and expressly approved by
              the Company may be used.
            </p>
            <p className="text-white text-sm font-semibold uppercase">
              4.3. If the Affiliate creates its own Advertisements, such content
              must be submitted to the Company's representative for moderation
              and approval prior to publication.
            </p>
          </section>

          <section className="flex flex-col gap-5">
            <h2 className="text-[#F3CB7D] text-xl font-semibold uppercase">
              5. Sources of traffic
            </h2>
            <p className="text-white text-sm font-semibold uppercase">
              5.1. At the time of registration, the Affiliate must disclose
              detailed and accurate information regarding the sources of traffic
              it intends to utilize for cooperation with the Company.
            </p>
            <p className="text-white text-sm font-semibold uppercase">
              5.2. Any deliberate concealment or misrepresentation of traffic
              sources by the Affiliate will be considered a serious breach of
              this Agreement. The Company reserves the right to impose punitive
              measures, including the suspension of Payments and the
              renegotiation of terms under the Affiliate Program.
            </p>
            <p className="text-white text-sm font-semibold uppercase">
              5.3. The Company's Moderation Service will actively monitor and
              evaluate the traffic sources utilized by the Affiliate to ensure
              compliance with this Agreement. For clarification or assistance
              regarding traffic sources, the Affiliate may contact the Affiliate
              Program Support team.
            </p>
          </section>

          <section className="flex flex-col gap-5">
            <h2 className="text-[#F3CB7D] text-xl font-semibold uppercase">
              6. Intellectual property and trademarks
            </h2>
            <p className="text-white text-sm font-semibold uppercase">
              6.1. The Affiliate acknowledges and agrees that the Company holds
              sole and exclusive ownership of all intellectual property rights
              related to any products and services provided by the Company and
              its associated Brands. Throughout the term of this Agreement, the
              Affiliate shall refrain from registering any trademarks, service
              marks, logos, brand names, trade names, domain names, or slogans
              that are identical or bear a confusing similarity to the Company's
              Brands.
            </p>
            <p className="text-white text-sm font-semibold uppercase">
              6.2. The Company grants the Affiliate a limited, non-exclusive,
              royalty-free, and revocable sub-license to use, display, perform,
              distribute, and promote the Brands, as well as to create a Link,
              strictly for marketing and promotional activities. This
              sub-license remains effective only for the duration of this
              Agreement and must comply with its terms and any additional
              guidelines provided by the Company from time to time.
            </p>
          </section>

          <section className="flex flex-col gap-5">
            <h2 className="text-[#F3CB7D] text-xl font-semibold uppercase">
              7. Data Protection
            </h2>
            <p className="text-white text-sm font-semibold uppercase">
              7.1. Each Party shall implement appropriate technical and
              organizational measures to ensure the security of Personal Data
              controlled or processed in connection with the activities under
              this Agreement.
            </p>
            <p className="text-white text-sm font-semibold uppercase">
              7.2. The Parties shall not collect, transmit, process, or use
              Personal Data obtained from Referred Customers in any manner that
              violates applicable Data Protection laws (including the GDPR,
              where relevant), regulations, or Good Industry Practices. Such
              actions shall also be consistent with any relevant privacy policy,
              terms of use, or similar documents.
            </p>
            <p className="text-white text-sm font-semibold uppercase">
              7.3. The Parties agree to fully comply with all applicable Data
              Protection laws when processing Personal Data, including the
              General Data Protection Regulation (GDPR), when applicable.
            </p>
          </section>

          <section className="flex flex-col gap-5">
            <h2 className="text-[#F3CB7D] text-xl font-semibold uppercase">
              8. Competition
            </h2>
            <p className="text-white text-sm font-semibold uppercase">
              8.1. The Affiliate is prohibited from contacting potential
              customers in a manner that would create competition between the
              Affiliate and the Company regarding the promotion of the website
              or websites.
            </p>
            <p className="text-white text-sm font-semibold uppercase">
              8.2. The Affiliate is not permitted to use spam emails, contextual
              advertising featuring any of the Company's Brands, or advertising
              formats such as clickunder and popunder as methods of promoting
              the Company.
            </p>
            <p className="text-white text-sm font-semibold uppercase">
              8.3. The Affiliate explicitly agrees not to offer, grant, or
              promise any form of incentive, whether financial or otherwise, to
              potential New Users of the Company for registering, making a
              deposit, or engaging in any action under the Affiliate Program,
              unless prior written consent is obtained from the Company.
            </p>
          </section>

          <section className="flex flex-col gap-5">
            <h2 className="text-[#F3CB7D] text-xl font-semibold uppercase">
              9. Confidential information
            </h2>
            <p className="text-white text-sm font-semibold uppercase">
              9.1. Upon termination of this Agreement, or at the earlier request
              of the disclosing Party, the Affiliate shall return to the Company
              all Confidential Information and Company property related to it,
              including all tangible forms of such information in the
              Affiliate's possession or control, and shall delete any copies of
              the aforementioned information.
            </p>
            <p className="text-white text-sm font-semibold uppercase">
              9.2. The Affiliate shall exercise the same level of care and take
              all reasonable measures to protect the Confidential Information
              from unauthorized disclosure, as the Affiliate uses to protect its
              own confidential information of similar importance, but in no case
              less than a reasonable standard of care.
            </p>
          </section>

          <section className="flex flex-col gap-5">
            <h2 className="text-[#F3CB7D] text-xl font-semibold uppercase">
              10. Commission for attracting New Users
            </h2>
            <p className="text-white text-sm font-semibold uppercase">
              The commission structure for affiliates who successfully attract
              new users will be determined on an individual, case-by-case basis.
              Specific terms, conditions, and commission rates will be mutually
              agreed upon based on factors such as the volume of users referred,
              the quality of the users, and the overall performance of the
              affiliate. This approach ensures flexibility to accommodate
              different scenarios and affiliate contributions effectively.
            </p>
          </section>

          <section className="flex flex-col gap-5">
            <h2 className="text-[#F3CB7D] text-xl font-semibold uppercase">
              11. Dispute settlement procedure
            </h2>
            <p className="text-white text-sm font-semibold uppercase">
              11.1. The Affiliate has the right to challenge any decisions made
              by the representatives of the Affiliate Program. To do so, the
              Affiliate must contact the Affiliate Program Support Service and
              present its arguments.
            </p>
            <p className="text-white text-sm font-semibold uppercase">
              11.2. All communication from the Affiliate must be submitted in
              writing to the official email address of the Affiliate Program
              Support Service. The contact details of the Support Service are
              provided on the Affiliate Program's website.
            </p>
            <p className="text-white text-sm font-semibold uppercase">
              11.3. The Affiliate Program Support Service reserves the right to
              refuse consideration of a complaint if the Affiliate fails to
              provide sufficient evidence to demonstrate the absence of a
              violation.
            </p>
          </section>

          <section className="flex flex-col gap-5">
            <h2 className="text-[#F3CB7D] text-xl font-semibold uppercase">
              12. Disclaimers
            </h2>
            <p className="text-white text-sm font-semibold uppercase">
              12.1. Your marketing and advertising activities related to the
              promoted sites are conducted at your own risk. The marketing
              materials, instructions, policies, guidelines, and/or content
              provided to you or made available by us are supplied "as is."
            </p>
            <p className="text-white text-sm font-semibold uppercase">
              12.2. You are solely responsible for ensuring that your marketing
              and advertising of the promoted sites comply with all relevant
              laws. If you have any concerns, doubts, or become aware that the
              marketing materials, instructions, policies, guidelines, or
              content provided or made available by us do not comply with
              applicable laws, your exclusive course of action will be to
              immediately halt all marketing and advertising activities related
              to the promoted sites.
            </p>
          </section>

          <section className="flex flex-col gap-5">
            <h2 className="text-[#F3CB7D] text-xl font-semibold uppercase">
              13. Limitation of liability
            </h2>
            <p className="text-white text-sm font-semibold uppercase">
              13.1. The Company shall not be liable, whether in contract, tort
              (including negligence), for breach of statutory duty, or in any
              other way, for any: (i) actual or expected indirect, special, or
              consequential loss or damage; (ii) loss of opportunity,
              anticipated savings, or wasted expenditure; (iii) loss of
              contracts, business, profits, or revenues; (iv) loss of goodwill
              or reputation; and/or (v) loss of data.
            </p>
            <p className="text-white text-sm font-semibold uppercase">
              13.2. The Company's total liability under this Agreement shall be
              limited to the lesser of: (i) the total commission paid to the
              Affiliate under this Agreement during the three (3) month period
              immediately preceding the date on which the liability arose, or
              (ii) 10,000 euros.
            </p>
          </section>

          <section className="flex flex-col gap-5">
            <h2 className="text-[#F3CB7D] text-xl font-semibold uppercase">
              14. Force Majeure
            </h2>
            <p className="text-white text-sm font-semibold uppercase">
              14.1. The Party affected by the Force Majeure Event (the "Affected
              Party") shall immediately notify the other Party in writing.
              Following such notification, the Affected Party's relevant
              obligations under this Agreement shall be suspended until the
              Force Majeure Event no longer adversely affects its ability to
              perform.
            </p>
            <p className="text-white text-sm font-semibold uppercase">
              14.2. Neither Party shall be held liable for any delay or failure
              in performance of its obligations under this Agreement due to
              causes beyond its reasonable control (a "Force Majeure Event"),
              including, but not limited to, strikes, labor disputes, riots,
              insurrections, civil disturbances, fires, floods, storms,
              explosions, acts of God, war (declared or undeclared), military
              conflicts, or governmental actions.
            </p>
          </section>
        </div>
      </main>

      <section className="flex justify-center items-center w-full px-14 max-md:hidden py-20">
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
            <a
              className="button"
              href="https://my.nurwin.partners/registration"
            >
              My Account
            </a>
          </div>
          <div className="min-w-[438px] h-[1px]">
            <img
              className="absolute bottom-0 right-0"
              src="../assets/woman.png"
              alt="woman"
            />
          </div>
          <img
            className="absolute -top-16 right-[45%]"
            src="../assets/coin-1.png"
            alt="coin"
          />
          <img
            className="absolute -bottom-16 -left-18"
            src="../assets/coin-2.png"
            alt="coin"
          />
          <img
            className="absolute -bottom-22 right-[31%]"
            src="../assets/heart.png"
            alt="heart"
          />
        </div>
      </section>

      <section className="flex-col gap-8 hidden max-md:flex max-md:py-10">
        <div className="flex flex-col relative">
          <img
            className="absolute top-0 z-10 w-[25%]"
            src="../assets/coin-1.png"
            alt="coin"
          />
          <img
            className="absolute -bottom-10 -left-5 z-10 w-[25%]"
            src="../assets/coin-2.png"
            alt="coin"
          />
          <div className="relative overflow-hidden">
            <img
              className="absolute -right-10 bottom-0 z-10 w-[25%]"
              src="../assets/heart.png"
              alt="heart"
            />
            <img
              className="w-full"
              src="../assets/woman-mobile.png"
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
              <a
                className="button"
                href="https://my.nurwin.partners/registration"
              >
                My Account
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer
        className="bg-[url(../assets/bg-footer.svg)] h-[500px] flex items-end px-4"
        id="contacts"
      >
        <div className="w-full max-w-[1114px] mx-auto mb-16 max-md:mb-8">
          <p className="text-[32px]/[74px] font-semibold uppercase text-white font-[Unbounded] max-md:text-center">
            CONTACTS
          </p>
          <div className="flex gap-[88px] max-md:gap-6 mt-[33px] max-md:mt-6 mb-[86px] max-md:mb-11 flex-wrap max-md:flex-col">
            <div className="flex flex-col gap-4 max-md:gap-1 items-start max-md:items-center">
              <p className="text-[#B6C4E7] text-sm font-semibold uppercase font-[Inter]">
                Email address for additional information
              </p>
              <a
                href="mailto:partner.support@nurwin.com"
                className="text-white text-[26px] max-md:text-[16px] font-semibold uppercase font-[Unbounded]"
              >
                partner.support@nurwin.com
              </a>
            </div>
            <div className="flex flex-col gap-4 max-md:gap-1 items-start max-md:items-center">
              <p className="text-[#B6C4E7] text-sm font-semibold uppercase font-[Inter]">
                telegram
              </p>
              <a
                href="https://t.me/slotsngo_support"
                className="text-white text-[26px] max-md:text-[16px] font-semibold uppercase font-[Unbounded]"
              >
                @slotsngo_support
              </a>
            </div>
          </div>
          <div className="flex flex-row gap-10 max-md:flex-col-reverse max-md:items-center">
            <p className="text-[#B6C4E7] text-sm font-semibold uppercase font-[Inter] max-md:text-center">
              ALL RIGHTS RESERVED ©2025
            </p>
            <Link
              className="text-[#E7D6B6] text-sm font-semibold uppercase font-[Inter] max-md:text-center"
              href="/terms"
            >
              terms and conditions
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
