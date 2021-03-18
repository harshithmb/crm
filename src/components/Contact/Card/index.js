import React from 'react';
import { Avatar } from 'antd';
import styles from "./Card.module.css";
import { connect } from 'react-redux';

const Card = ({ selectedContact }) => {
    let { color, company, fullName, description, address, email, phone } = selectedContact;
    return (
        <>
            <div className={`card d-flex ${styles.card}`}>
                <div className="justify-content-center w-100 d-flex mt-5">
                    <Avatar size={100} style={{ verticalAlign: 'middle', fontSize: "30px", backgroundColor: color }}>
                        <span>{fullName?.slice(0, 2).toUpperCase()}</span>
                    </Avatar>
                </div>
                <div className={`justify-content-center w-100 d-flex mt-4 ${styles.username}`}>{fullName}</div>
                <div className="justify-content-center w-100 d-flex mb-4">{description}</div>

                <div class="card-body col-12 row">
                    <div className="col-5">
                        <p>Full Name</p>
                        <p>Email</p>
                        <p>Phone</p>
                        <p>Company</p>
                        <p>Address</p>
                    </div>
                    <div className="col-7 mb-4">
                        <p>{fullName}</p>
                        <p>{email}</p>
                        <p>{phone}</p>
                        <p>{company}</p>
                        <p>{address}</p>
                    </div>
                </div>
            </div>

        </>

    );
}



const mapStateToProps = (store) => ({
    selectedContact: store?.selectedContact,
})

export default connect(mapStateToProps, null)(Card);