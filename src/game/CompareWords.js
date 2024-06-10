export function compareWords(a,b){
    let res = []
    for(let i = 0; i < a.length; i++){
        if(a[i] === b[i])
            res.push(3)
        else if(a[i] != b[i]){
            if(b.includes(a[i]))
                res.push(2)
            else res.push(1)
        }
    }
    return res;
}

let expectedValue = ["2","2","2","1","1"]
let s1 = "joebi"
let s2 = "ojenk"
console.log(compareWords(s1,s2))