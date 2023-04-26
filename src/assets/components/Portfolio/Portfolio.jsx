import { useEffect, useState, useRef } from "react";

export default function Portfolio({ portfolioRef, appSize }) {
  const PortfolioAnimationRef = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.map((entry) => {
        entry.isIntersecting &&
          (setVisible(entry.isIntersecting), observer.unobserve(entry.target));
      });
    });
    PortfolioAnimationRef.current && observer.observe(PortfolioAnimationRef.current);
  }, [PortfolioAnimationRef]);
  return (
    <div
      className='d-flex-column border-bottom-1'
      ref={PortfolioAnimationRef}
      style={{
        paddingTop: visible ? '0' : '30%',
        opacity: visible ? '1' : '0',
        transition: 'all .8s',
      }}
    >
      <div
        className={`d-flex-column b-surface-1 ${
          appSize < 800
            ? 'pt-32 pr-24 pb-32 pl-24'
            : appSize < 1050
            ? 'pt-64 pr-48 pb-64 pl-48'
            : 'pt-96 pr-64 pb-96 pl-64'
        }`}
      >
        <p
          className={`ff-title mb-24 ${
            appSize < 800 ? 'fs-18' : appSize < 1050 ? 'fs-32' : 'fs-48'
          }`}
        >
          Portfolio
        </p>
        <p
          className={`ff-text ${
            appSize < 800 ? 'fs-10' : appSize < 1050 ? 'fs-16' : 'fs-20'
          }`}
        >
          Voici un aperçu de mon travail sur quelques clients qui ont accepté de
          se faire photographier
        </p>
      </div>
      <div className='b-surface-1 border-top-1 border-bottom-1' ref={portfolioRef}></div>
    </div>
  );
}
