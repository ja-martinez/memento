const Card = ({ key, type, visible, handleClick, isClearing }) => {
  const onClick = () => {
    handleClick(key);
  };

  return (
    <button disabled={isClearing || visible} onClick={onClick}>
      <img src={visible ? `./assets/${type}.jpg` : `./assets/4-blank.jpg`} alt="" />
    </button>
  );
};

export default Card;
