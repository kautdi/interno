import * as React from 'react';
import Banner from '../components/Banner';

export interface IFaQProps {
}

export default function FaQ (props: IFaQProps) {

  const [activeQuestions, setActiveQuestions] = React.useState<number[]>([]);

  const handleClick = (index: number) => {
    setActiveQuestions((prevActive) =>
      prevActive.includes(index)
        ? prevActive.filter((item) => item !== index)
        : [...prevActive, index]
    );
  };
  
  return (
    <>
      <Banner head='Faq’s' navigate='Home / Faq'/>
      <section className="questBlocks">
    
    <div className="everyQuestAnswer questBlocks__everyQuestAnswer">
        <h1 className="content__head everyQuestAnswer__content-head content__head__headOne">
            Every Question Answered
        </h1>
        <div className="pic-quest questBlocks__pic-quest">
            <div className="pic-block pic-quest__pic-block">
                <img src="../img/faq1.png" alt="" />
            </div>
            <div className="questBlock questBlocks__questBlock">
        {Array.from({ length: 5 }, (_, index) => (
          <div className={`question questBlock__question ${activeQuestions.includes(index) ? 'question__active' : ''}`} key={index}>
            <div className="quest question__quest">
              <h3 className="content__head question__content-head content__head__headFour">
                What is the Hipcouch Interior Design Service?
              </h3>
              <button onClick={() => handleClick(index)}>
                <i>
                  <svg width="71" height="70" viewBox="0 0 71 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M32.1641 44L40.1641 35L32.1641 26"
                      stroke="#292F36"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </i>
              </button>
            </div>
            <p className="content__desc quest__desc content__desc__large">
              Lorem ipsum dolor sit amet, adipiscing fromAliquam eu sem turpmaximus.
            </p>
          </div>
        ))}
      </div>
        </div>
    </div>
    <div className="everyQuestAnswer questBlocks__everyQuestAnswer">
        <h1 className="content__head everyQuestAnswer__content-head content__head__headOne">
            Project related questions
        </h1>
        <div className="pic-quest questBlocks__pic-quest">
        <div className="questBlock questBlocks__questBlock">
        {Array.from({ length: 5 }, (_, index) => (
          <div className={`question questBlock__question ${activeQuestions.includes(index) ? 'question__active' : ''}`} key={index}>
            <div className="quest question__quest">
              <h3 className="content__head question__content-head content__head__headFour">
                What is the Hipcouch Interior Design Service?
              </h3>
              <button onClick={() => handleClick(index)}>
                <i>
                  <svg width="71" height="70" viewBox="0 0 71 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M32.1641 44L40.1641 35L32.1641 26"
                      stroke="#292F36"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </i>
              </button>
            </div>
            <p className="content__desc quest__desc content__desc__large">
              Lorem ipsum dolor sit amet, adipiscing fromAliquam eu sem turpmaximus.
            </p>
          </div>
        ))}
      </div>
            <div className="pic-block pic-quest__pic-block">
                <img src="../img/faq2.png" alt="" />
            </div>
        </div>
    </div>
</section>
    </>
  );
}
