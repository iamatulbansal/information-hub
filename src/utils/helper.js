//fetch Data
import data from "../db/questions.json";
function memoize(n) {
    let cache = {};
    return function (data) {
        if (n in cache) {
            return cache[n];
        } else {
            cache[n] = data;
            return cache[n];
        }
    };
}

const memoizeData = memoize("data");
export const mainData = memoizeData(data)


//filter data
export function filterData(props, techStackName) {
    let arr = [];
    for (let [__, value] of Object.entries(props)) {
        if (value.tags.includes(techStackName)) {
            arr.push(value);
        }
    }
    return arr;
}