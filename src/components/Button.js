const Button = ({ isSelected, label, onClick }) => {
  return (
    <div
      onClick={() => onClick(label)}
      className={isSelected ? "button selected" : "button"}
    >
      {label}
    </div>
  );
};

export default Button;
