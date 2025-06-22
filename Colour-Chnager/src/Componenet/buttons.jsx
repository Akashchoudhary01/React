
function Btn({ ColorName, clrValue, setColor}) {
  return (
    <button
      onClick={() => setColor(ColorName)}
      className="outline-none px-4 py-1 border-1px-black rounded-full text-white shadow-lg"
      style={{ backgroundColor: clrValue }}
    >
      {ColorName}
    </button>
  );
}

export default Btn;
``