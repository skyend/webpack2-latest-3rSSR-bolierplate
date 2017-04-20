import {
    keyCategorizer
} from "../util";

let keyCategorize = keyCategorizer("Counter");

export const INCREMENT = keyCategorize("INCREMENT");
export const DECREMENT = keyCategorize("DECREMENT");
export const SET = keyCategorize("SET");


export function ACTION_INCREMENT(){
    return {
        type : INCREMENT
    }
}

export function ACTION_DECREMENT(){
    return {
        type : DECREMENT
    }
}

export function ACTION_SET(_value){
    return {
        type : SET,
        count : _value
    }
}