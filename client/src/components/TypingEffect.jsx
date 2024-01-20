import ReactTyped from 'react-typed';

const TypingEffect = ({textArr, classList}) => {
  return (
    <ReactTyped strings={textArr} className={classList} loop typeSpeed={100} />
  );
};

export default TypingEffect