import axios from 'axios'
import React, { useState } from 'react'
import { Card } from '../components/Card'

export const ViewList = () => {
  
    const [products, setProducts] = useState([])

    function fetchData () {
        axios.get('http://172.22.0.25:3005/').then(result => setProducts(result.data))
    }
    
  return (
    <div>
        <button onClick={fetchData} className='btn btn-primary'>Tavarlarni yuklash</button>
        <div className='grid grid-cols-4'>
            { 
                products.map((product, index) => {
                    return <Card key={index} product={product}/>
                })
            }
        </div>
    </div>
  )
}
