export class Mood {
    id: number; 
    description: String;
    class: String; 

    constructor(id_: number, description_: String, class_: String)
    {
        this.id = id_;
        this.description = description_;
        this.class = class_;
    }
}