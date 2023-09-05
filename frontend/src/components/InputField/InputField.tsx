import './InputField.scss';

export function InputField({ label, type }: { label: string, type: string }) {
  return (
    <div className="inputbox">
      <input type={type} id="" required></input>
      <span>{label}</span>
    </div>
  );
}
