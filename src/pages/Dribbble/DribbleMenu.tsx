import "./dribble.css";
const DribbbleMenu = () => {
  return (
    <nav>
      <ul className="flex items-center gap-x-10  text-[14px]">
        <li className="relative site-nav-main">
          <a className="font-bold site-nav-main__link" href="/">
            Explore
          </a>
          <ul className="site-nav-sub">
            <li>
              <a
                href="/shots/popular"
                className="site-nav-sub__link site-nav-sub__link--bold font-bold"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  role="img"
                  className="icon "
                >
                  <path
                    d="M22 7L14.1314 14.8686C13.7354 15.2646 13.5373 15.4627 13.309 15.5368C13.1082 15.6021 12.8918 15.6021 12.691 15.5368C12.4627 15.4627 12.2646 15.2646 11.8686 14.8686L9.13137 12.1314C8.73535 11.7354 8.53735 11.5373 8.30902 11.4632C8.10817 11.3979 7.89183 11.3979 7.69098 11.4632C7.46265 11.5373 7.26465 11.7354 6.86863 12.1314L2 17M22 7H15M22 7V14"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                Popular
              </a>
            </li>

            <li>
              <a
                href="/shots/recent"
                className="site-nav-sub__link site-nav-sub__link--bold font-bold"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  role="img"
                  className="icon "
                >
                  <path
                    d="M4.5 22V17M4.5 7V2M2 4.5H7M2 19.5H7M13 3L11.2658 7.50886C10.9838 8.24209 10.8428 8.60871 10.6235 8.91709C10.4292 9.1904 10.1904 9.42919 9.91709 9.62353C9.60871 9.84281 9.24209 9.98381 8.50886 10.2658L4 12L8.50886 13.7342C9.24209 14.0162 9.60871 14.1572 9.91709 14.3765C10.1904 14.5708 10.4292 14.8096 10.6235 15.0829C10.8428 15.3913 10.9838 15.7579 11.2658 16.4911L13 21L14.7342 16.4911C15.0162 15.7579 15.1572 15.3913 15.3765 15.0829C15.5708 14.8096 15.8096 14.5708 16.0829 14.3765C16.3913 14.1572 16.7579 14.0162 17.4911 13.7342L22 12L17.4911 10.2658C16.7579 9.98381 16.3913 9.8428 16.0829 9.62353C15.8096 9.42919 15.5708 9.1904 15.3765 8.91709C15.1572 8.60871 15.0162 8.24209 14.7342 7.50886L13 3Z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                New and Noteworthy
              </a>
            </li>

            <li className="site-nav-sub__divider"></li>

            <li>
              <a
                href="/shots/popular/product-design"
                className="site-nav-sub__link"
              >
                Product Design
              </a>
            </li>

            <li>
              <a
                href="/shots/popular/web-design"
                className="site-nav-sub__link"
              >
                Web Design
              </a>
            </li>

            <li>
              <a href="/shots/popular/animation" className="site-nav-sub__link">
                Animation
              </a>
            </li>

            <li>
              <a href="/shots/popular/branding" className="site-nav-sub__link">
                Branding
              </a>
            </li>

            <li>
              <a
                href="/shots/popular/illustration"
                className="site-nav-sub__link"
              >
                Illustration
              </a>
            </li>

            <li>
              <a href="/shots/popular/mobile" className="site-nav-sub__link">
                Mobile
              </a>
            </li>

            <li>
              <a
                href="/shots/popular/typography"
                className="site-nav-sub__link"
              >
                Typography
              </a>
            </li>

            <li>
              <a href="/shots/popular/print" className="site-nav-sub__link">
                Print
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a className="font-bold" href="">
            Hire a Designer
          </a>
        </li>
        <li>
          <a className="font-bold" href="">
            Find Jobs
          </a>
        </li>
        <li>
          <a className="font-bold" href="">
            Blog
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default DribbbleMenu;
