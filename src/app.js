import React,{ useState } from 'react'
import HighLight from './highlight'
import { lower } from './utils'

const App = () => {
    const [ word, setWord ] = useState('')
    const [ courseName, setCourseName ] = useState('')
    const [ courseHours, setCourseHours ] = useState('')

    function handleChange(func){
        return e => {
            func(e.target.value)
        }
    }

    return (
       <div class="container">
         <input value={word} onChange={handleChange(setWord)} type="text"/>
         <p><HighLight children={'Texto ser marcado testando'} toHighLight={word}/></p>
         <p><HighLight children={'subexto E texto ser marcado testando'} toHighLight={word}/></p>
         <table>
             <thead>
                 <tr>
                     <td>cursos</td>
                     <td>Horas</td>
                 </tr>
             </thead>
             <tbody>
                 <tr>
                     <td><input onChange={handleChange(setCourseName)} value={courseName} type="text"/></td>
                     <td><input onChange={handleChange(setCourseHours)} value={courseHours} type="text"/></td>
                 </tr>
                 {courses.filter(item => {
                    // let regex = new RegExp(`${courseName}`,'i')
                    // return item.name.match(regex)
                    
                    //o includes considera true quando o valor é uma string vazia como 
                    //como o valor vazio de courseName no inicio!!
                    return lower(item.name).includes(lower(courseName)) &&
                     lower(item.hours).includes(lower(courseHours))
                 }).map(item => {
                     return  <tr key={item.name}>
                                <td><HighLight children={item.name} toHighLight={courseName}/></td>
                                <td><HighLight children={item.hours} toHighLight={courseHours}/></td>
                             </tr>
                 })}
             </tbody>
         </table>
       </div>
    )
}

const courses = [
    {
        name:'vue javascript',
        hours:'42h'
    },
    {
        name:'Javascript',
        hours:'42h'
    },
    {
        name:'React ninja',
        hours:'60'
    }
]

export default App
