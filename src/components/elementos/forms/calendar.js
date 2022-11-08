/* eslint-disable*/

import React, {useState} from "react"
import { Colxx } from 'components/common/CustomBootstrap';
import { FormGroup } from 'reactstrap';
import DatePicker,{setDefaultLocale} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

setDefaultLocale('es')
/**
 * 
 * @param {*} title titulo que se mostrara 
 * @param {*} size tamaño del colxx
 * @param {*} mindate fecha minima que tendra en cuenta el calendario
 * @param {*} mmg mensaje que muestra en el input
 * @param {*} work variable bool la cual define un calendario que solo permite los dias entre semana
 * @param {*} name el nombre como se mostrara en el data del formulario
 * @param {*} register  funcionalidad de react form que agrega el input al data
 * @param {*} setValue funcionalidad que permite ligar componentes diferentes a input al formulario
 * @returns 
 */
const Calendar = ({title, size, mindate, mmg, work, name, register, setValue}) => {

    const [startDate, setStartDate] = useState("");
   // console.log("este es el set",startDate)
    
    // filter for working calendar
    const isWeekday = (date) => {
        const day = date.getDay();
        return day !== 0 && day !== 6;
    };

    const HandlerCalendar = (date) =>{
        var dd = date.getDate()
        var mm = date.getMonth()+1
          
         setStartDate(date)
         setValue(name,`${ date.getFullYear()}-${((mm>9 ? '' : '0') + mm)}-${(dd >9 ? '' : '0') + dd}`)
        // console.log("este es el set",startDate)
    }

    // working calendar setup
    const WorkCalendar = () => {
        return <DatePicker 
        dateFormat="yyyy-MM-dd"
        startDate=""
        selected={startDate} 
        onChange={HandlerCalendar}
        minDate={mindate}
        filterDate={isWeekday}
        placeholderText={mmg !== undefined && mmg || "ingrese fecha"}
        />
    }

    // Normal Calendar set up
    const NormalCalendar = () => {
        return <DatePicker 
        dateFormat="yyyy-MM-dd"
        selected={startDate} 
        onChange={HandlerCalendar}
        minDate={mindate}
        placeholderText={mmg !== undefined && mmg || "ingrese fecha"}
        />
    }

    return <>
        <Colxx xxs={size}> 
            <FormGroup>  
                {title !== undefined && <h5>{title.charAt(0).toUpperCase() + title.slice(1)}</h5>}
                {work === 'true' && WorkCalendar() || NormalCalendar()}
                <input type="hidden" id={name} {...register(name)}
                />
            </FormGroup>
        </Colxx>  
    </>
}


export default Calendar