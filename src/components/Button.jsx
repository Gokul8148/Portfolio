import { ArrowDownToLine, ArrowRight, Mail } from 'lucide-react';

const iconMap = {
  arrow: ArrowRight,
  download: ArrowDownToLine,
  mail: Mail,
};

export default function Button({
  children,
  href,
  download,
  variant = 'primary',
  icon,
  className = '',
  ...props
}) {
  const Icon = iconMap[icon];
  const classes = `button button--${variant} ${className}`.trim();
  const content = (
    <>
      <span>{children}</span>
      {Icon && <Icon size={16} strokeWidth={1.8} aria-hidden="true" />}
    </>
  );

  if (href) {
    return (
      <a className={classes} href={href} download={download} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} type="button" {...props}>
      {content}
    </button>
  );
}
