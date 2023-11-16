import style from './CarDetails.module.css'

const CarDetails = () => {

    const cars =[
        {id: 1, car:"Supra", brand:"Toyota", cor:"Black", ano:1998},
        {id: 2, car:"Skyline GT-R", brand:"Nissan", cor:"Blue", ano:2002},
        {id: 3, car:"NSX", brand:"Honda", cor:"Red", ano:1990},
        {id: 4, car:"RX-7", brand:"Mazda", cor:"Yellow", ano:1998},
        {id: 5, car:"Silvia", brand:"Nissan", cor:"Green", ano:2000},
    ]

  return (    
    <>

        <ul>
            {cars.map((cars) => (
                <li key={cars.id}>
                    <p className={cars.car === "Supra" ? style.melhor : style.padrao}>
                        {cars.ano} - {cars.brand} - {cars.car} - {cars.cor}
                    </p>
                </li>))}
        </ul>    
    
    </>
  )
}

export default CarDetails