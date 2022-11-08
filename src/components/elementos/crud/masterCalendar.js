/* eslint-disable */
import React, {useState, useEffect} from "react";
import {Calendar ,momentLocalizer} from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import 'moment/locale/es'; 
import {listarAgendamiento} from 'services/agendamiento'
import {obtenerJornadaPorTipoTrabajo} from 'services/jornadaVigencia'
import { ContactSupportOutlined } from "@material-ui/icons";

/* Calendar.setLocalizer(Calendar.momentLocalizer(moment)); */
const localizer = momentLocalizer(moment)

const MasterCalendar = ({idTipoTrabajo}) => {
  const [agendas, setAgendas] = useState([])
  const [jornadas, setJornadas] = useState([])  

  const diasSemana = [ 
    'Domingo',  
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado',    
  ]

  console.log('idTipoTrabajo', idTipoTrabajo)

  useEffect(() => {
    listarAgendamiento()
      .then(response => setAgendas(response.data))
      .catch(response => console.log(response))
    
    obtenerJornadaPorTipoTrabajo(idTipoTrabajo)
      .then(response => setJornadas(response.data))
      .catch(response => console.log(response))
  }, [idTipoTrabajo])

    const events = []   
     
    jornadas.forEach(jornada => {   

      const duracion = 60
      const fechaInicio = new Date(jornada.fechaInicio[0], jornada.fechaInicio[1]-1, jornada.fechaInicio[2], jornada.horaInicio[0], jornada.horaInicio[1], 0)
      const fechaFinHora = new Date(jornada.fechaInicio[0], jornada.fechaInicio[1]-1, jornada.fechaInicio[2], jornada.horaFin[0], jornada.horaFin[1], 0)
      const fechaFin = new Date(jornada.fechaFin[0], jornada.fechaFin[1]-1, jornada.fechaFin[2], jornada.horaFin[0], jornada.horaFin[1], 0)     
      
      while(fechaInicio < fechaFin){       

        let horaInicio =  new Date(fechaInicio) 
        let horaFin = new Date(fechaInicio) 
        horaFin.setMinutes(duracion)
      
        while(horaFin <= fechaFinHora){
         
          const diaSemana = diasSemana[horaInicio.getDay()]         

          if(jornada.diasSemana.includes(diaSemana)){         
            events.push(
              {
                title: "Disponible",
                bgColor: "#3360FF",
                start: new Date(horaInicio),
                end: new Date(horaFin)
              }
            )
          }
          
          horaInicio.setMinutes(60)
          horaFin.setMinutes(60)

          }         

          fechaInicio.setMinutes(1440)    
          fechaFinHora.setMinutes(1440)     
        }
    })
          
      
      agendas.forEach(a => {        
        events.push(
          {    
            title: "Agendado",
            bgColor: "#FFA200",
            start: new Date(a.fecha[0], a.fecha[1]-1, a.fecha[2], a.hora[0], a.hora[1], 0),
            end: new Date(a.fecha[0], a.fecha[1]-1, a.fecha[2], a.hora[0]+1, a.hora[1], 0)
          }
        )
       
      })

      const today = new Date();

    return <>
        <Calendar
          messages={{next:"Siguiente",previous:"Anterior",today:"Hoy", month:"Mes", week:"Semana", day:"Día"}}
          localizer={localizer} 
          selectable
          events={events}
          defaultView="week"
          scrollToTime={new Date(1970, 1, 1, 6)}
          defaultDate={new Date()}
          onSelectEvent={(event) => alert(event.title)}
          onSelectSlot={(slotInfo) =>
            alert(
              `selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
                `\nend: ${slotInfo.end.toLocaleString()}` +
                `\naction: ${slotInfo.action}`
            )
          }
          min={
            new Date(
              today.getFullYear(), 
              today.getMonth(), 
              today.getDate(), 
              5
            )
          }
          max={
            new Date(
              today.getFullYear(), 
              today.getMonth(), 
              today.getDate(), 
              21
            )
          }
        />
    </>
}
export default MasterCalendar