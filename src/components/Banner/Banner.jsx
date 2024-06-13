/** @format */

export default function Banner({ text, className }) {
  return (
    <div className={`banner-container ${className}`}>
      {text && (
        <div className='banner-text-container'>
          <div>{text}</div>
        </div>
      )}
    </div>
  );
}
