import { IGDPRProps } from "../../../interfaces/GDPR/IGDPRProps";

const PrivacyPolicy = (props: IGDPRProps) => {
  const { headingText } = props;

  return (
    <div className="relative">
      <div className="max-w-screen-xl mx-auto py-10 lg:py-14">
        <div className="flex flex-col items-center px-4 sm:px-6 lg:px-4">
          <h1 className="text-4xl sm:text-5xl font-black tracking-wide text-center text-gray-900 mb-10 w-full">
            {headingText}
          </h1>
          <div className="text-lg text-gray-800 w-full">
            <p className="mt-2 leading-loose">Last updated: January 1, 2024</p>

            <p className="mt-2 leading-loose">
              This Privacy Policy describes Our policies and procedures on the
              collection, use and disclosure of Your information when You use
              the Service and tells You about Your privacy rights and how the
              law protects You.
            </p>

            <p className="mt-2 leading-loose">
              We use Your Personal data to provide and improve the Service. By
              using the Service, You agree to the collection and use of
              information in accordance with this Privacy Policy.
            </p>

            <h2 className="text-3xl font-bold mt-10">
              Interpretation and Definitions
            </h2>
            <h2 className="text-3xl font-bold mt-10">Interpretation</h2>
            <p className="mt-2 leading-loose">
              The words of which the initial letter is capitalized have meanings
              defined under the following conditions.
            </p>
            <p className="mt-2 leading-loose">
              The following definitions shall have the same meaning regardless
              of whether they appear in singular or in plural.
            </p>

            <h2 className="text-3xl font-bold mt-10">Definitions</h2>
            <p className="mt-2 leading-loose">
              For the purposes of this Privacy Policy:
            </p>
            <ul className="list-disc list-inside">
              <li className="ml-2 mb-3">
                <p className="mt-2 leading-loose mt-0 inline leading-normal">
                  <strong>You</strong> means the individual accessing or using
                  the Service, or the company, or other legal entity on behalf
                  of which such individual is accessing or using the Service, as
                  applicable.
                </p>
              </li>
              <li className="ml-2 mb-3">
                <p className="mt-2 leading-loose mt-0 inline leading-normal">
                  <strong>Company</strong> (referred to as either "the Company",
                  "We", "Us" or "Our" in this Agreement) refers to Treact.
                </p>
              </li>
              <li className="ml-2 mb-3">
                <strong>Affiliate</strong> means an entity that controls, is
                controlled by or is under common control with a party, where
                "control" means ownership of 50% or more of the shares, equity
                interest or other securities entitled to vote for election of
                directors or other managing authority.
              </li>
              <li className="ml-2 mb-3">
                <strong>Account</strong> means a unique account created for You
                to access our Service or parts of our Service.
              </li>
              <li className="ml-2 mb-3">
                <strong>Website</strong> refers to Treact, accessible from
                https://treact.com
              </li>{" "}
              <li className="ml-2 mb-3">
                <strong>Service</strong> refers to the Website.
              </li>
              <li className="ml-2 mb-3">
                <strong>Country</strong> refers to: Maharashtra, India
              </li>
              <li className="ml-2 mb-3">
                <strong>Service Provider</strong> means any natural or legal
                person who processes the data on behalf of the Company. It
                refers to third-party companies or individuals employed by the
                Company to facilitate the Service, to provide the Service on
                behalf of the Company, to perform services related to the
                Service or to assist the Company in analyzing how the Service is
                used.
              </li>
              <li className="ml-2 mb-3">
                <strong>Third-party Social Media Service</strong> refers to any
                website or any social network website through which a User can
                log in or create an account to use the Service.
              </li>
              <li className="ml-2 mb-3">
                <strong>Personal Data</strong> is any information that relates
                to an identified or identifiable individual.
              </li>
              <li className="ml-2 mb-3">
                <strong>Cookies</strong> are small files that are placed on Your
                computer, mobile device or any other device by a website,
                containing the details of Your browsing history on that website
                among its many uses.
              </li>{" "}
              <li className="ml-2 mb-3">
                <strong>Usage Data</strong> refers to data collected
                automatically, either generated by the use of the Service or
                from the Service infrastructure itself (for example, the
                duration of a page visit).
              </li>
            </ul>

            <h2 className="text-3xl font-bold mt-10">
              Collecting and Using Your Personal Data
            </h2>
            <h2 className="text-3xl font-bold mt-10">
              Types of Data Collected
            </h2>

            <h3 className="text-xl font-bold mt-6">Personal Data</h3>
            <p className="mt-2 leading-loose">
              While using Our Service, We may ask You to provide Us with certain
              personally identifiable information that can be used to contact or
              identify You. Personally identifiable information may include, but
              is not limited to:
            </p>
            <ul className="list-disc list-inside">
              <li className="ml-2 mb-3">Email address</li>{" "}
              <li className="ml-2 mb-3">First name and last name</li>{" "}
              <li className="ml-2 mb-3">Phone number</li>{" "}
              <li className="ml-2 mb-3">
                Address, State, Province, ZIP/Postal code, City
              </li>{" "}
              <li className="ml-2 mb-3">Usage Data</li>
            </ul>

            <h3 className="text-xl font-bold mt-6">Usage Data</h3>
            <p className="mt-2 leading-loose">
              Usage Data is collected automatically when using the Service.
            </p>
            <p className="mt-2 leading-loose">
              Usage Data may include information such as Your Device's Internet
              Protocol address (e.g. IP address), browser type, browser version,
              the pages of our Service that You visit, the time and date of Your
              visit, the time spent on those pages, unique device identifiers
              and other diagnostic data.
            </p>
            <p className="mt-2 leading-loose">
              When You access the Service by or through a mobile device, We may
              collect certain information automatically, including, but not
              limited to, the type of mobile device You use, Your mobile device
              unique ID, the IP address of Your mobile device, Your mobile
              operating system, the type of mobile Internet browser You use,
              unique device identifiers and other diagnostic data.
            </p>
            <p className="mt-2 leading-loose">
              We may also collect information that Your browser sends whenever
              You visit our Service or when You access the Service by or through
              a mobile device.
            </p>

            <h3 className="text-xl font-bold mt-6">
              Tracking Technologies and Cookies
            </h3>
            <p className="mt-2 leading-loose">
              We use Cookies and similar tracking technologies to track the
              activity on Our Service and store certain information. Tracking
              technologies used are beacons, tags, and scripts to collect and
              track information and to improve and analyze Our Service.
            </p>
            <p className="mt-2 leading-loose">
              You can instruct Your browser to refuse all Cookies or to indicate
              when a Cookie is being sent. However, if You do not accept
              Cookies, You may not be able to use some parts of our Service.
            </p>
            <p className="mt-2 leading-loose">
              Cookies can be "Persistent" or "Session" Cookies. Persistent
              Cookies remain on your personal computer or mobile device when You
              go offline, while Session Cookies are deleted as soon as You close
              your web browser. Learn more about cookies:{" "}
              <a href="https://www.termsfeed.com/blog/cookies/">
                All About Cookies
              </a>
              .
            </p>
            <p className="mt-2 leading-loose">
              We use both session and persistent Cookies for the purposes set
              out below:
            </p>
            <ul className="list-disc list-inside">
              <li className="ml-2 mb-3">
                <strong>Necessary / Essential Cookies</strong>
                <p className="mt-2 leading-loose">Type: Session Cookies</p>
                <p className="mt-2 leading-loose">Administered by: Us</p>
                <p className="mt-2 leading-loose">
                  Purpose: These Cookies are essential to provide You with
                  services available through the Website and to enable You to
                  use some of its features. They help to authenticate users and
                  prevent fraudulent use of user accounts. Without these
                  Cookies, the services that You have asked for cannot be
                  provided, and We only use these Cookies to provide You with
                  those services.
                </p>
              </li>
              <li className="ml-2 mb-3">
                <strong>Cookies Policy / Notice Acceptance Cookies</strong>
                <p className="mt-2 leading-loose">Type: Persistent Cookies</p>
                <p className="mt-2 leading-loose">Administered by: Us</p>
                <p className="mt-2 leading-loose">
                  Purpose: These Cookies identify if users have accepted the use
                  of cookies on the Website.
                </p>
              </li>
              <li className="ml-2 mb-3">
                <strong>Functionality Cookies</strong>
                <p className="mt-2 leading-loose">Type: Persistent Cookies</p>
                <p className="mt-2 leading-loose">Administered by: Us</p>
                <p className="mt-2 leading-loose">
                  Purpose: These Cookies allow us to remember choices You make
                  when You use the Website, such as remembering your login
                  details or language preference. The purpose of these Cookies
                  is to provide You with a more personal experience and to avoid
                  You having to re-enter your preferences every time You use the
                  Website.
                </p>
              </li>
            </ul>
            <p className="mt-2 leading-loose">
              For more information about the cookies we use and your choices
              regarding cookies, please visit our Cookies Policy.
            </p>

            <h2 className="text-3xl font-bold mt-10">
              Use of Your Personal Data
            </h2>
            <p className="mt-2 leading-loose">
              The Company may use Personal Data for the following purposes:
            </p>
            <ul className="list-disc list-inside">
              <li className="ml-2 mb-3">
                <strong>To provide and maintain our Service</strong>, including
                to monitor the usage of our Service.
              </li>
              <li className="ml-2 mb-3">
                <strong>To manage Your Account:</strong> to manage Your
                registration as a user of the Service. The Personal Data You
                provide can give You access to different functionalities of the
                Service that are available to You as a registered user.
              </li>
              <li className="ml-2 mb-3">
                <strong>For the performance of a contract:</strong> the
                development, compliance and undertaking of the purchase contract
                for the products, items or services You have purchased or of any
                other contract with Us through the Service.
              </li>
              <li className="ml-2 mb-3">
                <strong>To contact You:</strong> To contact You by email,
                telephone calls, SMS, or other equivalent forms of electronic
                communication, such as a mobile application's push notifications
                regarding updates or informative communications related to the
                functionalities, products or contracted services, including the
                security updates, when necessary or reasonable for their
                implementation.
              </li>
              <li className="ml-2 mb-3">
                <strong>To provide You</strong> with news, special offers and
                general information about other goods, services and events which
                we offer that are similar to those that you have already
                purchased or enquired about unless You have opted not to receive
                such information.
              </li>
              <li className="ml-2 mb-3">
                <strong>To manage Your requests:</strong> To attend and manage
                Your requests to Us.
              </li>
            </ul>

            <p className="mt-2 leading-loose">
              We may share your personal information in the following
              situations:
            </p>

            <ul className="list-disc list-inside">
              <li className="ml-2 mb-3">
                <strong>With Service Providers:</strong> We may share Your
                personal information with Service Providers to monitor and
                analyze the use of our Service, to contact You.
              </li>
              <li className="ml-2 mb-3">
                <strong>For Business transfers:</strong> We may share or
                transfer Your personal information in connection with, or during
                negotiations of, any merger, sale of Company assets, financing,
                or acquisition of all or a portion of our business to another
                company.
              </li>
              <li className="ml-2 mb-3">
                <strong>With Affiliates:</strong> We may share Your information
                with Our affiliates, in which case we will require those
                affiliates to honor this Privacy Policy. Affiliates include Our
                parent company and any other subsidiaries, joint venture
                partners or other companies that We control or that are under
                common control with Us.
              </li>
              <li className="ml-2 mb-3">
                <strong>With Business partners:</strong> We may share Your
                information with Our business partners to offer You certain
                products, services or promotions.
              </li>
              <li className="ml-2 mb-3">
                <strong>With other users:</strong> when You share personal
                information or otherwise interact in the public areas with other
                users, such information may be viewed by all users and may be
                publicly distributed outside. If You interact with other users
                or register through a Third-Party Social Media Service, Your
                contacts on the Third-Party Social Media Service may see Your
                name, profile, pictures and description of Your activity.
                Similarly, other users will be able to view descriptions of Your
                activity, communicate with You and view Your profile.
              </li>
            </ul>

            <h2 className="text-3xl font-bold mt-10">
              Retention of Your Personal Data
            </h2>
            <p className="mt-2 leading-loose">
              The Company will retain Your Personal Data only for as long as is
              necessary for the purposes set out in this Privacy Policy. We will
              retain and use Your Personal Data to the extent necessary to
              comply with our legal obligations (for example, if we are required
              to retain your data to comply with applicable laws), resolve
              disputes, and enforce our legal agreements and policies.
            </p>
            <p className="mt-2 leading-loose">
              The Company will also retain Usage Data for internal analysis
              purposes. Usage Data is generally retained for a shorter period of
              time, except when this data is used to strengthen the security or
              to improve the functionality of Our Service, or We are legally
              obligated to retain this data for longer time periods.
            </p>

            <h2 className="text-3xl font-bold mt-10">
              Transfer of Your Personal Data
            </h2>
            <p className="mt-2 leading-loose">
              Your information, including Personal Data, is processed at the
              Company's operating offices and in any other places where the
              parties involved in the processing are located. It means that this
              information may be transferred to — and maintained on — computers
              located outside of Your state, province, country or other
              governmental jurisdiction where the data protection laws may
              differ than those from Your jurisdiction.
            </p>
            <p className="mt-2 leading-loose">
              Your consent to this Privacy Policy followed by Your submission of
              such information represents Your agreement to that transfer.
            </p>
            <p className="mt-2 leading-loose">
              The Company will take all steps reasonably necessary to ensure
              that Your data is treated securely and in accordance with this
              Privacy Policy and no transfer of Your Personal Data will take
              place to an organization or a country unless there are adequate
              controls in place including the security of Your data and other
              personal information.
            </p>

            <h2 className="text-3xl font-bold mt-10">
              Disclosure of Your Personal Data
            </h2>
            <h3 className="text-xl font-bold mt-6">Business Transactions</h3>
            <p className="mt-2 leading-loose">
              If the Company is involved in a merger, acquisition or asset sale,
              Your Personal Data may be transferred. We will provide notice
              before Your Personal Data is transferred and becomes subject to a
              different Privacy Policy.
            </p>
            <h3 className="text-xl font-bold mt-6">Law enforcement</h3>
            <p className="mt-2 leading-loose">
              Under certain circumstances, the Company may be required to
              disclose Your Personal Data if required to do so by law or in
              response to valid requests by public authorities (e.g. a court or
              a government agency).
            </p>
            <h3 className="text-xl font-bold mt-6">Other legal requirements</h3>
            <p className="mt-2 leading-loose">
              The Company may disclose Your Personal Data in the good faith
              belief that such action is necessary to:
            </p>
            <ul className="list-disc list-inside">
              <li className="ml-2 mb-3">Comply with a legal obligation</li>
              <li className="ml-2 mb-3">
                Protect and defend the rights or property of the Company
              </li>
              <li className="ml-2 mb-3">
                Prevent or investigate possible wrongdoing in connection with
                the Service
              </li>
              <li className="ml-2 mb-3">
                Protect the personal safety of Users of the Service or the
                public
              </li>
              <li className="ml-2 mb-3">Protect against legal liability</li>
            </ul>

            <h2 className="text-3xl font-bold mt-10">
              Security of Your Personal Data
            </h2>
            <p className="mt-2 leading-loose">
              The security of Your Personal Data is important to Us, but
              remember that no method of transmission over the Internet, or
              method of electronic storage is 100% secure. While We strive to
              use commercially acceptable means to protect Your Personal Data,
              We cannot guarantee its absolute security.
            </p>

            <h2 className="text-3xl font-bold mt-10">Children's Privacy</h2>
            <p className="mt-2 leading-loose">
              Our Service does not address anyone under the age of 13. We do not
              knowingly collect personally identifiable information from anyone
              under the age of 13. If You are a parent or guardian and You are
              aware that Your child has provided Us with Personal Data, please
              contact Us. If We become aware that We have collected Personal
              Data from anyone under the age of 13 without verification of
              parental consent, We take steps to remove that information from
              Our servers.
            </p>
            <p className="mt-2 leading-loose">
              If We need to rely on consent as a legal basis for processing Your
              information and Your country requires consent from a parent, We
              may require Your parent's consent before We collect and use that
              information.
            </p>

            <h2 className="text-3xl font-bold mt-10">
              Links to Other Websites
            </h2>
            <p className="mt-2 leading-loose">
              Our Service may contain links to other websites that are not
              operated by Us. If You click on a third party link, You will be
              directed to that third party's site. We strongly advise You to
              review the Privacy Policy of every site You visit.
            </p>
            <p className="mt-2 leading-loose">
              We have no control over and assume no responsibility for the
              content, privacy policies or practices of any third party sites or
              services.
            </p>

            <h2 className="text-3xl font-bold mt-10">
              Changes to this Privacy Policy
            </h2>
            <p className="mt-2 leading-loose">
              We may update our Privacy Policy from time to time. We will notify
              You of any changes by posting the new Privacy Policy on this page.
            </p>
            <p className="mt-2 leading-loose">
              We will let You know via email and/or a prominent notice on Our
              Service, prior to the change becoming effective and update the
              "Last updated" date at the top of this Privacy Policy.
            </p>
            <p className="mt-2 leading-loose">
              You are advised to review this Privacy Policy periodically for any
              changes. Changes to this Privacy Policy are effective when they
              are posted on this page.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;