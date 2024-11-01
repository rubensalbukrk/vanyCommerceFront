export default interface Produto {
    id?: number
    estoque: boolean | string | number
    title: string
    price: number
    descrition: string 
    descount: number
    img: any;
    count?: number
}