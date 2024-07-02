class car{
     Engine=(hp: string, cc: number)=>{
        console.log(`The car horse power is ${hp} and engine capacity is ${cc}`);
        }
        doors: number= 4;
        tyreSize: string= `13"`;

}
let alto= new car();
alto.Engine("90hp", 660);
console.log(`${alto.doors} \n ${alto.tyreSize}`);

