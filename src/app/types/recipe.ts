import { createdBy } from "./user"

export interface Recipe{
    _id: string,
    title: string,
    ingredients: string[],
    instructions: string,
    createdBy: createdBy,
    imageUrl: string
    __v: number,
}

export interface RecipeforEdit{
    id: string,
    title: string,
    ingredients: string,
    instructions: string,
    createdBy: string,
    imageUrl: string
    __v: number,
}