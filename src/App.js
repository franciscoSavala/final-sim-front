import logo from './logo.svg';
import './App.css';
import SimulationForm from './components/SimulationForm/SimulationForm';
import Grid from './components/Grid/Grid';

function App() {

    const data = [
      {
        "n": 92,
        "evento": "FIN_CUECE",
        "reloj": 404.02270251058985,
        "ensambladores": [
          {
            "estado": "ENSAMBLANDO",
            "rnd": 0.6258316675486908,
            "finEnsamblado": 427.3707829825419,
            "llegadaACola": 1.7976931348623157E308
          },
          {
            "estado": "ENSAMBLANDO",
            "rnd": 0.7194997888724788,
            "finEnsamblado": 405.8852288767175,
            "llegadaACola": 1.7976931348623157E308
          },
          {
            "estado": "ENSAMBLANDO",
            "rnd": 0.5920002020007439,
            "finEnsamblado": 414.99550669573074,
            "llegadaACola": 1.7976931348623157E308
          },
          {
            "estado": "ENSAMBLANDO",
            "rnd": 0.7493391948073661,
            "finEnsamblado": 436.51609445866353,
            "llegadaACola": 1.7976931348623157E308
          },
          {
            "estado": "ENSAMBLANDO",
            "rnd": 0.800395560450397,
            "finEnsamblado": 423.60789613648996,
            "llegadaACola": 1.7976931348623157E308
          }
        ],
        "rnd": 0.4850393672558069,
        "cola": 0,
        "hornos": [
          {
            "estado": "LIBRE",
            "finCuece": 1.7976931348623157E308
          }
        ],
        "horasTrabajadas": 6,
        "diasTrabajados": 0,
        "moldesTerminados": 46,
        "cantidadTrabajadores": 5
      },
      {
        "n": 93,
        "evento": "FIN_ENSAMBLE",
        "reloj": 405.8852288767175,
        "ensambladores": [
          {
            "estado": "ENSAMBLANDO",
            "rnd": 0.6258316675486908,
            "finEnsamblado": 427.3707829825419,
            "llegadaACola": 1.7976931348623157E308
          },
          {
            "estado": "ESPERANDO_HORNO",
            "rnd": 0.7194997888724788,
            "finEnsamblado": 1.7976931348623157E308,
            "llegadaACola": 1.7976931348623157E308
          },
          {
            "estado": "ENSAMBLANDO",
            "rnd": 0.5920002020007439,
            "finEnsamblado": 414.99550669573074,
            "llegadaACola": 1.7976931348623157E308
          },
          {
            "estado": "ENSAMBLANDO",
            "rnd": 0.7493391948073661,
            "finEnsamblado": 436.51609445866353,
            "llegadaACola": 1.7976931348623157E308
          },
          {
            "estado": "ENSAMBLANDO",
            "rnd": 0.800395560450397,
            "finEnsamblado": 423.60789613648996,
            "llegadaACola": 1.7976931348623157E308
          }
        ],
        "rnd": 0.2739475468253313,
        "cola": 0,
        "hornos": [
          {
            "estado": "OCUPADO",
            "finCuece": 412.52891415766953
          }
        ],
        "horasTrabajadas": 6,
        "diasTrabajados": 0,
        "moldesTerminados": 46,
        "cantidadTrabajadores": 5
      },
      {
        "n": 94,
        "evento": "FIN_CUECE",
        "reloj": 412.52891415766953,
        "ensambladores": [
          {
            "estado": "ENSAMBLANDO",
            "rnd": 0.6258316675486908,
            "finEnsamblado": 427.3707829825419,
            "llegadaACola": 1.7976931348623157E308
          },
          {
            "estado": "ENSAMBLANDO",
            "rnd": 0.9089357414616024,
            "finEnsamblado": 446.61827157228555,
            "llegadaACola": 1.7976931348623157E308
          },
          {
            "estado": "ENSAMBLANDO",
            "rnd": 0.5920002020007439,
            "finEnsamblado": 414.99550669573074,
            "llegadaACola": 1.7976931348623157E308
          },
          {
            "estado": "ENSAMBLANDO",
            "rnd": 0.7493391948073661,
            "finEnsamblado": 436.51609445866353,
            "llegadaACola": 1.7976931348623157E308
          },
          {
            "estado": "ENSAMBLANDO",
            "rnd": 0.800395560450397,
            "finEnsamblado": 423.60789613648996,
            "llegadaACola": 1.7976931348623157E308
          }
        ],
        "rnd": 0.2739475468253313,
        "cola": 0,
        "hornos": [
          {
            "estado": "LIBRE",
            "finCuece": 1.7976931348623157E308
          }
        ],
        "horasTrabajadas": 6,
        "diasTrabajados": 0,
        "moldesTerminados": 47,
        "cantidadTrabajadores": 5
      },
      {
        "n": 95,
        "evento": "FIN_ENSAMBLE",
        "reloj": 414.99550669573074,
        "ensambladores": [
          {
            "estado": "ENSAMBLANDO",
            "rnd": 0.6258316675486908,
            "finEnsamblado": 427.3707829825419,
            "llegadaACola": 1.7976931348623157E308
          },
          {
            "estado": "ENSAMBLANDO",
            "rnd": 0.9089357414616024,
            "finEnsamblado": 446.61827157228555,
            "llegadaACola": 1.7976931348623157E308
          },
          {
            "estado": "ESPERANDO_HORNO",
            "rnd": 0.5920002020007439,
            "finEnsamblado": 1.7976931348623157E308,
            "llegadaACola": 1.7976931348623157E308
          },
          {
            "estado": "ENSAMBLANDO",
            "rnd": 0.7493391948073661,
            "finEnsamblado": 436.51609445866353,
            "llegadaACola": 1.7976931348623157E308
          },
          {
            "estado": "ENSAMBLANDO",
            "rnd": 0.800395560450397,
            "finEnsamblado": 423.60789613648996,
            "llegadaACola": 1.7976931348623157E308
          }
        ],
        "rnd": 0.5172673337530201,
        "cola": 0,
        "hornos": [
          {
            "estado": "OCUPADO",
            "finCuece": 423.09911069824886
          }
        ],
        "horasTrabajadas": 6,
        "diasTrabajados": 0,
        "moldesTerminados": 47,
        "cantidadTrabajadores": 5
      },
      {
        "n": 96,
        "evento": "FIN_CUECE",
        "reloj": 423.09911069824886,
        "ensambladores": [
          {
            "estado": "ENSAMBLANDO",
            "rnd": 0.6258316675486908,
            "finEnsamblado": 427.3707829825419,
            "llegadaACola": 1.7976931348623157E308
          },
          {
            "estado": "ENSAMBLANDO",
            "rnd": 0.9089357414616024,
            "finEnsamblado": 446.61827157228555,
            "llegadaACola": 1.7976931348623157E308
          },
          {
            "estado": "ENSAMBLANDO",
            "rnd": 0.8140544380155603,
            "finEnsamblado": 456.23965507840444,
            "llegadaACola": 1.7976931348623157E308
          },
          {
            "estado": "ENSAMBLANDO",
            "rnd": 0.7493391948073661,
            "finEnsamblado": 436.51609445866353,
            "llegadaACola": 1.7976931348623157E308
          },
          {
            "estado": "ENSAMBLANDO",
            "rnd": 0.800395560450397,
            "finEnsamblado": 423.60789613648996,
            "llegadaACola": 1.7976931348623157E308
          }
        ],
        "rnd": 0.5172673337530201,
        "cola": 0,
        "hornos": [
          {
            "estado": "LIBRE",
            "finCuece": 1.7976931348623157E308
          }
        ],
        "horasTrabajadas": 7,
        "diasTrabajados": 0,
        "moldesTerminados": 48,
        "cantidadTrabajadores": 5
      },
      {
        "n": 97,
        "evento": "FIN_ENSAMBLE",
        "reloj": 423.60789613648996,
        "ensambladores": [
          {
            "estado": "ENSAMBLANDO",
            "rnd": 0.6258316675486908,
            "finEnsamblado": 427.3707829825419,
            "llegadaACola": 1.7976931348623157E308
          },
          {
            "estado": "ENSAMBLANDO",
            "rnd": 0.9089357414616024,
            "finEnsamblado": 446.61827157228555,
            "llegadaACola": 1.7976931348623157E308
          },
          {
            "estado": "ENSAMBLANDO",
            "rnd": 0.8140544380155603,
            "finEnsamblado": 456.23965507840444,
            "llegadaACola": 1.7976931348623157E308
          },
          {
            "estado": "ENSAMBLANDO",
            "rnd": 0.7493391948073661,
            "finEnsamblado": 436.51609445866353,
            "llegadaACola": 1.7976931348623157E308
          },
          {
            "estado": "ESPERANDO_HORNO",
            "rnd": 0.800395560450397,
            "finEnsamblado": 1.7976931348623157E308,
            "llegadaACola": 1.7976931348623157E308
          }
        ],
        "rnd": 0.923940291264741,
        "cola": 0,
        "hornos": [
          {
            "estado": "OCUPADO",
            "finCuece": 434.1515378840784
          }
        ],
        "horasTrabajadas": 7,
        "diasTrabajados": 0,
        "moldesTerminados": 48,
        "cantidadTrabajadores": 5
      },
      {
        "n": 98,
        "evento": "FIN_ENSAMBLE",
        "reloj": 427.3707829825419,
        "ensambladores": [
          {
            "estado": "EN_COLA",
            "rnd": 0.6258316675486908,
            "finEnsamblado": 1.7976931348623157E308,
            "llegadaACola": 427.3707829825419
          },
          {
            "estado": "ENSAMBLANDO",
            "rnd": 0.9089357414616024,
            "finEnsamblado": 446.61827157228555,
            "llegadaACola": 1.7976931348623157E308
          },
          {
            "estado": "ENSAMBLANDO",
            "rnd": 0.8140544380155603,
            "finEnsamblado": 456.23965507840444,
            "llegadaACola": 1.7976931348623157E308
          },
          {
            "estado": "ENSAMBLANDO",
            "rnd": 0.7493391948073661,
            "finEnsamblado": 436.51609445866353,
            "llegadaACola": 1.7976931348623157E308
          },
          {
            "estado": "ESPERANDO_HORNO",
            "rnd": 0.800395560450397,
            "finEnsamblado": 1.7976931348623157E308,
            "llegadaACola": 1.7976931348623157E308
          }
        ],
        "rnd": 0.923940291264741,
        "cola": 1,
        "hornos": [
          {
            "estado": "OCUPADO",
            "finCuece": 434.1515378840784
          }
        ],
        "horasTrabajadas": 7,
        "diasTrabajados": 0,
        "moldesTerminados": 48,
        "cantidadTrabajadores": 5
      },
      {
        "n": 99,
        "evento": "FIN_CUECE",
        "reloj": 434.1515378840784,
        "ensambladores": [
          {
            "estado": "ESPERANDO_HORNO",
            "rnd": 0.7712113853780266,
            "finEnsamblado": 1.7976931348623157E308,
            "llegadaACola": 1.7976931348623157E308
          },
          {
            "estado": "ENSAMBLANDO",
            "rnd": 0.9089357414616024,
            "finEnsamblado": 446.61827157228555,
            "llegadaACola": 1.7976931348623157E308
          },
          {
            "estado": "ENSAMBLANDO",
            "rnd": 0.8140544380155603,
            "finEnsamblado": 456.23965507840444,
            "llegadaACola": 1.7976931348623157E308
          },
          {
            "estado": "ENSAMBLANDO",
            "rnd": 0.7493391948073661,
            "finEnsamblado": 436.51609445866353,
            "llegadaACola": 1.7976931348623157E308
          },
          {
            "estado": "ENSAMBLANDO",
            "rnd": 0.2858397163705333,
            "finEnsamblado": 462.0099350477837,
            "llegadaACola": 1.7976931348623157E308
          }
        ],
        "rnd": 0.7712113853780266,
        "cola": 0,
        "hornos": [
          {
            "estado": "OCUPADO",
            "finCuece": 443.7788061963465
          }
        ],
        "horasTrabajadas": 7,
        "diasTrabajados": 0,
        "moldesTerminados": 49,
        "cantidadTrabajadores": 5
      },
      {
        "n": 100,
        "evento": "FIN_ENSAMBLE",
        "reloj": 436.51609445866353,
        "ensambladores": [
          {
            "estado": "ESPERANDO_HORNO",
            "rnd": 0.7712113853780266,
            "finEnsamblado": 1.7976931348623157E308,
            "llegadaACola": 1.7976931348623157E308
          },
          {
            "estado": "ENSAMBLANDO",
            "rnd": 0.9089357414616024,
            "finEnsamblado": 446.61827157228555,
            "llegadaACola": 1.7976931348623157E308
          },
          {
            "estado": "ENSAMBLANDO",
            "rnd": 0.8140544380155603,
            "finEnsamblado": 456.23965507840444,
            "llegadaACola": 1.7976931348623157E308
          },
          {
            "estado": "EN_COLA",
            "rnd": 0.7493391948073661,
            "finEnsamblado": 1.7976931348623157E308,
            "llegadaACola": 436.51609445866353
          },
          {
            "estado": "ENSAMBLANDO",
            "rnd": 0.2858397163705333,
            "finEnsamblado": 462.0099350477837,
            "llegadaACola": 1.7976931348623157E308
          }
        ],
        "rnd": 0.7712113853780266,
        "cola": 1,
        "hornos": [
          {
            "estado": "OCUPADO",
            "finCuece": 443.7788061963465
          }
        ],
        "horasTrabajadas": 7,
        "diasTrabajados": 0,
        "moldesTerminados": 49,
        "cantidadTrabajadores": 5
      },
      {
        "n": 101,
        "evento": "FIN_CUECE",
        "reloj": 443.7788061963465,
        "ensambladores": [
          {
            "estado": "ENSAMBLANDO",
            "rnd": 0.6792565507498575,
            "finEnsamblado": 475.5713717038451,
            "llegadaACola": 1.7976931348623157E308
          },
          {
            "estado": "ENSAMBLANDO",
            "rnd": 0.9089357414616024,
            "finEnsamblado": 446.61827157228555,
            "llegadaACola": 1.7976931348623157E308
          },
          {
            "estado": "ENSAMBLANDO",
            "rnd": 0.8140544380155603,
            "finEnsamblado": 456.23965507840444,
            "llegadaACola": 1.7976931348623157E308
          },
          {
            "estado": "ESPERANDO_HORNO",
            "rnd": 0.9568703130791828,
            "finEnsamblado": 1.7976931348623157E308,
            "llegadaACola": 1.7976931348623157E308
          },
          {
            "estado": "ENSAMBLANDO",
            "rnd": 0.2858397163705333,
            "finEnsamblado": 462.0099350477837,
            "llegadaACola": 1.7976931348623157E308
          }
        ],
        "rnd": 0.9568703130791828,
        "cola": 0,
        "hornos": [
          {
            "estado": "OCUPADO",
            "finCuece": 454.5200280748216
          }
        ],
        "horasTrabajadas": 7,
        "diasTrabajados": 0,
        "moldesTerminados": 50,
        "cantidadTrabajadores": 5
      },
      {
        "n": 102,
        "evento": "FIN_ENSAMBLE",
        "reloj": 446.61827157228555,
        "ensambladores": [
          {
            "estado": "ENSAMBLANDO",
            "rnd": 0.6792565507498575,
            "finEnsamblado": 475.5713717038451,
            "llegadaACola": 1.7976931348623157E308
          },
          {
            "estado": "EN_COLA",
            "rnd": 0.9089357414616024,
            "finEnsamblado": 1.7976931348623157E308,
            "llegadaACola": 446.61827157228555
          },
          {
            "estado": "ENSAMBLANDO",
            "rnd": 0.8140544380155603,
            "finEnsamblado": 456.23965507840444,
            "llegadaACola": 1.7976931348623157E308
          },
          {
            "estado": "ESPERANDO_HORNO",
            "rnd": 0.9568703130791828,
            "finEnsamblado": 1.7976931348623157E308,
            "llegadaACola": 1.7976931348623157E308
          },
          {
            "estado": "ENSAMBLANDO",
            "rnd": 0.2858397163705333,
            "finEnsamblado": 462.0099350477837,
            "llegadaACola": 1.7976931348623157E308
          }
        ],
        "rnd": 0.9568703130791828,
        "cola": 1,
        "hornos": [
          {
            "estado": "OCUPADO",
            "finCuece": 454.5200280748216
          }
        ],
        "horasTrabajadas": 7,
        "diasTrabajados": 0,
        "moldesTerminados": 50,
        "cantidadTrabajadores": 5
      },
      {
        "n": 103,
        "evento": "FIN_CUECE",
        "reloj": 454.5200280748216,
        "ensambladores": [
          {
            "estado": "ENSAMBLANDO",
            "rnd": 0.6792565507498575,
            "finEnsamblado": 475.5713717038451,
            "llegadaACola": 1.7976931348623157E308
          },
          {
            "estado": "ESPERANDO_HORNO",
            "rnd": 0.5784619280895137,
            "finEnsamblado": 1.7976931348623157E308,
            "llegadaACola": 1.7976931348623157E308
          },
          {
            "estado": "ENSAMBLANDO",
            "rnd": 0.8140544380155603,
            "finEnsamblado": 456.23965507840444,
            "llegadaACola": 1.7976931348623157E308
          },
          {
            "estado": "ENSAMBLANDO",
            "rnd": 0.8466382867536004,
            "finEnsamblado": 487.9864109423576,
            "llegadaACola": 1.7976931348623157E308
          },
          {
            "estado": "ENSAMBLANDO",
            "rnd": 0.2858397163705333,
            "finEnsamblado": 462.0099350477837,
            "llegadaACola": 1.7976931348623157E308
          }
        ],
        "rnd": 0.5784619280895137,
        "cola": 0,
        "hornos": [
          {
            "estado": "OCUPADO",
            "finCuece": 462.9907996433587
          }
        ],
        "horasTrabajadas": 7,
        "diasTrabajados": 0,
        "moldesTerminados": 51,
        "cantidadTrabajadores": 5
      },
      {
        "n": 104,
        "evento": "FIN_ENSAMBLE",
        "reloj": 456.23965507840444,
        "ensambladores": [
          {
            "estado": "ENSAMBLANDO",
            "rnd": 0.6792565507498575,
            "finEnsamblado": 475.5713717038451,
            "llegadaACola": 1.7976931348623157E308
          },
          {
            "estado": "ESPERANDO_HORNO",
            "rnd": 0.5784619280895137,
            "finEnsamblado": 1.7976931348623157E308,
            "llegadaACola": 1.7976931348623157E308
          },
          {
            "estado": "EN_COLA",
            "rnd": 0.8140544380155603,
            "finEnsamblado": 1.7976931348623157E308,
            "llegadaACola": 456.23965507840444
          },
          {
            "estado": "ENSAMBLANDO",
            "rnd": 0.8466382867536004,
            "finEnsamblado": 487.9864109423576,
            "llegadaACola": 1.7976931348623157E308
          },
          {
            "estado": "ENSAMBLANDO",
            "rnd": 0.2858397163705333,
            "finEnsamblado": 462.0099350477837,
            "llegadaACola": 1.7976931348623157E308
          }
        ],
        "rnd": 0.5784619280895137,
        "cola": 1,
        "hornos": [
          {
            "estado": "OCUPADO",
            "finCuece": 462.9907996433587
          }
        ],
        "horasTrabajadas": 7,
        "diasTrabajados": 0,
        "moldesTerminados": 51,
        "cantidadTrabajadores": 5
      },
      {
        "n": 105,
        "evento": "FIN_ENSAMBLE",
        "reloj": 462.0099350477837,
        "ensambladores": [
          {
            "estado": "ENSAMBLANDO",
            "rnd": 0.6792565507498575,
            "finEnsamblado": 475.5713717038451,
            "llegadaACola": 1.7976931348623157E308
          },
          {
            "estado": "ESPERANDO_HORNO",
            "rnd": 0.5784619280895137,
            "finEnsamblado": 1.7976931348623157E308,
            "llegadaACola": 1.7976931348623157E308
          },
          {
            "estado": "EN_COLA",
            "rnd": 0.8140544380155603,
            "finEnsamblado": 1.7976931348623157E308,
            "llegadaACola": 456.23965507840444
          },
          {
            "estado": "ENSAMBLANDO",
            "rnd": 0.8466382867536004,
            "finEnsamblado": 487.9864109423576,
            "llegadaACola": 1.7976931348623157E308
          },
          {
            "estado": "EN_COLA",
            "rnd": 0.2858397163705333,
            "finEnsamblado": 1.7976931348623157E308,
            "llegadaACola": 462.0099350477837
          }
        ],
        "rnd": 0.5784619280895137,
        "cola": 2,
        "hornos": [
          {
            "estado": "OCUPADO",
            "finCuece": 462.9907996433587
          }
        ],
        "horasTrabajadas": 7,
        "diasTrabajados": 0,
        "moldesTerminados": 51,
        "cantidadTrabajadores": 5
      },
      {
        "n": 106,
        "evento": "FIN_CUECE",
        "reloj": 462.9907996433587,
        "ensambladores": [
          {
            "estado": "ENSAMBLANDO",
            "rnd": 0.6792565507498575,
            "finEnsamblado": 475.5713717038451,
            "llegadaACola": 1.7976931348623157E308
          },
          {
            "estado": "ENSAMBLANDO",
            "rnd": 0.8169739162054622,
            "finEnsamblado": 496.1605388054133,
            "llegadaACola": 1.7976931348623157E308
          },
          {
            "estado": "ESPERANDO_HORNO",
            "rnd": 0.05265849910496734,
            "finEnsamblado": 1.7976931348623157E308,
            "llegadaACola": 1.7976931348623157E308
          },
          {
            "estado": "ENSAMBLANDO",
            "rnd": 0.8466382867536004,
            "finEnsamblado": 487.9864109423576,
            "llegadaACola": 1.7976931348623157E308
          },
          {
            "estado": "EN_COLA",
            "rnd": 0.2858397163705333,
            "finEnsamblado": 1.7976931348623157E308,
            "llegadaACola": 462.0099350477837
          }
        ],
        "rnd": 0.05265849910496734,
        "cola": 1,
        "hornos": [
          {
            "estado": "OCUPADO",
            "finCuece": 468.3067506379885
          }
        ],
        "horasTrabajadas": 7,
        "diasTrabajados": 0,
        "moldesTerminados": 52,
        "cantidadTrabajadores": 5
      },
      {
        "n": 107,
        "evento": "FIN_CUECE",
        "reloj": 468.3067506379885,
        "ensambladores": [
          {
            "estado": "ENSAMBLANDO",
            "rnd": 0.6792565507498575,
            "finEnsamblado": 475.5713717038451,
            "llegadaACola": 1.7976931348623157E308
          },
          {
            "estado": "ENSAMBLANDO",
            "rnd": 0.8169739162054622,
            "finEnsamblado": 496.1605388054133,
            "llegadaACola": 1.7976931348623157E308
          },
          {
            "estado": "ENSAMBLANDO",
            "rnd": 0.851263525524909,
            "finEnsamblado": 501.8193858932376,
            "llegadaACola": 1.7976931348623157E308
          },
          {
            "estado": "ENSAMBLANDO",
            "rnd": 0.8466382867536004,
            "finEnsamblado": 487.9864109423576,
            "llegadaACola": 1.7976931348623157E308
          },
          {
            "estado": "ESPERANDO_HORNO",
            "rnd": 0.049313777495986644,
            "finEnsamblado": 1.7976931348623157E308,
            "llegadaACola": 1.7976931348623157E308
          }
        ],
        "rnd": 0.049313777495986644,
        "cola": 0,
        "hornos": [
          {
            "estado": "OCUPADO",
            "finCuece": 473.6026333029644
          }
        ],
        "horasTrabajadas": 7,
        "diasTrabajados": 0,
        "moldesTerminados": 53,
        "cantidadTrabajadores": 5
      },
      {
        "n": 108,
        "evento": "FIN_CUECE",
        "reloj": 473.6026333029644,
        "ensambladores": [
          {
            "estado": "ENSAMBLANDO",
            "rnd": 0.6792565507498575,
            "finEnsamblado": 475.5713717038451,
            "llegadaACola": 1.7976931348623157E308
          },
          {
            "estado": "ENSAMBLANDO",
            "rnd": 0.8169739162054622,
            "finEnsamblado": 496.1605388054133,
            "llegadaACola": 1.7976931348623157E308
          },
          {
            "estado": "ENSAMBLANDO",
            "rnd": 0.851263525524909,
            "finEnsamblado": 501.8193858932376,
            "llegadaACola": 1.7976931348623157E308
          },
          {
            "estado": "ENSAMBLANDO",
            "rnd": 0.8466382867536004,
            "finEnsamblado": 487.9864109423576,
            "llegadaACola": 1.7976931348623157E308
          },
          {
            "estado": "ENSAMBLANDO",
            "rnd": 0.9676230723205996,
            "finEnsamblado": 508.2788640261704,
            "llegadaACola": 1.7976931348623157E308
          }
        ],
        "rnd": 0.049313777495986644,
        "cola": 0,
        "hornos": [
          {
            "estado": "LIBRE",
            "finCuece": 1.7976931348623157E308
          }
        ],
        "horasTrabajadas": 7,
        "diasTrabajados": 0,
        "moldesTerminados": 54,
        "cantidadTrabajadores": 5
      },
      {
        "n": 109,
        "evento": "FIN_ENSAMBLE",
        "reloj": 475.5713717038451,
        "ensambladores": [
          {
            "estado": "ESPERANDO_HORNO",
            "rnd": 0.6792565507498575,
            "finEnsamblado": 1.7976931348623157E308,
            "llegadaACola": 1.7976931348623157E308
          },
          {
            "estado": "ENSAMBLANDO",
            "rnd": 0.8169739162054622,
            "finEnsamblado": 496.1605388054133,
            "llegadaACola": 1.7976931348623157E308
          },
          {
            "estado": "ENSAMBLANDO",
            "rnd": 0.851263525524909,
            "finEnsamblado": 501.8193858932376,
            "llegadaACola": 1.7976931348623157E308
          },
          {
            "estado": "ENSAMBLANDO",
            "rnd": 0.8466382867536004,
            "finEnsamblado": 487.9864109423576,
            "llegadaACola": 1.7976931348623157E308
          },
          {
            "estado": "ENSAMBLANDO",
            "rnd": 0.9676230723205996,
            "finEnsamblado": 508.2788640261704,
            "llegadaACola": 1.7976931348623157E308
          }
        ],
        "rnd": 0.40159248231145994,
        "cola": 0,
        "hornos": [
          {
            "estado": "OCUPADO",
            "finCuece": 482.98092659771385
          }
        ],
        "horasTrabajadas": 7,
        "diasTrabajados": 0,
        "moldesTerminados": 54,
        "cantidadTrabajadores": 5
      },
      {
        "n": 110,
        "evento": "FIN_CUECE",
        "reloj": 482.98092659771385,
        "ensambladores": [
          {
            "estado": "ENSAMBLANDO",
            "rnd": 0.5521017814615304,
            "finEnsamblado": 513.5019444123292,
            "llegadaACola": 1.7976931348623157E308
          },
          {
            "estado": "ENSAMBLANDO",
            "rnd": 0.8169739162054622,
            "finEnsamblado": 496.1605388054133,
            "llegadaACola": 1.7976931348623157E308
          },
          {
            "estado": "ENSAMBLANDO",
            "rnd": 0.851263525524909,
            "finEnsamblado": 501.8193858932376,
            "llegadaACola": 1.7976931348623157E308
          },
          {
            "estado": "ENSAMBLANDO",
            "rnd": 0.8466382867536004,
            "finEnsamblado": 487.9864109423576,
            "llegadaACola": 1.7976931348623157E308
          },
          {
            "estado": "ENSAMBLANDO",
            "rnd": 0.9676230723205996,
            "finEnsamblado": 508.2788640261704,
            "llegadaACola": 1.7976931348623157E308
          }
        ],
        "rnd": 0.40159248231145994,
        "cola": 0,
        "hornos": [
          {
            "estado": "LIBRE",
            "finCuece": 1.7976931348623157E308
          }
        ],
        "horasTrabajadas": 8,
        "diasTrabajados": 0,
        "moldesTerminados": 55,
        "cantidadTrabajadores": 5
      },
      {
        "n": 111,
        "evento": "FIN_ENSAMBLE",
        "reloj": 487.9864109423576,
        "ensambladores": [
          {
            "estado": "ENSAMBLANDO",
            "rnd": 0.5521017814615304,
            "finEnsamblado": 513.5019444123292,
            "llegadaACola": 1.7976931348623157E308
          },
          {
            "estado": "ENSAMBLANDO",
            "rnd": 0.8169739162054622,
            "finEnsamblado": 496.1605388054133,
            "llegadaACola": 1.7976931348623157E308
          },
          {
            "estado": "ENSAMBLANDO",
            "rnd": 0.851263525524909,
            "finEnsamblado": 501.8193858932376,
            "llegadaACola": 1.7976931348623157E308
          },
          {
            "estado": "ESPERANDO_HORNO",
            "rnd": 0.8466382867536004,
            "finEnsamblado": 1.7976931348623157E308,
            "llegadaACola": 1.7976931348623157E308
          },
          {
            "estado": "ENSAMBLANDO",
            "rnd": 0.9676230723205996,
            "finEnsamblado": 508.2788640261704,
            "llegadaACola": 1.7976931348623157E308
          }
        ],
        "rnd": 0.03415884749170617,
        "cola": 0,
        "hornos": [
          {
            "estado": "OCUPADO",
            "finCuece": 493.1913640273079
          }
        ],
        "horasTrabajadas": 8,
        "diasTrabajados": 0,
        "moldesTerminados": 55,
        "cantidadTrabajadores": 5
      },
      {
        "n": 112,
        "evento": "FIN_CUECE",
        "reloj": 493.1913640273079,
        "ensambladores": [
          {
            "estado": "ENSAMBLANDO",
            "rnd": 0.5521017814615304,
            "finEnsamblado": 513.5019444123292,
            "llegadaACola": 1.7976931348623157E308
          },
          {
            "estado": "ENSAMBLANDO",
            "rnd": 0.8169739162054622,
            "finEnsamblado": 496.1605388054133,
            "llegadaACola": 1.7976931348623157E308
          },
          {
            "estado": "ENSAMBLANDO",
            "rnd": 0.851263525524909,
            "finEnsamblado": 501.8193858932376,
            "llegadaACola": 1.7976931348623157E308
          },
          {
            "estado": "ENSAMBLANDO",
            "rnd": 0.4396120371995811,
            "finEnsamblado": 522.5874843993037,
            "llegadaACola": 1.7976931348623157E308
          },
          {
            "estado": "ENSAMBLANDO",
            "rnd": 0.9676230723205996,
            "finEnsamblado": 508.2788640261704,
            "llegadaACola": 1.7976931348623157E308
          }
        ],
        "rnd": 0.03415884749170617,
        "cola": 0,
        "hornos": [
          {
            "estado": "LIBRE",
            "finCuece": 1.7976931348623157E308
          }
        ],
        "horasTrabajadas": 8,
        "diasTrabajados": 0,
        "moldesTerminados": 56,
        "cantidadTrabajadores": 5
      },
      {
        "n": 113,
        "evento": "FIN_ENSAMBLE",
        "reloj": 496.1605388054133,
        "ensambladores": [
          {
            "estado": "ENSAMBLANDO",
            "rnd": 0.5521017814615304,
            "finEnsamblado": 513.5019444123292,
            "llegadaACola": 1.7976931348623157E308
          },
          {
            "estado": "ESPERANDO_HORNO",
            "rnd": 0.8169739162054622,
            "finEnsamblado": 1.7976931348623157E308,
            "llegadaACola": 1.7976931348623157E308
          },
          {
            "estado": "ENSAMBLANDO",
            "rnd": 0.851263525524909,
            "finEnsamblado": 501.8193858932376,
            "llegadaACola": 1.7976931348623157E308
          },
          {
            "estado": "ENSAMBLANDO",
            "rnd": 0.4396120371995811,
            "finEnsamblado": 522.5874843993037,
            "llegadaACola": 1.7976931348623157E308
          },
          {
            "estado": "ENSAMBLANDO",
            "rnd": 0.9676230723205996,
            "finEnsamblado": 508.2788640261704,
            "llegadaACola": 1.7976931348623157E308
          }
        ],
        "rnd": 0.8344973836172872,
        "cola": 0,
        "hornos": [
          {
            "estado": "OCUPADO",
            "finCuece": 506.167523107117
          }
        ],
        "horasTrabajadas": 8,
        "diasTrabajados": 0,
        "moldesTerminados": 56,
        "cantidadTrabajadores": 5
      }
    ];

  const filterSimulationData = (objeto, leaf) => {
    const newObjeto = { ...objeto }; // Create a shallow copy of the original object

    if(!leaf){
      newObjeto.ensambladores = objeto.ensambladores.map(obj => filterSimulationData(obj, true));
      newObjeto.hornos = objeto.hornos.map(obj => filterSimulationData(obj, true));
    }

    for (const atributo in objeto) {
      if (typeof newObjeto[atributo] === "number") {
        if(newObjeto[atributo] >= Number.MAX_VALUE){
          newObjeto[atributo] = "";
          continue;
        }
        newObjeto[atributo] = Number(newObjeto[atributo].toFixed(4));
      }
    }
    return newObjeto;
  }

  return (
    <div className="App">
      <SimulationForm></SimulationForm>
      <Grid data={data.map(objeto => filterSimulationData(objeto, false))} cantidadEnsambladores={3} cantidadHornos={1}></Grid>
    </div>
  );
}

export default App;
