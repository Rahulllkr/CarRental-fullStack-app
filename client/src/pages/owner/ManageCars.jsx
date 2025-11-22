import React, { useEffect, useState } from 'react'
import { dummyCarData } from '../../assets/assets'
import Title from '../../components/owner/Title'

const ManageCars = () => {

  const currency = import.meta.env.VITA_CURRENCY
  const [cars,setCars] = useState([])

  const fetchOwnerCars = async () => {
    setCars(dummyCarData)
  }

  useEffect(() => {
    fetchOwnerCars()
  },[])

  return (
    <div className='px-4 pt-10 md:px-10 w-full'>
      <Title title="Manage Cars" subTitle="view all listed cars, update their details, or remove them from the booking platform." />

      <div className='max-w-3xl w-full rounded-md overflow-hidden border border-borderColor mt-6'>
        <table className='w-full border-collapse text-left text-sm text-gray-600'>
          <thead className='text-gray-500'>
            <tr>
              <th className='p-3 font-medium'>Car</th>
              <th className='p-3 font-medium max-md:hidden'>Category</th>
              <th className='p-3 font-medium'>Price</th>
              <th className='p-3 font-medium max-md:hidden'>Status</th>
              <th className='p-3 font-medium'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              cars.map((car,index) => (
                <tr key={index} className='border-t border-borderColor'>
                  <td className='p-3 flex items-center gap-3'>
                    <img className='h-12 w-12 aspect-square rounded-md object-cover' src={car.image} alt="" />
                    <div className='msx-md:hidden'>
                      <p className='font-medium'>{car.brand} {car.model}</p>
                      <p className='text-xs text-gray-500'>{car.seating_capacity} ● {car.transmission}</p>
                    </div>
                  </td>
                  <td className='p-3 max-md:hidden'>{car.category}</td>
                  <td className='p-3'>{currency}{car.pricePerDay}/day</td>
                  <td className='p-3 max-md:hidden'>
                    
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default ManageCars