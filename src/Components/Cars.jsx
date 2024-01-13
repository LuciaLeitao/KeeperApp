import React from "react";
import cars from "../assets/data/cars.json";
function Cars() {
    const [honda,tesla] = cars;
    console.log(honda, tesla);
const {speedStats:{topSpeed:hondaSpeed}} = honda;
console.log(hondaSpeed);
const {speedStats:{topSpeed:teslaSpeed}} = tesla;
console.log(teslaSpeed);

function handleMouseOver(){
    console.log("mouse hover");
    const button = document.querySelector("button");
    button.classList.add("hover:bg-amber-600")
}

  return (
    <section className="bg-gray-800 w-full p-6 rounded-lg flex flex-col justify-center items-center">
        <tr className="flex justify-around w-[60rem]">
        <th>Brand</th>
        <th>Color</th>
        <th>Speed</th>
      </tr>
      {cars.map((car, key) => (
       
          <tr key={car.key} className="flex justify-around w-[60rem]">
            <td>{car.model}</td>
            <td>{car.coloursByPopularity[0]}</td>
            <td>{car.topSpeed}</td>
          </tr>
      
        
      ))}
    <button onMouseOver={handleMouseOver} className="bg-slate-400 rounded-lg p-5 w-[300px] m-9" >Submit</button>
    </section>
  );
}

export default Cars;
