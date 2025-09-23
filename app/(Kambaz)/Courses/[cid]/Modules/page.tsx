export default function Modules() {
  return (
    <div>
      {/* Implement Collapse All button, View Progress button, etc. */}
      <button>Collapse All</button>
      <button>View Progress</button>
      <select  defaultValue={"PUBLISH ALL"}>
              <option value="PUBLISH ALL">PUBLISH ALL</option>
              <option value="PUBLISH LATER">PUBLISH LATER</option>
              <option value="PUBLISHED">PUBLISHED</option>

            </select>
      <button>+Module</button>

      <ul id="wd-modules">
        <li className="wd-module">
          <div className="wd-title">Week 1</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to the course</li>
                <li className="wd-content-item">Learn what is Web Development</li>
              </ul>
            </li>

            <li className="wd-lesson">
              <span className="wd-title">READING</span>
              <ul className="wd-content">
                <li className="wd-content-item">Full stack developer-chapter 1 : Introduction</li>
                <li className="wd-content-item">Full stack developer-chapter 2 : Creating User </li>
              </ul>
            </li>

            <li className="wd-lesson">
              <span className="wd-title">SLIDES</span>
              <ul className="wd-content">
                <li className="wd-content-item">introduction to web development</li>
                <li className="wd-content-item">Creating a HTTP server with node js </li>
                <li className="wd-content-item">Creating a React Application </li>

              </ul>
            </li>


          </ul>
        </li>
        <li className="wd-module">
          <div className="wd-title">Week 1 Lecture 2</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Learn how to create user interface with HTML</li>
                <li className="wd-content-item">Deploy the assignment to netlify</li>
              </ul>
            </li>

            <li className="wd-lesson">
              <span className="wd-title">SLIDES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Intro to HTML and DOM</li>
                <li className="wd-content-item">Formatting web content with heading </li>
                <li className="wd-content-item">Formatting content with lists and labels </li>

              </ul>
            </li>


          </ul>
        </li>

        <li className="wd-module">
          <div className="wd-title">Week 2 Lecture 1</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Adding styles</li>
                <li className="wd-content-item">Learning flex, position and box structure.</li>
              </ul>
            </li>

            <li className="wd-lesson">
              <span className="wd-title">READING</span>
              <ul className="wd-content">
                <li className="wd-content-item">CSS most used-chapter 1 : Introduction</li>
                <li className="wd-content-item">CSS essentials-chapter 2 : Creating complex layouts </li>
              </ul>
            </li>

            <li className="wd-lesson">
              <span className="wd-title">SLIDES</span>
              <ul className="wd-content">
                <li className="wd-content-item">introduction to styling </li>
                <li className="wd-content-item">Styling first webpage </li>
                

              </ul>
            </li>


          </ul>
        </li>
        


      </ul>
    </div>
);}
