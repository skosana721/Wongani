---
Layout:
Title: "Problems that I encounter today"
date: 2021-02-25
---

## Introduction

I will share some of the problems that I have encountered while doing moral's activity.

## Body

So moral gave us an activity to do an app which we have to do with users being able to enter information about the car that they want to sell along with how long did they own the car and the should be an input to allow the user to upload an image of the car which all of this data is filled in a form and when a user clicks submit the information should be mapped in another component where users can view all the cars that are being sold in form of a table. And in that table the is a button with the text context of "interested" if the user clicks it they are redirected to another component where they can see the car they have selected and also a form to submit their info.

The problem that I had was making a search functionality that search's the car brand in the table and also enabling users to search based on price. And also another problem was that it was possible to submit objects with the same id which is not suppose to happen.

First problem: search functionality

For me to solve the problem I had to do some research and watched some youtube videos to understand exactly what is required to search for search input.

### Solve

import { useSelector, useDispatch } from "react-redux";
import { Table, Button } from "reactstrap";
import { selectedCar } from "../redux/viewCar/actions";

function ViewCar() {
const [searchList, setSearchList] = useState("");
const cars = useSelector((state) => state.register.registerForm);
const dispatch = useDispatch();
const selectCar = (id) => {
let filteredList = cars.find((car) => car.id === id);
dispatch(selectedCar(filteredList));
};
const searchResults = cars.filter((car) => {
return (
car.brand.toLowerCase().includes(searchList.toLowerCase()) ||
car.price.includes(searchList)
);
});

return (

<div>
<input
type="text"
onChange={(e) => setSearchList(e.target.value)}
placeholder="Search car brand / price"
/>
<Table dark>
<thead>
<tr>
<th>Car Brand</th>
<th>Car Model</th>
<th>Year of ownship</th>
<th>Price</th>
<th>Contact Detail</th>
<th>Location</th>
</tr>
</thead>
{searchResults.map((car) => {
return (
<tbody key={car.id}>
<tr>
<td>{car.brand}</td>
<td>{car.model}</td>
<td>{car.period}</td>
<td>R {car.price}</td>
<td>{car.contact}</td>
<th>{car.location}</th>
<td>
<Button onClick={() => selectCar(car.id)}>Interested</Button>
</td>
</tr>
</tbody>
);
})}
</Table>
</div>
);
}

export default ViewCar;

Some of the variable searchResults filters based on what the user types and find if there is any value in the array of objects that matches what is being typed in the input.

Second problem: removing duplicate

#### Solve

function ViewCar (){
const cars = useSelector((state) => state.register.registerForm)
const removeDuplicates = cars.reduce((acc, curCar)=>{
const car = acc.find(car=> car.id=== curCar.id)
if(!car){
return acc.concat([curCar])
}else{
return acc
}
},[])
return(
filteredList.map(car=>{
return(

<div key={car.id}>
<h2>{car.brand}</h2>
</div>
)
})
)

}

## Conclusion

In conclusion, the activity that moral gave us helped me in understanding some of the concepts that I did not know like redux-persist, how to prevent duplicate when updating state, and also how to create a search input that search's for both name and number.
