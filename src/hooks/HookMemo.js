import React, { useEffect, useMemo, useState } from 'react'

const HookMemo = () => {
    const listCars = ['Audi', 'Toyota', 'Mahindra', 'Suzuki', 'Kia', 'Honda', 'Tata', 'Hyndai', 'Renault', 'Dodge', 'DC', 'Ford', 'GM', 'Volkwagen'];
    const [cars, updateCars] = useState(listCars);
    const [subscribe, updateSubscription] = useState(false);

    const displayCars = (cars) => {
        console.log('displaying cars again.....');
        const carsHtml = cars && cars.map((temp, index) => (
            <div key={temp+index}>{temp}</div>
        ))
        return carsHtml;
    }

    const rendersCars = useMemo(() => displayCars(cars), [cars])

    useEffect(() => {
        console.log('useEffect triggered-', subscribe);
    })

  return (
    <>
        <div className='row'>
            <div className='col-12'>
                Cars List
            </div>
        </div>

        <div className='row'>
            <div className='col-12'>
                {rendersCars}
            </div>
        </div>

        <div className='row'>
            <div className='col-12'>
                <div>--------------</div>
                <div>
                    <button onClick={() => updateSubscription(!subscribe)}>Subscribe</button>
                </div>
                <div>
                    <button onClick={() => updateCars([...cars, 'Tesla'])}>Add Car</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default HookMemo