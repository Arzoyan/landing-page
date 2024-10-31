const InputWithLabel = ({ labelText, value, onChange }) => {
  return (
    <div>
      <label>{labelText}</label>
      <input value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
};

export default InputWithLabel;
