export default function Destructing() {
    const person = {name : "John", age: 25}
    const {name, age} = person
    // const name = person.name
    // const age = person.age
    const numbers = ["one", "two", "three"]
    const [first, second, third] = numbers 
    return (
   <div id="wd-destructing">
     <h2>Destructing</h2>
     <h3>Object Destructing</h3>
     {/* Here &#123 and &#125 are used for "{" and "}" in html  */}
     const &#123; name, age &#125; =
           &#123; name: &#123John&#125, age: 25 &#125;<br /><br />
     name = {name}<br />
     age = {age}
     <h3>Array Destructing</h3>
     const [first, second, third] = [&#123one&#125,&#123two&#125,&#123three&#125]<br/><br/>
     first = {first}<br />
     second = {second}<br />
     third = {third}<hr />
   </div>
);}

