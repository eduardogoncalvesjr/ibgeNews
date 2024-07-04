import { useEffect, useState } from 'react';
import { FaArrowAltCircleUp } from 'react-icons/fa';

export default function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 1000);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {showButton && (
        <button
          onClick={ (e) => {
            e.preventDefault();
            window.scrollTo(0, 0);
          } }
          aria-label="Scroll to top button"
          className="navigate_button text-primary"
        >
          <FaArrowAltCircleUp />
        </button>
      )}
    </div>
  );
}
