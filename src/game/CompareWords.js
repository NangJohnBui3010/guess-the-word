export function compareWords(a,b){
    let res = Array(b.length).fill(0)
    const map = new Map()
    //Count occurrences of each characters
    for(let i = 0; i < b.length; i++){
        if(map.has(b[i]))
            map.set(b[i], map.get(b[i])+1)
        else 
            map.set(b[i],1)
    }
    //Check corrected words first
    for(let i = 0; i < b.length; i++){
        if(a[i] === b[i]){
            res[i] = 3
            map.set(b[i],map.get(b[i])-1);
        }
    }
    //Check wrong occurence and wrong words
    for(let i = 0; i < b.length; i++){
        if(res[i] == 0){
            if(b.includes(a[i]) && map.get(a[i]) > 0){
                res[i] = 2
                map.set(a[i],map.get(a[i])-1);
            }else{
                res[i] = 1
            }
        }
    }
    return res;
}
let s1 = "mmmmml"
let s2 = "mammal"
let s3 = "llat"
let s4 = "toll"
console.log(compareWords(s3,s4))