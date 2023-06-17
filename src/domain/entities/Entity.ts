import crypto from 'crypto'

export abstract class Entity<T> {
    protected _id: string;
    
    constructor(props: T, id?: string){
        this._id = id ?? crypto.randomUUID();
        
    }
}