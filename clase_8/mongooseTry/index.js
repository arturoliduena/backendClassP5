var express = require('express');
var app = express();

var mongoose = require('mongoose'); // Importamos el módulo Mongoose.
mongoose.connect("mongodb://localhost/allumnos") // Connect se conecta a la bd


//tenemos que especificar en qué host está y que base de datos queremos, en este caso alumnos. Si no existe la crea.

var alumnoModel = new mongoose.Schema({	// Antes de poder escribir en la DB, tenemos que especificar un modelo
    nombre: String,						// para los datos, explicaremos esto más adelante en detalle
    edad: Number,						// Básicamente, decime el nombre y el tipo de datos que vamos a necesitar
    interfaz: String
    });

var Alumno = mongoose.model('alumno', alumnoModel); // Creamos una clase Alumno basado en el modelo que definimos
                                                    // este objeto va a tener todo el comportamiento de mongoose

//Creamos un alumno usando la clase Alumno

var monica = new  Alumno({
            nombre: 'Monica',
                edad: 24,
                interfaz: 'moongose'
        });

var ayelen = new Alumno({
            nombre: 'Ayelén',
                edad: 21,
                interfaz: 'moongose'
        });

monica.save();  // Monica es clase alumno, que hereda el metodo save de mongoose
                // Este método nos deja guardar en la base de datos.

ayelen.save( (err, result) =>{  // save tambien puede recibir un callback para poder ver si se guarda bien
    if(err){					// o bien hacer algo cuando termine
        console.log(err);		// este patrón va a aparece mucho en mongoose
    }else{						// por ejemplo con .find() o .delete(), todas reciben un callback.
    console.log(result);
    }
});

//Ahora imprimamos por pantalla todos los alumnos que hay en la bd
Alumno.find({}, function(err, alumnos){
    if(err){
        console.log('hubo un error!');
    }else{
        console.log(alumnos);
    }
})


app.get('/', function( req, res){
    res.send('hola')
})


app.listen(3000, function(){
    console.log('listen port 3000')
})