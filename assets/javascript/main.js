
let arregloDental =[
    {
        Especialidad: 'Dental',
        horadeatencion: '8:00',
        medicoEspecialista: 'Verena Ojeda',
        nombrePaciente: 'David  Esparza Alvarado',
        RutPaciente : '11371446-8',
        prevision : 'Isapre'

    },
    {
        Especialidad : 'Dental',
        horadeatencion : '12:00',
        medicoEspecialista : 'Paulina Poblete Valdivia',
        nombrePaciente : 'Angelica Rodríguez',
        RutPaciente : '14257482-9',
        prevision : 'Isapre'
    },
    {
        Especialidad : 'Dental',
        horadeatencion : '14:00',
        medicoEspecialista : 'Yessenia  Vivanco',
        nombrePaciente : 'Catalina Donoso',
        RutPaciente : '19763579-7',
        prevision : 'Fonasa'
    },
    {
        Especialidad : 'Dental',
        horadeatencion : '17:00',
        medicoEspecialista : 'Ruddy De Los Reyes',
        nombrePaciente : 'Rafael Monsalvez',
        RutPaciente : '20942569-6',
        prevision : 'Isapre'

    }
]

let arregloRadiologia =[
    {
        Especialidad : 'Radiología',
        horadeatencion : '8:00',
        medicoEspecialista : 'Luz  Acuña ',
        nombrePaciente : 'Maria Millas',
        RutPaciente : '8255477-7',
        prevision : 'Fonasa',

    },
    {
        Especialidad : 'Radiología',
        horadeatencion : '8:30',
        medicoEspecialista : 'Nicole Inostroza',
        nombrePaciente : 'Betsabé Estefania Urbina Espinosa',
        RutPaciente : '12180925-7',
        prevision : 'Isapre'
    },
    {
        Especialidad : 'Radiología',
        horadeatencion : '9:00',
        medicoEspecialista : 'Priscilla Sierra',
        nombrePaciente : 'Camila Avila',
        RutPaciente : '6175867-4',
        prevision : 'Fonasa'

    },
    {
        Especialidad : 'Radiología',
        horadeatencion : '10:00',
        medicoEspecialista : 'Evelin Isabel  Hernández Nuñez ',
        nombrePaciente : 'Denisse  Valenzuela ',
        RutPaciente : '13346908-7',
        prevision : 'Fonasa'

    },
    {
        Especialidad : 'Radiología',
        horadeatencion : '12:00',
        medicoEspecialista : 'Kimberly Alveal',
        nombrePaciente : 'Fabiola  Moreno ',
        RutPaciente : '21413795-k',
        prevision : 'Fonasa'

    }



]

let arregloTraumatología=[
    {
        Especialidad : 'Traumatología',
        horadeatencion : '9:00',
        medicoEspecialista : 'Amanda  Diaz Olivares',
        nombrePaciente : 'Sophia Duran',
        RutPaciente : '20678835-6',
        prevision : 'Isapre'
    },
    {
        Especialidad : 'Traumatología',
        horadeatencion : '12:00',
        medicoEspecialista : 'Maria Jose Bastias Solis',
        nombrePaciente : 'Maria  Fernanda  Ampuero',
        RutPaciente : '11908245-5',
        prevision : 'Fonasa',

    },
    {
        Especialidad : 'Traumatología',
        horadeatencion : '16:00',
        medicoEspecialista : 'Nicole Pinto',
        nombrePaciente : 'Francisca  Ibañez',
        RutPaciente : '9188279-5',
        prevision : 'Fonasa'

    },
    {
        Especialidad : 'Traumatología',
        horadeatencion : '16:30',
        medicoEspecialista : 'Alondra Allendes Barrera',
        nombrePaciente : 'Pamela Darrouy Jimenez',
        RutPaciente : '10551652-5',
        prevision : 'Fonasa'

    },
    {
        Especialidad : 'Traumatología',
        horadeatencion : '17:00',
        medicoEspecialista : 'Kamila Cabello',
        nombrePaciente : 'Saramay Delgado',
        RutPaciente : '10323105-1',
        prevision : 'Fonasa'

    }

]

let cambiaEncabezado = (encabezado) => {
    if (encabezado == "Especialidad"){
        return(" Especialidad ");
    }
    else if (encabezado == "horadeatencion"){
        return(" Hora de Atención ");
    }
    else if (encabezado == "medicoEspecialista"){
        return(" Médico Especialista ");
    }
    else if (encabezado == "nombrePaciente"){
        return(" Nombre del Paciente ");
    }
    else if (encabezado == "RutPaciente"){
        return(" Rut del Paciente ")
    }
    else if (encabezado == "prevision"){
        return( " Previsión ")
    }

}

let creaTablas = (nombreArreglo) => {

    let body = document.getElementsByTagName("body")[0];
  
    let tabla   = document.createElement("table");
    let tblBody = document.createElement("tbody");

    for (let i = 0; i < nombreArreglo.length; i++) {

        if (i == 0){
            let columna = document.createElement("tr");

            for (let j = 0; j < 6; j++) {
                let celda = document.createElement("td");
                let encabezado = cambiaEncabezado(Object.keys(nombreArreglo[i])[j])
                let textoCelda = document.createTextNode(encabezado);
                celda.appendChild(textoCelda);
                columna.appendChild(celda);
            }

         tblBody.appendChild(columna);
        }
        
        let columna = document.createElement("tr");

        for (let j = 0; j < 6; j++){       
            let celda = document.createElement("td");
            let textoCelda = document.createTextNode(Object.values(nombreArreglo[i])[j]);
            celda.appendChild(textoCelda);
            columna.appendChild(celda);
        }
  
      tblBody.appendChild(columna);
    }
    
    tabla.appendChild(tblBody);
    body.appendChild(tabla);
    tabla.setAttribute("border", "5");

}

creaTablas(arregloDental);
document.write("<br>");
creaTablas(arregloRadiologia);
document.write("<br>");
creaTablas(arregloTraumatología);
