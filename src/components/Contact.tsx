import React from 'react';

interface IProps{
    name: string,
    email?: string,
    handleRemove: (email: string) => void
}

const Contact = ({name, email = "N/A", handleRemove}: IProps)  => {
    return (
        <div className="card">
            <p>
                <strong>Name</strong> {name}
            </p>
            <p>
                <strong>Email</strong> {email}
            </p>
            <button onClick={() => handleRemove(email)}>Remove</button>
        </div>
    );
};

export const ContactDemo : React.FC<IProps> = ({name, email = "N/A"}) => {
    return (
        <div className="card">
            <p>
                <strong>Name</strong> {name}
            </p>
            <p>
                <strong>Email</strong> {email}
            </p>
        </div>
    );
};

export default Contact;