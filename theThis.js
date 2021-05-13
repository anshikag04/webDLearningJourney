// this = {} -> OBJECT 

console.log(this);

function simpleFUnction() {
    console.log(this);
    let someArrow = () => {
        console.log(this);
    }
    someArrow()
}


let newSimpleFunction = simpleFUnction.bind({ name: "Anshika", isLOvely: true })
// simpleFUnction()
newSimpleFunction()


simpleFUnction.call({ name: "Ashutosh", isIntelligent: "ultra pro max" })
// simpleFUnction()

simpleFUnction.apply({ name: "shushi", isBest: "ULTRA PRO BEST" })
// simpleFUnction()


