import Link from "next/link"
export default function Assignments() {
  return (
    <div id="wd-assignments">
      <input placeholder="Search for Assignments"
             id="wd-search-assignment" />
      <button id="wd-add-assignment-group">+ Group</button>
      <button id="wd-add-assignment">+ Assignment</button>
      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total <button>+</button> </h3>
      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <Link href="/Courses/1234/Assignments/A1 - ENV + HTML"
             className="wd-assignment-link" >
            A1 - ENV + HTML
          </Link> </li>
          Multiple modules | Not available until May 6 at 12am| <br />
          Due May 13 at 11:59pm| 100 pts
          
        <li className="wd-assignment-list-item">
            <Link href="/Courses/1234/Assignments/234"
             className="wd-assignment-link" >
            A2 - CSS + BOOTSTRAP
          </Link> </li>
          Multiple modules | Not available until May 13 at 12am| <br />
          Due May 20 at 11:59pm| 100 pts

        <li className="wd-assignment-list-item">
            <Link href="/Courses/1234/Assignments/345"
             className="wd-assignment-link" >
            A3 - JAVASCRIPT + REACT
          </Link> </li>
          Multiple modules | Not available until May 20 at 12am| <br />
          Due May 27 at 11:59pm| 100 pts  
          {/* Complete On Your Own */}

        <li className="wd-assignment-list-item">
            <Link href="/Courses/1234/Assignments/456"
             className="wd-assignment-link" >
            A4 - NEXT + NODE
          </Link> </li>
          Multiple modules | Not available until May 28 at 12am| <br />
          Due June 5th at 11:59pm| 100 pts

        <li className="wd-assignment-list-item">
            <Link href="/Courses/1234/Assignments/567"
             className="wd-assignment-link" >
            A5 - REDUX 
          </Link> </li>
          Multiple modules | Not available until June 6 at 12am| <br />
          Due June 13th at 11:59pm| 100 pts
        
      </ul>
    </div>
);}
