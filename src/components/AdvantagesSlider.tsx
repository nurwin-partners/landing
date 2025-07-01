import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState, useCallback, useRef } from "react";
import { useMediaQuery } from "usehooks-ts";

interface Advantage {
  title: string;
  description: string;
  icon: string;
}

const advantages: Advantage[] = [
  {
    title: "Direct Offers for Maximum Earnings",
    description:
      "Tired of losing 10% to 50% of your profits by working through CPA networks? Partner with us directly and keep more of your hard-earned money!",
    icon: "assets/icon-1.svg",
  },
  {
    title: "Flexible Payouts at Your Fingertips",
    description:
      "Earn up to $50 per CPA and up to 45% revenue share and enjoy multiple withdrawal options. Qualifying webmasters can access growth loans!",
    icon: "assets/icon-2.svg",
  },
  {
    title: "Comprehensive Statistics at Your Side",
    description:
      "Our advanced tracking ensures you stay informed with every click and conversion, helping you optimize your strategy effectively.",
    icon: "assets/icon-3.svg",
  },
  {
    title: "Unique Promo Codes",
    description:
      "Motivate your players to register and enjoy deposit bonuses that keep them coming back for more with unique promo codes!",
    icon: "assets/icon-4.svg",
  },
  {
    title: "Tailored Localization for Higher Conversions",
    description:
      "We provide professional localization of dfferent materials to boost your connection with the audience, enhancing conversion rates by up to 30%!",
    icon: "assets/icon-5.svg",
  },
];

