import React from 'react';
import { Avatar } from 'antd';
import styles from "./Card.module.css";

const Card = () => {
    return ( 
    <>
    <div class={`card d-flex ${styles.card}`}>
  

    <div className="justify-content-center w-100 d-flex mt-5">
                <Avatar size={100} style={{ verticalAlign: 'middle', fontSize: "30px" }}>
                <span>{"Ed"?.slice(0,2).toUpperCase()}</span>
            </Avatar>
    </div>
    <div className={`justify-content-center w-100 d-flex mt-4 ${styles.username}`}>name</div>
    <div className="justify-content-center w-100 d-flex mb-4">Product Manager</div>

  <div class="card-body col-12 row">
    <div className="col-5">
        <p>First Name</p>
        <p>Email</p>
        <p>Phone</p>
        <p>Company</p>
        <p>Address</p>
    </div>
    <div className="col-7 mb-4">
        <p>First Name</p>
        <p>Email</p>
        <p>Phone</p>
        <p>Company</p>
        <p>Address</p>
    </div>
  </div>
</div>

</>

);
}
 
export default Card;