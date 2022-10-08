import React from "react";
import { useState } from "react";
import "./Auth.css";
import { useDispatch, useSelector } from 'react-redux'
import { logIn, signUp } from "../../actions/AuthAction";

const Auth = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.authReducer.loading);
  const [isSignUp, setSignUp] = useState(true);

  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    password: "",
    confirmpass: "",
    username: "",
  });

  const [confirmPass, setConfirmPass] = useState(true);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      data.password === data.confirmpass ? dispatch(signUp(data)) : setConfirmPass(false);
      return;
    }
    dispatch(logIn(data));
  };

  const resetForm = () => {
    setConfirmPass(true);
    setData({
      firstname: "",
      lastname: "",
      password: "",
      confirmpass: "",
      username: "",
    });
  };

  return (
    <div className="Auth">
      {/*Left side*/}
      <div className="a-left">
        <svg
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Cardy"
          viewBox="0 0 929 275"
        >
          <g filter="url(#filter0_d)">
            <rect
              y="89.516"
              width="330.156"
              height="188"
              rx="20"
              transform="rotate(-14.653 0 89.516)"
              fill="#39B53F"
            />
          </g>
          <g filter="url(#filter1_d)">
            <rect
              x="19"
              y="45"
              width="330.156"
              height="188"
              rx="20"
              fill="url(#paint0_linear)"
            />
          </g>
          <g filter="url(#filter2_d)">
            <rect
              x="48"
              width="330.156"
              height="188"
              rx="20"
              transform="rotate(14.592 48 0)"
              fill="url(#paint1_linear)"
            />
          </g>
          <path
            className="text"
            d="M467.946 107.2c-6.912 0-13.536 1.152-19.872 4.032-6.192 2.736-11.664 6.624-16.416 11.52-9.216 9.648-13.968 21.312-13.968 34.848 0 11.088 3.312 21.168 9.936 30.096 4.752 6.336 10.512 11.088 17.568 14.832 7.2 3.6 14.688 5.472 22.752 5.472 6.624 0 12.96-1.296 19.008-3.744 6.048-2.592 11.376-6.048 15.984-10.368 0 0 .144-.144.144-.288 2.304-2.16 3.312-4.752 3.312-7.632 0-3.168-1.008-5.616-3.168-7.632-2.016-2.16-4.608-3.168-7.632-3.168-2.88 0-5.328.864-7.344 2.88 0 0-.144 0-.288.144l-.288.288c-5.472 5.184-11.952 7.92-19.728 7.92-8.352 0-15.408-3.168-21.168-9.36-4.896-5.616-7.488-12.096-7.488-19.44 0-6.768 2.16-12.816 6.192-18 2.736-3.456 6.048-6.048 9.936-7.92 4.032-2.016 8.208-2.88 12.528-2.88 4.896 0 9.504 1.152 13.68 3.456-.144-.864-.288-1.872-.288-2.736 0-1.872.432-3.6 1.008-5.184 1.152-2.736 2.88-4.896 5.184-6.624 2.304-1.584 4.896-2.448 7.632-2.448-8.208-5.472-17.28-8.064-27.216-8.064zm27.504 11.376c-2.16 0-4.176.576-6.048 1.872-2.016 1.296-3.312 3.168-4.176 5.472-.288 1.152-.576 2.304-.576 3.456 0 2.016.576 3.744 1.584 5.472.576.72 1.152 1.44 1.872 2.304 2.16 2.016 4.608 3.024 7.488 3.024 3.024 0 5.616-1.152 7.632-3.168 2.16-2.16 3.168-4.752 3.168-7.632 0-1.872-.432-3.6-1.296-5.184 0-.144-.144-.432-.432-.72-.288-.432-.432-.72-.72-.864-2.016-2.736-4.896-4.032-8.352-4.032h-.144zM572.967 107.2c-2.16 0-4.176.576-6.048 1.872a10.503 10.503 0 00-3.744 4.176l-9.504 17.136a14.022 14.022 0 014.896-.864h1.44c1.872.144 3.6.72 5.328 1.584a.31.31 0 01.288.288c1.152.576 2.016 1.296 2.88 2.16 1.008.864 1.872 2.016 2.448 3.168l36.72 65.52c1.008 1.728 2.304 3.024 4.032 4.176 1.728 1.008 3.6 1.584 5.616 1.584 2.88 0 5.472-1.008 7.488-3.024 2.304-2.304 3.312-4.896 3.312-7.776 0-1.872-.432-3.6-1.44-5.184l-44.064-78.912c-.72-1.44-1.728-2.736-3.168-3.744-.864-.72-1.872-1.296-3.024-1.584-1.008-.432-2.16-.576-3.456-.576zm-14.688 25.488c-3.888 0-6.768 1.728-8.784 5.184l-30.384 54.144c-.864 1.584-1.296 3.312-1.296 5.184 0 2.88 1.008 5.328 3.024 7.488 2.16 2.16 4.752 3.312 7.776 3.312 2.016 0 3.888-.576 5.616-1.584 1.728-1.152 3.168-2.448 4.032-4.176l30.24-54.144c.72-1.44 1.008-3.024 1.008-4.464 0-1.152-.144-2.16-.432-3.168-.864-2.88-2.592-4.896-5.184-6.336-1.584-1.008-3.312-1.44-5.328-1.44h-.288zM650.111 107.2c-3.168 0-5.904 1.152-8.064 3.744-1.728 2.016-2.592 4.32-2.592 6.912v15.408c.144 2.448 1.008 4.608 2.736 6.624 2.16 2.304 4.896 3.6 8.064 3.6 2.88 0 5.184-1.008 7.2-2.736 2.448-2.16 3.6-4.752 3.6-7.776V128.8h30.24c2.16 0 4.032.72 5.472 2.16 2.16 1.728 3.168 4.032 3.168 6.768 0 3.024-1.152 5.472-3.6 7.344-1.44 1.008-3.024 1.584-4.896 1.728H655.295l-5.04-.144c-2.16 0-4.176-.576-6.192-1.44-1.728-.864-3.312-2.016-4.608-3.456v55.44c0 2.88 1.008 5.472 3.024 7.632 2.304 2.016 4.896 3.168 7.776 3.168 3.168 0 5.904-1.152 7.92-3.456 2.016-2.016 2.88-4.464 2.88-7.344v-28.8h18.72c.288.288.432.576.576.864l.144.144 22.608 27.504c.144-4.032 1.728-7.488 4.608-10.08 2.736-2.592 5.904-3.744 9.648-3.744.864 0 1.728 0 2.448.144l-14.976-18.144c3.168-1.728 5.904-3.744 8.208-6.192 5.76-6.048 8.496-13.104 8.496-21.168 0-7.776-2.592-14.544-7.776-20.304-5.616-6.336-12.672-9.792-21.168-10.224H650.111zm67.248 79.2c-2.88 0-5.472 1.008-7.632 3.024-2.016 2.016-3.168 4.608-3.168 7.776 0 1.728.432 3.312 1.008 4.752.72 1.296 1.728 2.448 3.024 3.6 1.728 1.296 3.6 2.16 5.616 2.448h1.152c2.592 0 4.896-.864 6.768-2.448 2.736-2.304 4.032-5.04 4.032-8.352 0-2.304-.576-4.32-1.872-6.048-.72-1.152-1.44-1.872-2.016-2.304-2.016-1.728-4.32-2.448-6.912-2.448zM750.236 107.2c-3.168 0-5.904 1.152-8.064 3.744-1.728 2.016-2.592 4.32-2.592 6.912V197.2c0 2.88 1.008 5.472 3.024 7.632 2.16 2.016 4.752 3.168 7.776 3.168h28.224c2.88 0 5.76-.288 8.496-.864a73.701 73.701 0 008.064-2.16c-2.16-.576-4.032-1.728-5.76-3.168-1.152-1.152-2.304-2.448-3.168-3.888-1.008-2.16-1.584-4.464-1.584-6.768 0-2.016.432-4.032 1.296-5.904-2.592.72-5.184 1.152-7.92 1.152H761.18V118c0-2.304.576-4.464 1.584-6.48a14.367 14.367 0 013.312-4.32h-15.84zm24.624 0c-3.456 0-6.192 1.44-8.352 4.32-1.296 1.872-2.016 4.032-2.016 6.48 0 2.88 1.008 5.328 2.88 7.488 2.016 2.016 4.608 3.168 7.488 3.312h3.6c7.92.144 14.544 3.024 20.016 8.64 5.472 5.472 8.208 12.24 8.208 20.16 0 5.184-1.296 9.936-3.888 14.4-2.592 4.32-6.048 7.92-10.368 10.512 0 0-.144 0-.432.144-2.016 1.728-3.312 3.888-3.888 6.768 0 .576-.144 1.152-.144 1.728 0 1.728.432 3.456 1.152 5.184a12.55 12.55 0 004.752 4.752c1.584.72 3.168 1.152 4.896 1.152 1.728 0 3.168-.432 4.608-1.152 7.632-4.464 13.68-10.368 18.144-18.144 4.608-7.776 6.768-16.272 6.768-25.344 0-8.928-2.16-17.28-6.48-24.768-4.32-7.632-10.08-13.536-17.568-18.144-7.344-4.608-15.408-7.2-24.336-7.488h-5.04zM917.609 107.2c-2.016 0-3.888.432-5.616 1.44-1.152.72-2.592 2.16-4.176 4.176l-23.76 28.224-23.76-28.08c-1.44-2.016-2.88-3.456-4.176-4.176-1.728-1.152-3.6-1.584-5.616-1.584-2.88 0-5.472 1.008-7.632 3.168-2.016 2.016-3.168 4.608-3.168 7.632 0 1.296.288 2.592.72 4.032.432.864 1.44 2.16 2.88 4.176l31.248 37.008a57.338 57.338 0 002.448 2.592c2.016 1.728 4.464 2.736 7.056 2.736 1.584 0 3.024-.432 4.464-1.008 1.152-.576 2.16-1.296 3.024-2.016.72-.864 1.584-1.872 2.592-3.024.288-.288.432-.72 1.008-1.296.576-.576 1.008-1.152 1.296-1.44l28.368-33.696c1.584-1.872 2.592-3.312 2.88-4.176.576-1.296.72-2.592.72-3.888 0-3.024-1.008-5.616-3.168-7.632-2.016-2.16-4.608-3.168-7.632-3.168zm-44.352 59.616V197.2c0 2.88 1.008 5.472 3.024 7.488 2.16 2.16 4.752 3.312 7.776 3.312 3.168 0 5.904-1.152 7.92-3.456 2.016-2.16 2.88-4.608 2.88-7.344v-30.384c-3.6 3.312-7.2 5.04-10.944 5.184-3.456-.144-7.056-1.872-10.656-5.184z"
            fill="currentColor"
          />
          <path
            d="M194.366 67.116c5.43-6.992 16.599-4 17.805 4.771l5.41 39.336a10.001 10.001 0 007.318 8.297l41.63 11.154c9.947 2.665 9.858 16.81-.121 19.35l-33.363 8.493a10.001 10.001 0 00-7.44 11.054l4.364 31.733c1.297 9.432-10.073 15.169-16.889 8.522l-33.574-32.743a10.001 10.001 0 00-9.449-2.532L124.61 186.12c-9.226 2.349-16.204-8.304-10.365-15.824l19.646-25.3a9.999 9.999 0 00-.917-13.292l-24.647-24.037c-7.372-7.19-.376-19.484 9.57-16.819l41.63 11.155a10 10 0 0010.487-3.526l24.352-31.36z"
            fill="url(#paint2_diamond)"
            fillOpacity=".5"
          />
          <defs>
            <filter
              id="filter0_d"
              x=".404"
              y="10.404"
              width="366.167"
              height="264.594"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
              <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow"
                result="shape"
              />
            </filter>
            <filter
              id="filter1_d"
              x="15"
              y="45"
              width="338.156"
              height="196"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
              <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow"
                result="shape"
              />
            </filter>
            <filter
              id="filter2_d"
              x="1.025"
              y="4.389"
              width="366.093"
              height="264.336"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
              <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow"
                result="shape"
              />
            </filter>
            <linearGradient
              id="paint0_linear"
              x1="184.078"
              y1="45"
              x2="184.078"
              y2="233"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#428BCA" />
              <stop offset="1" stopColor="#5542CA" />
            </linearGradient>
            <linearGradient
              id="paint1_linear"
              x1="213.078"
              y1="0"
              x2="213.078"
              y2="188"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F4971A" />
              <stop offset="1" stopColor="#F261B0" />
            </linearGradient>
            <radialGradient
              id="paint2_diamond"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="matrix(-24.20002 90.3157 -117.01708 -31.35463 184.735 138.67)"
            >
              <stop stopColor="#FAFAFA" />
              <stop offset="1" stopColor="#E4DA80" stopOpacity=".47" />
            </radialGradient>
          </defs>
        </svg>
        <div className="cardy-phrase">
          <h3>Welcome to the Cardy Xperience</h3>
        </div>
      </div>
      {/*Right side*/}
      <div className="a-right">
        <form className="infoForm authForm" onSubmit={handleSubmit}>
          <h3>{isSignUp ? "Sign up" : "Login"}</h3>

          {isSignUp && (
            <div>
              <input
                type="text"
                placeholder="First Name"
                className="infoInput"
                name="firstname"
                onChange={handleChange}
                value={data.firstname}
              />
              <input
                type="text"
                placeholder="Last Name"
                className="infoInput"
                name="lastname"
                onChange={handleChange}
                value={data.lastname}
              />
            </div>
          )}
          <div>
            <input
              type="text"
              placeholder="Username"
              className="infoInput"
              name="username"
              onChange={handleChange}
              value={data.username}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              className="infoInput"
              name="password"
              onChange={handleChange}
              value={data.password}
            />
            {isSignUp && (
              <input
                type="password"
                placeholder="Confirm Password"
                className="infoInput"
                name="confirmpass"
                onChange={handleChange}
                value={data.confirmpass}
              />
            )}
          </div>
          <span
            style={{
              display: confirmPass ? "none" : "block",
              color: "red",
              fontSize: "12px",
              alignSelf: "flex-end",
              marginRight: "5px",
            }}
          >
            * Confirm Password is not same
          </span>
          <button className="button infoButton" type="submit" disabled={loading}>
            {loading ? "Processing..." : isSignUp ? "Signup" : "Login"}
          </button>
          <div>
            <span
              style={{ fontSize: "13px", cursor: "pointer" }}
              onClick={() => {
                setSignUp((prev) => !prev);
                resetForm();
              }}
            >
              {isSignUp
                ? "Already have an account. Login!"
                : "Don't have an account? Sign Up"}
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Auth;
