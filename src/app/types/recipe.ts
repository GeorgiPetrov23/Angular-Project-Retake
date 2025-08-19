export interface Recipe{
    _id: string,
    title: string,
    ingredients: string[],
    instructions: string,
    userId: string,
    imageUrl: string
    __v: number,
}