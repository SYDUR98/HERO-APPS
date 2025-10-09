import React from 'react';
import errorImg from '../../assets/error-404.png'

const ErrorPage = () => {
    return (
        <div>
            <img src={errorImg} alt="" />
            <p>Oops, page not found!</p>
        </div>
    );
};

export default ErrorPage;