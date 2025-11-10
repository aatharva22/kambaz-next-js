"use client"
import BooleanStateVariables from "./BooleanStateVariables";
import ClickEvent from "./ClickEvent";
import Counter from "./Counter";
import EventObject from "./EventObject";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import StringStateVariables from "./StringStateVariables";

function sayHello() {
    alert("Say Hello!")
}
export default function Lab4() {
    return(
        <div>
            <ClickEvent/>
            <PassingDataOnEvent/>
            <PassingFunctions TheFunction={sayHello}/> 
            <EventObject/>
            <Counter/>
            <BooleanStateVariables/>
            <StringStateVariables/>
        </div>
    )
}