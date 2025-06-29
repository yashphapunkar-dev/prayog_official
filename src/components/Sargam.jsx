import React from "react";

const swaras = ["सा", "रे", "ग", "म", "प", "ध", "नि", "सां"];

const OrbitingSwaras = ({ diameter = 200, duration = 10, imageUrl }) => {
  const radius = diameter / 2;

  return (
    <div
      style={{
        position: "relative",
        width: `${diameter}px`,
        height: `${diameter}px`,
        margin: "auto",
      }}
    >
      {/* Center image */}
      <img
        src="/assets/logo1.png"
        alt="Center"
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: `${diameter * 0.7}px`,
          height: `${diameter * 0.7}px`,
          borderRadius: "50%",
          objectFit: "cover",
          zIndex: 2,
        }}
      />

      {/* Orbiting swaras */}
      {swaras.map((swar, index) => {
        const delay = (duration / swaras.length) * index;

        return (
          <div
            key={index}
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              animation: `rotate ${duration}s linear infinite`,
              animationDelay: `-${delay}s`,
            }}
          >
            <div
              style={{
                position: "absolute",
                left: `${radius}px`,
                top: `${radius - 20}px`,
                transform: `translateX(${radius - 20}px)`,
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                backgroundColor: "black",
                color: "#fff",
                fontWeight: "bold",
                fontSize: "18px",
                textAlign: "center",
                lineHeight: "40px",
              }}
            >
              {swar}
            </div>
          </div>
        );
      })}

      {/* Animation style */}
      <style>
        {`
          @keyframes rotate {
            0%   { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default OrbitingSwaras;
