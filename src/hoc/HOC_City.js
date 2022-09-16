import React from 'react'
import withFilter from './withFilter'

const city_list = ['Muzaffarpur','Pune','Indore','Patna']
const HOC_City = (props) => {

  return (
    <>
        {
            props.list && props.list.map((item,index) => {
                <div key={item+index}>{item}</div>
            })
        }
    </>
  )
}

export default withFilter(HOC_City,city_list)