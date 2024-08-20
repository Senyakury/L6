// 1
// interface Iindetifier {
//     [key : string]: string | number
//     num:number
//     str:string
// }
// ________________________________________________________
// 2
// interface Keys {
//     [key:string]: (...args: any[]) => any;
// }
// ________________________________________________________
// 3
// interface Keys {
//     [key:number]:string
// }
// ________________________________________________________
// 4
// interface interface{
//     [key:string]:string|number
//     name:string
//     age:number
// }
// ________________________________________________________
// 5
// interface Super{
//     [key : string]:string|number|symbol
// }
// interface Sub extends Super{
//     name:string
//     age:number
//     code:symbol
// }
// ________________________________________________________
// 6
// interface NumberType {
//     type: "number";
//     value: number;
// }

// interface StringType {
//     type: "string";
//     value: string;
// }

// interface SymbolType {
//     type: "symbol";
//     value: symbol;
// }

// type Type = NumberType | StringType | SymbolType;

// interface dummy {
//     [key:string]:Type
// }
// function ProveKeys (obj:dummy,keys:[]):boolean{
//     return keys.every(key => obj[key].type === "number")
// }