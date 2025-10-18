export default function FilterFunction() {
    let numberArray = [1,2,3,4,5,6]
    let numbersGreaterThan2 = numberArray.filter((a) => a > 2)
    let evenNumbers = numberArray.filter((a) => a % 2 === 0)
    let oddNumbers = numberArray.filter((a) => a % 2 !== 0)
    return (
    <div id="wd-filter-function">
      <h4>Filter Function</h4>
      numbersGreaterThan2 = {numbersGreaterThan2}  <br />
      evenNumbers = {evenNumbers}    <br />
      oddNumbers = {oddNumbers}      <hr />
    </div>
);

}