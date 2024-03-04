import React, { FC, useState } from 'react';

interface IAccordionProps {
  head: string;
  desc: string;
}

const Accordion: FC<IAccordionProps> = ({ head, desc }) => {
  const [active, setActive] = useState<boolean>(false);

  const handleClick = () => {
    setActive((prevActive) => !prevActive);
  };

  return (
    <div
      onClick={handleClick}
      className={`accordion questAnsw__accordion ${active ? 'accordion__active' : ''}`}
    >
      <div className="quest accordion__quest">
        <p className="content__desc accordion__content-desc content__desc__bold">{head}</p>
        <button>
          <i>
            <svg width="44" height="47" viewBox="0 0 44 47" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="22" cy="25" r="22" fill="#F4F0EC" />
              <path
                d="M14.4698 25.985H30.3948V24.165H14.4698V25.985ZM21.4698 16.78V33.37H23.3948V16.78H21.4698Z"
                fill="#292F36"
              />
            </svg>
          </i>
        </button>
      </div>
      <p className="content__desc accordion__desc content__desc__large">{desc}</p>
    </div>
  );
};

export default Accordion;
