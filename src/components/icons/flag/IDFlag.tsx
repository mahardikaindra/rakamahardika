export const IDFlag: React.FC<React.SVGAttributes<{}>> = ({ ...rest }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 640 480"
        className="h-full"
        {...rest}
      >
        <g fillRule="evenodd">
          <rect width="640" height="240" fill="#ff0000" />
          <rect y="240" width="640" height="240" fill="#ffffff" />
        </g>
      </svg>
    );
  };
  