import React from 'react';

interface CircleFillProps {
  progress: number; // 0 to 100
  size?: number;    // px
  fillColor?: string;
  bgColor?: string;
}

const CircleFill: React.FC<CircleFillProps> = ({
  progress,
  size = 120,
  fillColor ,
  bgColor = 'white',
}) => {
  const wrapperStyle: React.CSSProperties = {
    width: size,
    height: size,
    border:"1px solid black",
    borderRadius: '50%',
    backgroundColor: bgColor,
    position: 'relative',
    overflow: 'hidden',
  };

  const fillStyle: React.CSSProperties = {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: `${progress}%`, // fills from bottom up
    backgroundColor: fillColor,
    transition: 'height 0.3s ease',
  };

  const textStyle: React.CSSProperties = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontWeight: 'bold',
    fontSize: '1.2rem',
    color: fillColor,
    zIndex: 1,
  };

  return (
    <div style={wrapperStyle}>
      <div style={fillStyle}></div>
      <div style={textStyle}>{progress}%</div>
    </div>
  );
};

export default CircleFill;




// to call this component
 <ProgressCircle progress={20} size={60}  fillColor={"orange"}/>
