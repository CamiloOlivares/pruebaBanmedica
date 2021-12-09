import { Component, ElementRef, ViewChild } from '@angular/core';
import { SecureDomPipe } from './pipes/secure-dom.pipe';
import { IcartServiceService } from './services/icart-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'prueba';

  tableContent:any={
    "headRow": [
      "% Bonificación",
      "Tope $",
      "% Bonificación",
      "Tope $",
      "Copago",
      "Nro. del prestador(E)"
    ],
    "prestaciones": [
      {
        "name": "Prestaciones Hospitalarias",
        "content": [
          {
            "name": "Parto Normal",
            "rows": [
              {
                "name": "Derecho De Pabellon 6   ",
                "values": [
                  "25",
                  "40480",
                  "",
                  "",
                  "",
                  ""
                ]
              },
              {
                "name": "Honorarios Medicos   ",
                "values": [
                  "25",
                  "157220",
                  "",
                  "",
                  "",
                  ""
                ]
              },
              {
                "name": "Honorarios Matrona(*)   ",
                "values": [
                  "25",
                  "74170",
                  "",
                  "",
                  "",
                  ""
                ]
              },
              {
                "name": "Atencion Inmediata Recien Nacido  (E)",
                "values": [
                  "100",
                  "42200",
                  "70",
                  "Sin Tope",
                  "",
                  "1"
                ]
              },
              {
                "name": "Visita Neonatologo  (E)",
                "values": [
                  "100",
                  "28136",
                  "70",
                  "Sin Tope",
                  "",
                  "1"
                ]
              }
            ],
            "posicion": 0
          },
          {
            "name": "Parto por cesarea",
            "rows": [
              {
                "name": "Derecho De Pabellon 7   ",
                "values": [
                  "25",
                  "57152",
                  "",
                  "",
                  "",
                  ""
                ]
              },
              {
                "name": "Honorarios Medicos   ",
                "values": [
                  "25",
                  "193940",
                  "",
                  "",
                  "",
                  ""
                ]
              },
              {
                "name": "Honorarios Matrona(*)   ",
                "values": [
                  "25",
                  "74170",
                  "",
                  "",
                  "",
                  ""
                ]
              },
              {
                "name": "Atencion Inmediata Recien Nacido  (E)",
                "values": [
                  "100",
                  "42200",
                  "70",
                  "Sin Tope",
                  "",
                  "1"
                ]
              },
              {
                "name": "Visita Neonatologo  (E)",
                "values": [
                  "100",
                  "28136",
                  "70",
                  "Sin Tope",
                  "",
                  "1"
                ]
              }
            ],
            "posicion": 0
          },
          {
            "name": "Apendicectomia",
            "rows": [
              {
                "name": "Derecho De Pabellon 7  (E)",
                "values": [
                  "100",
                  "228608",
                  "100",
                  "Sin Tope",
                  "",
                  "1"
                ]
              },
              {
                "name": "Honorarios Medicos  (E)",
                "values": [
                  "100",
                  "323616",
                  "100",
                  "Sin Tope",
                  "",
                  "1"
                ]
              }
            ],
            "posicion": 0
          },
          {
            "name": "Colecistectomia por videolaparoscopia",
            "rows": [
              {
                "name": "Derecho De Pabellon 10  (E)",
                "values": [
                  "100",
                  "533431",
                  "100",
                  "Sin Tope",
                  "",
                  "1"
                ]
              },
              {
                "name": "Honorarios Medicos  (E)",
                "values": [
                  "100",
                  "646687",
                  "100",
                  "Sin Tope",
                  "",
                  "1"
                ]
              }
            ],
            "posicion": 0
          },
          {
            "name": "Histeroctomia total",
            "rows": [
              {
                "name": "Derecho De Pabellon 8  (E)",
                "values": [
                  "100",
                  "323874",
                  "100",
                  "Sin Tope",
                  "",
                  "1"
                ]
              },
              {
                "name": "Honorarios Medicos  (E)",
                "values": [
                  "100",
                  "789220",
                  "100",
                  "Sin Tope",
                  "",
                  "1"
                ]
              }
            ],
            "posicion": 0
          },
          {
            "name": "Amigdalectomia",
            "rows": [
              {
                "name": "Derecho De Pabellon 5  (E)",
                "values": [
                  "100",
                  "114304",
                  "100",
                  "Sin Tope",
                  "",
                  "1"
                ]
              },
              {
                "name": "Honorarios Medicos  (E)",
                "values": [
                  "100",
                  "224832",
                  "100",
                  "Sin Tope",
                  "",
                  "1"
                ]
              }
            ],
            "posicion": 0
          },
          {
            "name": "Cirugia Cardiaca de Complejidad Mayor",
            "rows": [
              {
                "name": "Derecho De Pabellon 14  (E)",
                "values": [
                  "100",
                  "1047837",
                  "100",
                  "Sin Tope",
                  "",
                  "1"
                ]
              },
              {
                "name": "Honorarios Medicos  (E)",
                "values": [
                  "100",
                  "2129185",
                  "100",
                  "Sin Tope",
                  "",
                  "1"
                ]
              }
            ],
            "posicion": 0
          },
          {
            "name": "Extirpacion de Tumor y/o Quiste Encefalico y de Hipofisis",
            "rows": [
              {
                "name": "Derecho De Pabellon 12  (E)",
                "values": [
                  "100",
                  "800153",
                  "100",
                  "Sin Tope",
                  "",
                  "1"
                ]
              },
              {
                "name": "Honorarios Medicos  (E)",
                "values": [
                  "100",
                  "1144644",
                  "100",
                  "Sin Tope",
                  "",
                  "1"
                ]
              }
            ],
            "posicion": 0
          },
          {
            "name": "Dias Cama",
            "rows": [
              {
                "name": "Medicina  (E)",
                "values": [
                  "100",
                  "303805",
                  "100",
                  "Sin Tope",
                  "",
                  "1"
                ]
              },
              {
                "name": "Sala Cuna  (E)",
                "values": [
                  "100",
                  "106332",
                  "100",
                  "Sin Tope",
                  "",
                  "1"
                ]
              },
              {
                "name": "U.T.I. Adulto  (E)",
                "values": [
                  "100",
                  "455708",
                  "100",
                  "Sin Tope",
                  "",
                  "1"
                ]
              },
              {
                "name": "U.T.I. Pediatria  (E)",
                "values": [
                  "100",
                  "455708",
                  "100",
                  "Sin Tope",
                  "",
                  "1"
                ]
              },
              {
                "name": "U.T.I. Neonatologia  (E)",
                "values": [
                  "100",
                  "455708",
                  "100",
                  "Sin Tope",
                  "",
                  "1"
                ]
              }
            ],
            "posicion": 0
          },
          {
            "name": "Medicamentos y Materiales Clinicos (B)",
            "rows": [
              {
                "name": "Apendicectomia  (E)",
                "values": [
                  "100",
                  "2430442",
                  "100",
                  "288.386",
                  "",
                  "1"
                ]
              },
              {
                "name": "Hospitalizacion Por Neumonia  (E)",
                "values": [
                  "100",
                  "2430442",
                  "100",
                  "288.386",
                  "",
                  "1"
                ]
              }
            ],
            "posicion": 0
          }
        ]
      },
      {
        "name": "Prestaciones Ambulatorias",
        "content": [
          {
            "name": "Consultas Medicas",
            "rows": [
              {
                "name": "Consulta Medica Electiva O Urgencia  (E)",
                "values": [
                  "80",
                  "24304",
                  "",
                  "",
                  "",
                  "1"
                ]
              },
              {
                "name": "Consulta Psiquiatrica (A)  (E)",
                "values": [
                  "80",
                  "24304",
                  "",
                  "",
                  "",
                  "1"
                ]
              }
            ],
            "posicion": 1
          },
          {
            "name": "Examenes y Procedimientos",
            "rows": [
              {
                "name": "Hemograma  (E)",
                "values": [
                  "80",
                  "3896",
                  "",
                  "",
                  "",
                  "1"
                ]
              },
              {
                "name": "Estudio Lipidos Sanguineos  (E)",
                "values": [
                  "80",
                  "8654",
                  "",
                  "",
                  "",
                  "1"
                ]
              },
              {
                "name": "Perfil Bioquimico  (E)",
                "values": [
                  "80",
                  "7356",
                  "",
                  "",
                  "",
                  "1"
                ]
              },
              {
                "name": "Urocultivo  (E)",
                "values": [
                  "80",
                  "4330",
                  "",
                  "",
                  "",
                  "1"
                ]
              },
              {
                "name": "Orina Completa  (E)",
                "values": [
                  "80",
                  "2596",
                  "",
                  "",
                  "",
                  "1"
                ]
              },
              {
                "name": "Densitometria Osea  (E)",
                "values": [
                  "80",
                  "63326",
                  "",
                  "",
                  "",
                  "1"
                ]
              },
              {
                "name": "Citodiagnostico Corriente  (E)",
                "values": [
                  "80",
                  "5840",
                  "",
                  "",
                  "",
                  "1"
                ]
              },
              {
                "name": "Estudio Histopatologico Corriente  (E)",
                "values": [
                  "80",
                  "11901",
                  "",
                  "",
                  "",
                  "1"
                ]
              },
              {
                "name": "Exploracion Vitreorretinal  (E)",
                "values": [
                  "80",
                  "5239",
                  "",
                  "",
                  "",
                  "1"
                ]
              },
              {
                "name": "Electrocardiograma De Reposo  (E)",
                "values": [
                  "80",
                  "6987",
                  "",
                  "",
                  "",
                  "1"
                ]
              },
              {
                "name": "Ecocardiograma Doppler  (E)",
                "values": [
                  "80",
                  "60272",
                  "",
                  "",
                  "",
                  "1"
                ]
              },
              {
                "name": "Gastroduodenoscopia  (E)",
                "values": [
                  "80",
                  "60418",
                  "",
                  "",
                  "",
                  "1"
                ]
              },
              {
                "name": "Hemodialisis Con Insumos Incluidos  (E)",
                "values": [
                  "80",
                  "60272",
                  "",
                  "",
                  "",
                  "1"
                ]
              },
              {
                "name": "Rodillera, Bota Larga O Corta De Yeso  (E)",
                "values": [
                  "80",
                  "15727",
                  "",
                  "",
                  "",
                  "1"
                ]
              }
            ],
            "posicion": 1
          },
          {
            "name": "Imagenologia",
            "rows": [
              {
                "name": "Radiografia De Torax  (E)",
                "values": [
                  "80",
                  "16627",
                  "",
                  "",
                  "",
                  "1"
                ]
              },
              {
                "name": "Mamografia Bilateral  (E)",
                "values": [
                  "80",
                  "20429",
                  "",
                  "",
                  "",
                  "1"
                ]
              },
              {
                "name": "Radiografia Brazo,Codo,Muqeca O Similar  (E)",
                "values": [
                  "80",
                  "8310",
                  "",
                  "",
                  "",
                  "1"
                ]
              },
              {
                "name": "Tomografia Axial Computarizada De Cerebro  (E)",
                "values": [
                  "80",
                  "56445",
                  "",
                  "",
                  "",
                  "1"
                ]
              },
              {
                "name": "Ecotomografia Abdominal  (E)",
                "values": [
                  "80",
                  "24240",
                  "",
                  "",
                  "",
                  "1"
                ]
              },
              {
                "name": "Ecotomografia Ginecologica  (E)",
                "values": [
                  "80",
                  "12470",
                  "",
                  "",
                  "",
                  "1"
                ]
              }
            ],
            "posicion": 1
          },
          {
            "name": "Medicina Fisica",
            "rows": [
              {
                "name": "Ejercicios Respiratorios (A)  (E)",
                "values": [
                  "80",
                  "6684",
                  "",
                  "",
                  "",
                  "1"
                ]
              },
              {
                "name": "Reeducacion Motriz (A)  (E)",
                "values": [
                  "80",
                  "6684",
                  "",
                  "",
                  "",
                  "1"
                ]
              }
            ],
            "posicion": 1
          }
        ]
      }
    ],
    "version": 1,
    "cartillaData": {
      "UFMO": "5.5",
      "UFPSI": "3",
      "UFRES": "         ",
      "codigo": "ACON15",
      "fechaPlan": "01/11/2021",
      "nombrePlan": "ACONCAGUA 15",
      "MAT": "80"
    },
    "glosa": [
      {
        "glosaPlan": "PLAN CON COBERTURA REDUCIDA PARA LAS PRESTACIONES HOSPITALARIAS POR EMBARAZO, PARTO O CESAREA"
      }
    ],
    "notas": [
      {
        "secuencia": "1",
        "glosa": "Cobertura Reducida De Embarazo, Parto O Cesarea:"
      },
      {
        "secuencia": "3",
        "glosa": "No Obstante Lo Dispuesto En El Arancel Respectivo, Este Plan De Salud Otorga Una Cobertura Reducida Respecto De Las Prestaciones"
      },
      {
        "secuencia": "4",
        "glosa": "Y/O Atenciones Requeridas Por Embarazo, Embarazo Ectopico, Parto, Cesarea, Aborto Espontaneo, Aborto Terapeutico Y/O Cualquier"
      },
      {
        "secuencia": "22",
        "glosa": "Prestacion O Atencion Requerida A Consecuencia De Una Complicacion De Estas. Esta Cobertura Reducida Sera De Un 25% De La"
      },
      {
        "secuencia": "23",
        "glosa": "Definida En El Plan Para La Prestacion Generica Con La Que Se Encuentra Relacionada."
      },
      {
        "secuencia": "39",
        "glosa": "Las Condiciones Para Cambiarse De Este Plan Con Cobertura Reducida De Embarazo, Parto O Cesarea A Un Plan Que Contemple "
      },
      {
        "secuencia": "40",
        "glosa": "Cobertura Para Dichas Atenciones En Los Mismo Terminos Previstos Para El Resto De Las Prestaciones, Se Rigen Por La Circular N 60"
      },
      {
        "secuencia": "41",
        "glosa": "De La Superintendencia De Isapres, La Cual Indica Que El (La) Cotizante Debera Suscribir Una Declaracion De Embarazo En La Que"
      },
      {
        "secuencia": "42",
        "glosa": "Senale Que Ella O Cualquiera Beneficiaria Del Plan, Segun Sea El Caso, Esta O No Cursando Un Embarazo. La No Declaracion De"
      },
      {
        "secuencia": "43",
        "glosa": "Un Embarazo En Curso, Faculta A La Isapre Para Dejar Sin Efecto El Cambio De Plan. Durante La Vigencia Del Presente Plan, La Isapre"
      },
      {
        "secuencia": "44",
        "glosa": "Estara Obligada  A Aceptar El Cambio Que El (La) Cotizante Le Solicite, A Condicion Que En La Declaracion De Embarazo Que Este (A) "
      },
      {
        "secuencia": "46",
        "glosa": "Debera Suscribir Con Este Solo Objeto, Se Consigne Que La Cotizante O Beneficiria, Segun Sea El Caso, No Se Encuentra Embarazada."
      },
      {
        "secuencia": "47",
        "glosa": "El (La) Cotizante Tendra Derecho A Optar, Al Menos, Entre Los Siguientes Planes De Salud:"
      },
      {
        "secuencia": "48",
        "glosa": "-Un Plan De Salud Que Mantenga La Equivalencia En Precio Con Aquel Que Se Reemplaza Y Que Satisfaga La Cobertura De Parto"
      },
      {
        "secuencia": "50",
        "glosa": "Requerida, Caso En El Cual Podran Efectuarse Los Ajustes Que Correspondan En Relacion A Los Restantes Beneficios Del Nuevo Plan."
      },
      {
        "secuencia": "52",
        "glosa": "-Un Plan De Salud Que Mantenga Los Beneficios Del Plan Que Se Sustituye Y Que Otorgue O Aumente La Cobertura De Parto, Caso"
      },
      {
        "secuencia": "53",
        "glosa": "En El Cual Podran Realizarse Los Ajustes Pertinentes En Relacion Al Precio Del Nuevo Plan."
      },
      {
        "secuencia": "55",
        "glosa": "**Cada Afiliado Debera Informarse Respecto Del Alcance Y Aplicacion Del Convenio A Las Prestaciones No Contenidas En Esta Seleccion"
      },
      {
        "secuencia": "56",
        "glosa": "De Prestaciones Valorizadas.**"
      },
      {
        "secuencia": "57",
        "glosa": "Dejamos Constancia Que La Cobertura Financiera Minima Que Garantiza El Plan De Salud Sera La Que Resulte Mayor Entre El"
      },
      {
        "secuencia": "58",
        "glosa": "25% De La Cobertura General Del Mismo Plan Para La Prestacion De Que Se Trate Y La Cobertura Que Contempla El Arancel"
      },
      {
        "secuencia": "59",
        "glosa": "Fonasa, Modalidad Libre Eleccion, Nivel 1."
      },
      {
        "secuencia": "9000",
        "glosa": " "
      },
      {
        "secuencia": "9001",
        "glosa": "-----------------------------------------------------------------------------------------------------------------------------------"
      },
      {
        "secuencia": "9002",
        "glosa": "(*) Honorarios Matrona"
      },
      {
        "secuencia": "9003",
        "glosa": "El Valor Tope De Bonificacion Informado En Esta Seleccion De Prestaciones Valorizadas, Solo Se Aplicara Si Las 3 Prestaciones De"
      },
      {
        "secuencia": "9004",
        "glosa": "Matrona Se Realizan En El Mismo Evento Hospitalario. "
      },
      {
        "secuencia": "9005",
        "glosa": "Honorarios Matrona Parto Normal - Parto Por Cesarea"
      },
      {
        "secuencia": "9006",
        "glosa": "Código 2004010: Honorario Matrona Por La Atención En Preparto (Desde Ingreso A Centro Asistencial Por Trabajo De Parto, "
      },
      {
        "secuencia": "9007",
        "glosa": "Ya Sea Inicial O Activo, Hasta El Periodo Expulsivo)."
      },
      {
        "secuencia": "9008",
        "glosa": "Código 2004011: Honorario De Matrona Por Atención Integral En Control Y Manejo Del Trabajo De Parto (Periodo Expulsivo,"
      },
      {
        "secuencia": "9009",
        "glosa": "Asistencia Al Pabellon Quirurgico En Caso De Cesarea)."
      },
      {
        "secuencia": "9010",
        "glosa": "Código 2004012: Honorario Matrona Por Atención En Post Parto (Incluye Dos Controles En Puerperio)."
      },
      {
        "secuencia": "9011",
        "glosa": "-----------------------------------------------------------------------------------------------------------------------------------"
      }
    ],
    "glosaTope": {
      "glosa": "Por evento Hospitalario."
    },
    "topeCartilla": [
      {
        "correlativo": 17110925,
        "versionSistema": 1,
        "inicioVigencia": "2021-11-01T00:00:00.0000000",
        "topeAnualPsicologia": 3,
        "unidadTopeAnualPsicologia": "UF",
        "topeAnualkinesiologia": 5.5,
        "unidadTopeAnualkinesiologia": "UF",
        "topeAnualMedicamentos": 0,
        "unidadTopeAnualMedicamentos": "UF",
        "unidadTopeAnualClinicos": "UF"
      }
    ]
  };


  @ViewChild('cartilla') mydiv: ElementRef<HTMLElement> | undefined;

  constructor(private icartService:IcartServiceService,private secureDom:SecureDomPipe){}

  public iframeSrc:any;
  public imprimido = false;
  async imprimir(){
    let response = await this.icartService.getDocumentoCartilla(this.tableContent);
    //let blob = new Blob([response], {type: 'application/pdf'});
    let blob = response;
    let dataType = response.type;
    let binaryData= [];
    binaryData.push(response);
    const blobUrl = window.URL.createObjectURL(new Blob(binaryData,{type:dataType}));
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = this.secureDom.sanitize(blobUrl,"resourceUrl",0) || "";
    console.log(String(this.secureDom.transform(blobUrl,"resourceUrl")));
    this.iframeSrc = this.secureDom.transform(blobUrl,"resourceUrl");
    this.imprimido = true;
    document.body.appendChild(iframe);
    iframe.contentWindow?.print();
  }

}
