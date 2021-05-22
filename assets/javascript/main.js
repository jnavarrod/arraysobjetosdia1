
    function start() {
        // get the reference for the body
        var mybody = document.getElementsByTagName("body")[0];

        // creates <table> and <tbody> elements
        mytable     = document.createElement("table");
        mytablebody = document.createElement("tbody");

        // creating all cells
        for(var j = 0; j < 2; j++) {
            // creates a <tr> element
            mycurrent_row = document.createElement("tr");

            for(var i = 0; i < 2; i++) {
                // creates a <td> element
                mycurrent_cell = document.createElement("td");
                // creates a Text Node
                currenttext = document.createTextNode("cell is row " + j + ", column " + i);
                // appends the Text Node we created into the cell <td>
                mycurrent_cell.appendChild(currenttext);
                // appends the cell <td> into the row <tr>
                mycurrent_row.appendChild(mycurrent_cell);
            }
            // appends the row <tr> into <tbody>
            mytablebody.appendChild(mycurrent_row);
        }

        // appends <tbody> into <table>
        mytable.appendChild(mytablebody);
        // appends <table> into <body>
        mybody.appendChild(mytable);
        // sets the border attribute of mytable to 2;
        mytable.setAttribute("border","2");
    }



/* let arregloDental =[
    {
        Especialidad: 'Dental',
        Horadeatencion: '8:00',
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

] */