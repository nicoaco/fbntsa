const path = require("path");
const fs = require("fs");


module.exports = {
    ruta : path.resolve(__dirname, "../data", "articulos.json"),
    leer : function () {
        // console.log("ruta", this.ruta); Devuelve la ruta del archivo JSON en caso de querer debugguear.
        return fs.readFileSync(this.ruta);
    },
    todos : function () {
        return JSON.parse(this.leer());
    },
    buscar : function(atributo,valor) {
        return this.todos().find(articulo => articulo[atributo] == valor); // find devuelve null si no encuentra nada.
    },
    filtrar : function(atributo, valor) {
        return this.todos().filter(articulo => articulo[atributo] == valor); // filter devuelve [] si no encuentra nada.
    },
    update: function(data,id) {
        let all = this.todos();
        let updated = this.buscar ("id", id);
        all = all.map(element => {
            if(element.id == id) {
        element.title= data.title ,
        element.created= data.created,
        element.shortDescription= data.shortDescription,
        element.largeDescription= data.largeDescription
         }
         return element
    })

     // fs.writeFileSync(this.ruta,JSON.stringify(all,null,2))
      return all;
       
    },
    create: function(data , file)
    {
        let all = this.todos();
        let newProduct=({
        id : all.length>0 ? all[all.length -1].id +1 : 1,
        nombre:data.name ,
        marca:data.brand,
        os: data.so,
        core: data.core,
        memory: data.memory,
        mpx: data.mpx,
        descrip: data.description,
        precioLista: data.price,
        descuento: data.discount,
        precioFinal: data.finalPrice,
        image : file.filename 
        })
        all.push(newProduct)
        fs.writeFileSync(this.ruta,JSON.stringify(all,null,2))
        return newProduct

    },
    delete: function(id){
        let all= this.todos();
        let deleted = this.buscar("id" , id);
        all= all.filter(element => element.id != deleted.id);
        fs.writeFileSync(this.ruta,JSON.stringify(all,null,2))
        return true;
    }
}

