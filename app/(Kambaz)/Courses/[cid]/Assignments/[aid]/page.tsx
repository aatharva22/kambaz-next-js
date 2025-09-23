
export default function AssignmentEditor() { 
  
  
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" defaultValue="A1 - ENV + HTML" /><br /><br />
      <textarea id="wd-description" rows={10} cols={20} defaultValue={"The assignment is available online Submit a link to the landing page of every sumbisson is essential."}>
        
      </textarea>
      <br />
      <table> 
        <tbody>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" defaultValue={100} />
                     </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select id="wd-group" defaultValue={"ASSIGNMENTS"}>
              <option value="ASSIGNMENTS">ASSIGNMENTS</option>
              <option value="GROUPS">GROUPS</option>
              <option value="PROJECT">PROJECT</option>

            </select>
            
          </td>
        </tr>
      
          <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade As</label>
          </td>
          <td>
            <select id="wd-display-grade-as" defaultValue={"PERCENTAGE"}>
              <option value="PERCENTAGE">PERCENTAGE </option>
              <option value="GRADE">GRADE</option>
              <option value="GPA">GPA</option>

            </select>
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Types</label>
          </td>
          <td>
            <select id="wd-submission-type" defaultValue={"ONLINE"}>
              <option value="ONLINE">ONLINE</option>
              <option value="INPERSON">INPERSON</option>
              <option value="CANVAS">CANVAS</option>

            </select>
          </td>
        </tr>

        <tr>
          <td align="right" valign="top"></td>
          <td >
            Online Entry Options <br />
            
            <input type="checkbox" name="online-entry" id="wd-text-entry"/>
            <label htmlFor="wd-text-entry">Text Entry</label><br/>

            <input type="checkbox" name="online-entry" id="wd-website-url"/>
            <label htmlFor="wd-website-url">Website URL</label><br/>

            <input type="checkbox" name="online-entry" id="wd-media-recordings"/>
            <label htmlFor="wd-media-recordings">Media Recording</label><br/>

            <input type="checkbox" name="online-entry" id="wd-student-annotation"/>
            <label htmlFor="wd-student-annotation">Student Annotations</label><br/>

            <input type="checkbox" name="online-entry" id="wd-file-upload"/>
            <label htmlFor="wd-file-upload">File Uploads</label><br/>
          </td>
        </tr>
        <tr><td><br /></td></tr>
        <tr >
           
          <td align="right" valign="top"></td>
          <td><label htmlFor="wd-assign-to">Assign Assign To</label></td>
        </tr>
        <tr>
          <td align="right" valign="top"></td>
          <td>
            <select id="wd-assign-to" defaultValue={"EVERYONE"}>
              <option value="EVERYONE">EVERYONE</option>
              <option value="TA">TA</option>
              <option value="FACULTY">FACULTY</option>

            </select>
            
          </td>
        </tr>

        <tr >
          <td align="right" valign="top"></td>
          <td><label htmlFor="wd-due-date">Due</label></td>
        </tr>
        <tr>
          <td align="right" valign="top"></td>
          <td><input type="date"
              defaultValue="2024-05-13"
              id="wd-due-date"/><br/></td>
        </tr>

        <tr >
          <td align="right" valign="top"></td>
          <td><label htmlFor="wd-available-from">Available from</label></td>
          <td><label htmlFor="wd-available-until">Until</label></td>

        </tr>
        <tr>
          <td align="right" valign="top"></td>
          <td><input type="date"
              defaultValue="2024-05-06"
              id="wd-available-from"/><br/></td>
          <td><input type="date"
              defaultValue="2024-05-20"
              id="wd-available-until"/><br/></td>
        </tr>
       
        {/* Complete on your own */}
        <tr><td><hr /></td>
        <td><hr /></td>
        <td><hr /></td>
        <td><hr /></td>
        <td><hr /></td><td><hr /></td><td><hr /></td><td><hr /></td><td><hr /></td></tr>

        </tbody>
        
        <tfoot>
          <tr><td align="right" valign="top"></td> 
          <td align="right" valign="top"></td>
          <td><button>Cancel</button>
          <button>Save</button></td>
          
          </tr>
        </tfoot>
      </table>
    </div>
);}
