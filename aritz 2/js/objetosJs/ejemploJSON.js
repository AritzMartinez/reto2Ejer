let objetoJSON = {"usuario":"user"," password ":"123456"};


let objetos = {" Personas":[
        {"nombre":"Jorge","edad":23} ,
        {"nombre":"Carlos","edad":17}
    ]};

document. getElementById ('content'). innerHTML = objetos.Personas [1]. nombre ;

let persona = {"name":"Jorge","edad":23,
    "avisar":function (){alert("Hola soy "+this.name);}
};

persona.avisar ();