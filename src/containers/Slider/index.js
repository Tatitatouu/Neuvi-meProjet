import { useEffect, useState } from "react";
import { useData } from "../../contexts/DataContext";
import { getMonth } from "../../helpers/Date";
import "./style.scss";

const Slider = () => {
  const { data } = useData();
  const [currentIndex, setCurrentIndex] = useState(0);
  const events = data?.focus?.sort((a, b) =>
    new Date(a.date) < new Date(b.date) ? -1 : 1
  ) || [];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex =>
        prevIndex < events.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [events]);

  if (!events.length) return null;

  return (
    <div className="SlideCardList">
      {events.map((event, idx) => (
        <div
          key={event.title}
          className={`SlideCard SlideCard--${
            currentIndex === idx ? "display" : "hide"
          }`}
        >
          <img src={event.cover} alt="forum" />
          <div className="SlideCard__descriptionContainer">
            <div className="SlideCard__description">
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <div>{getMonth(new Date(event.date))}</div>
            </div>
          </div>
        </div>
      ))}
      
      <div className="SlideCard__paginationContainer">
        <div className="SlideCard__pagination">
          {events.map((event, idx) => (
            <input
              key={event.title}
              type="radio"
              name="radio-button"
              checked={currentIndex === idx}
              onChange={() => setCurrentIndex(idx)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;