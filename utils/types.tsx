export interface IProduct{
    id:number,
    title:string,
    price:number,
    thumbnail?:string
    images?:string[]
    state?:boolean
}