export const AdvantagesSlider = () => {
  const controls = useAnimationControls();
  const [cards, setCards] = useState(advantages);
  const [isPlaying, setIsPlaying] = useState(true);
  const animationRef = useRef<NodeJS.Timeout | null>(null);
  const isPlayingRef = useRef(true);
  const currentPositionRef = useRef(0);

  const isMobile = useMediaQuery("(max-width: 768px)", {
    initializeWithValue: false,
  });
  const width = isMobile ? 346 : 390; // Ширина картки без gap
  const gap = 32; // gap-8 = 32px

  // Синхронізуємо ref з state
  useEffect(() => {
    isPlayingRef.current = isPlaying;
  }, [isPlaying]);

  const moveToNext = useCallback(() => {
    setCards((prev) => {
      const newCards = [...prev];
      const firstCard = newCards.shift();
      if (firstCard) newCards.push(firstCard);
      return newCards;
    });
    // currentIndex не використовується для рендерингу, тому видаляємо
  }, []);

  const moveToPrev = useCallback(() => {
    setCards((prev) => {
      const newCards = [...prev];
      const lastCard = newCards.pop();
      if (lastCard) newCards.unshift(lastCard);
      return newCards;
    });
    // currentIndex не використовується для рендерингу, тому видаляємо
  }, []);

  const startAutoAnimation = useCallback(
    async (fromPosition = 0) => {
      if (!isPlayingRef.current) return;

      try {
        const targetPosition = -(width + gap);
        const distance = Math.abs(targetPosition - fromPosition);

        // Використовуємо постійну швидкість: ~60 пікселів за секунду
        // Це дає приблизно ту ж швидкість що й в PlayerProsSlider
        const pixelsPerSecond = 60;
        const duration = distance / pixelsPerSecond;

        await controls.start({
          x: targetPosition,
          transition: {
            duration: Math.max(duration, 0.1), // Мінімум 0.1 секунди
            ease: "linear",
            repeat: 0,
            onUpdate: (latest: { x: number }) => {
              currentPositionRef.current = latest.x;
            },
          },
        });

        // Перевіряємо чи все ще треба продовжувати анімацію
        if (isPlayingRef.current) {
          moveToNext();
          controls.set({ x: 0 });
          currentPositionRef.current = 0; // Скидаємо позицію

          const timeoutId = setTimeout(() => {
            if (isPlayingRef.current) {
              startAutoAnimation();
            }
          }, 100);
          animationRef.current = timeoutId;
        }
      } catch {
        // Анімація була зупинена
        console.log("Animation stopped");
      }
    },
    [controls, width, moveToNext]
  );

  const stopAnimation = useCallback(() => {
    setIsPlaying(false);
    isPlayingRef.current = false;
    if (animationRef.current) {
      clearTimeout(animationRef.current);
      animationRef.current = null;
    }
    controls.stop();
    // Зберігаємо поточну позицію для відновлення
  }, [controls]);

  const resumeAnimation = useCallback(() => {
    setIsPlaying(true);
    isPlayingRef.current = true;

    // Продовжуємо анімацію з поточної позиції
    startAutoAnimation(currentPositionRef.current);
  }, [startAutoAnimation]);

  const handleSliderClick = useCallback(() => {
    if (isPlaying) {
      stopAnimation();
    } else {
      resumeAnimation();
    }
  }, [isPlaying, stopAnimation, resumeAnimation]);

  const handleNextClick = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      if (isPlaying) {
        stopAnimation();
      }
      controls
        .start({
          x: -(width + gap),
          transition: {
            duration: 0.6, // Швидка анімація для ручного керування
            ease: "easeInOut",
          },
        })
        .then(() => {
          moveToNext();
          controls.set({ x: 0 });
        });
    },
    [controls, width, moveToNext, isPlaying, stopAnimation]
  );

  const handlePrevClick = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      if (isPlaying) {
        stopAnimation();
      }

      // Спочатку переставляємо слайд і позиціонуємо його зліва
      moveToPrev();
      controls.set({ x: -(width + gap) });

      // Потім анімуємо вправо до нормальної позиції
      controls.start({
        x: 0,
        transition: {
          duration: 0.6, // Швидка анімація для ручного керування
          ease: "easeInOut",
        },
      });
    },
    [controls, width, gap, moveToPrev, isPlaying, stopAnimation]
  );

  const handlePlayPauseClick = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      if (isPlaying) {
        stopAnimation();
      } else {
        resumeAnimation();
      }
    },
    [isPlaying, stopAnimation, resumeAnimation]
  );

  useEffect(() => {
    if (isPlaying) {
      startAutoAnimation();
    }
  }, [isPlaying, startAutoAnimation]);

  useEffect(() => {
    return () => {
      if (animationRef.current) {
        clearTimeout(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="relative overflow-hidden max-w-screen">
      <motion.div
        className="flex gap-8 cursor-pointer"
        animate={controls}
        onClick={handleSliderClick}
      >
        {cards.map((advantage, index) => (
          <motion.div
            key={`${index}-${advantage.title}`}
            className="flex flex-col items-start gap-6 rounded-2xl border border-white bg-[rgba(236,_142,_244,_0.04)] shadow-[0px_0px_48px_0px_rgba(181,_194,_227,_0.16)_inset] px-8 pb-8 pt-6 w-[390px] max-md:w-[346px] flex-shrink-0"
          >
            <div className="flex p-[10px] justify-center items-center rounded-full bg-[rgba(255,_255,_255,_0.04)]">
              <img src={advantage.icon} alt="" />
            </div>
            <div className="flex flex-col items-start gap-[14px]">
              <p className="text-white text-xl font-semibold uppercase">
                {advantage.title}
              </p>
              <p className="text-[#B6C4E7] text-sm font-normal font-[Inter]">
                {advantage.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Кнопка попереднього слайду */}
      <button
        className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 p-2 rounded-r-lg transition-opacity duration-300 ${
          !isPlaying ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-label="Попередній слайд"
        onClick={handlePrevClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 12H5M12 19l-7-7 7-7"></path>
        </svg>
      </button>

      {/* Кнопка наступного слайду */}
      <button
        className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 p-2 rounded-l-lg transition-opacity duration-300 ${
          !isPlaying ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-label="Наступний слайд"
        onClick={handleNextClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>

      {/* Кнопка play/pause */}
      <button
        className={`absolute top-5 right-5 bg-white/50 hover:bg-white/70 rounded-full p-2 transition-all duration-300 ${
          !isPlaying ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-label={isPlaying ? "Зупинити анімацію" : "Запустити анімацію"}
        onClick={handlePlayPauseClick}
      >
        {isPlaying ? (
          // Pause icon
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="6" y="4" width="4" height="16"></rect>
            <rect x="14" y="4" width="4" height="16"></rect>
          </svg>
        ) : (
          // Play icon
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="5,3 19,12 5,21"></polygon>
          </svg>
        )}
      </button>
    </div>
  );
};
