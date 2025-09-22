import Link from "next/link";
import Image from "next/image";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image src="/images/reactjs.jpg" width={200} height={150} alt="React" />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <br />
        <div className="wd-dashboard-course"> 
          <Link href="/Courses/2345" className="wd-dashboard-course-link">
            <Image src="/images/javascript.jpg" width={200} height={150} alt="JavaScript" />
            <div>
              <h5> CS2345 JavaScript </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer using JS as the language.
              </p>
              <button> Go </button>
              <br />
            </div>
          </Link>

        </div>
        <br />

        <div className="wd-dashboard-course">
          <Link href="/Courses/3456" className="wd-dashboard-course-link">
            <Image src="/images/html.jpg" width={200} height={150} alt="HTML" />
            <div>
              <h5> CS3456 HTML </h5>
              <p className="wd-dashboard-course-title">
                Learn the structure of the webpages.
              </p>
              <button> Go </button>
              <br />
            </div>
          </Link> 
          </div>
          <br />
        <div className="wd-dashboard-course">
          <Link href="/Courses/4567" className="wd-dashboard-course-link">
            <Image src="/images/css.jpg" width={200} height={150} alt="HTML" />
            <div>
              <h5> CS4567 CSS </h5>
              <p className="wd-dashboard-course-title">
                Learn to style and beautify the skeleton of HTML.
              </p>
              <button> Go </button>
              <br />
            </div>
          </Link> 
          </div>
          <br />
        <div className="wd-dashboard-course">
          <Link href="/Courses/5678" className="wd-dashboard-course-link">
            <Image src="/images/node3.jpg" width={200} height={150} alt="NodeJS" />
            <div>
              <h5> CS5678 NodeJS </h5>
              <p className="wd-dashboard-course-title">
                Welcome to the server side.
              </p>
              <button> Go </button>
              <br />
            </div>
          </Link> 
          </div>
          <br />
          <div className="wd-dashboard-course">
          <Link href="/Courses/6789" className="wd-dashboard-course-link">
            <Image src="/images/next.jpg" width={200} height={150} alt="NextJS" />
            <div>
              <h5> CS6789 NextJS </h5>
              <p className="wd-dashboard-course-title">
                Everything in a nutshell.
              </p>
              <button> Go </button>
              <br />
            </div>
          </Link> 
          </div>
          <br />
          <div className="wd-dashboard-course">
          <Link href="/Courses/7891" className="wd-dashboard-course-link">
            <Image src="/images/redux.jpg" width={200} height={150} alt="Redux" />
            <div>
              <h5> CS7891 redux </h5>
              <p className="wd-dashboard-course-title">
                After all this its important.
              </p>
              <button> Go </button>
              <br />
            </div>
          </Link> 
          </div>
          <br />
          <div className="wd-dashboard-course">
          <Link href="/Courses/8912" className="wd-dashboard-course-link">
            <Image src="/images/cloud.jpg" width={200} height={150} alt="cloud" />
            <div>
              <h5> CS8912 cloud </h5>
              <p className="wd-dashboard-course-title">
                Learn cloud.
              </p>
              <button> Go </button>
              <br />
            </div>
          </Link> 
          </div>


      </div>
    </div>
);}
