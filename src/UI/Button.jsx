import { Link } from 'react-router-dom';

function Button({ children, disabled, to, type, onClick }) {
  const base =
    'inline-block text-sm rounded-full bg-yellow-400  font-semibold uppercase tracking-wide text-stone-800 duration-300 hover:bg-yellow-300 hover:transition-colors focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed';

  const styles = {
    primary: base + ' px-4 py-3 md:px-6 md:py-4',
    small: base + ' px-4 py-2 md:px-5 md:py-2.5 text-xs',
    secondary:
      'inline-block text-sm border-2 border-stone-300 rounded-full font-semibold uppercase tracking-wide text-stone-400 duration-300 hover:bg-stone-300 hover:text-stone-800 hover:transition-colors focus:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 focus:text-stone-800 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5',
  };

  if (to)
    return (
      <Link className={styles[type]} to={to} onClick={onClick}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button className={styles[type]} disabled={disabled} onClick={onClick}>
        {children}
      </button>
    );

  return (
    <button className={styles[type]} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
