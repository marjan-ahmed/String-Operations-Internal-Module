import { concatenate, toUpperCase, toLowerCase, reverseString } from "./internal module/stringOperations";

function main() {
    console.log(concatenate("Hello", "World"));
    console.log(toUpperCase("marjan"));
    console.log(toLowerCase("MARJAN"));
    console.log(reverseString("marjan"));
}


export default main;