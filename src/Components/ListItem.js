import React, { useEffect } from "react"
import { Link } from "react-router-dom";

const ListItem = ({ props }) => {


    const handleDelete = async () => {
        await fetch(`https://sweede.app/DeliveryBoy/delete-Employee/${props.id}`, {
            method: 'DELETE'
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }
    return (
        <tr className="listBody">

            <th scope="row" className="fw-bolder">{props.FirstName} {props.LastName}</th>
            <td>{props.DOB}</td>
            <td>{props.StartDate}</td>
            <td>{props.EndDate}</td>
            <td>{props.Description}</td>

            <div class="dropdown dropstart">
                <button class="btn border-0 fa-solid fa-ellipsis-vertical" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">

                </button>
                <ul class="dropdown-menu dropdown-menu-light" aria-labelledby="dropdownMenuButton2">
                    <li><a class="dropdown-item " href="#"><i class="fa-solid fa-eye"></i>   View</a></li>
                    <hr className="my-1" />

                    <li><a class="dropdown-item" href="#"><i class="fa-solid fa-pen"></i>   Edit</a></li>
                    <hr className="my-1" />
                    <li><a class="dropdown-item" onClick={handleDelete} href="#"><i class="fa-solid fa-trash"></i> Delete</a></li>
                </ul>
            </div>
        </tr>
    )
};

export default ListItem;
