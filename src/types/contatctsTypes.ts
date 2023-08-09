export interface IContact  {
    id: string;
    name: string; 
    number: string;
}

export interface IEditContact {
    id: string;
    item: Pick<IContact, 'name' | 'number' >
}

