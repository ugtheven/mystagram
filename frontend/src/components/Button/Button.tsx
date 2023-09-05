import './Button.scss';

export function Button({ label }: { label: string }) {
  return (
    <div className="button">
      {label}
    </div>
  );
}
