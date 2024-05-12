const Button = ({ text }) => {
  return (
    <div>
      <button className="text-lg font-semibold leading-[21.6px] border border-[#111E2C] py-5 px-[49px] flex items-center gap-[10px] rounded-[50px]">
        <span>{text}</span>{" "}
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M12.99 7L18 12.02H1"
              stroke="#111E2C"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
    </div>
  );
};

export default Button;
