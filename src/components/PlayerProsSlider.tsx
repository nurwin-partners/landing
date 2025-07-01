import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState, useCallback, useRef } from "react";
import { PlayerProCard } from "./PlayerProCard";
import { useMediaQuery } from "usehooks-ts";

interface PlayerPro {
  title: string;
  description: string;
  image: string;
  mobileImage: string;
}

const playerPros: PlayerPro[] = [
  {
    title: "Flexible Wagering Options",
    description:
      "We cater to different betting styles with flexible wagering limits, allowing both casual players and high rollers to enjoy their preferred gaming experience.",
    image: "assets/frame-1.png",
    mobileImage: "assets/mobileframe-1.png",
  },
  {
    title: "Safe and Secure Gaming Environment",
    description:
      "Enjoy robust security measures to protect your data and transactions, ensuring a safe and trustworthy gaming experience.",
    image: "assets/frame-2.png",
    mobileImage: "assets/mobileframe-2.png",
  },
  {
    title: "Exceptional Tech Support",
    description:
      "Enjoy 24/7 customer support, making your betting experience smooth and enjoyable. High rollers receive personalized VIP support for an elevated gaming experience.",
    image: "assets/frame-3.png",
    mobileImage: "assets/mobileframe-3.png",
  },
  {
    title: "Extensive Casino and Slot Selection",
    description:
      "Choose from over 9,000 slots powered by 15 of the largest suppliers. This vast library ensures greater engagement and higher average spending for our players!",
    image: "assets/frame-4.png",
    mobileImage: "assets/mobileframe-4.png",
  },
  {
    title: "Educational Resources",
    description:
      "Choose from over 9,000 slots powered by 15 of the largest suppliers. This vast library ensures greater engagement and higher average spending for our players!",
    image: "assets/frame-5.png",
    mobileImage: "assets/mobileframe-5.png",
  },
  {
    title: "Convenient Deposits",
    description:
      "We offer a wide array of local payment solutions, ensuring seamless balance replenishment for our players. The result? Higher deposit conversion rates and a hassle-free experience!",
    image: "assets/frame-6.png",
    mobileImage: "assets/mobileframe-6.png",
  },
  {
    title: "Exciting Bonuses",
    description:
      'Take advantage of an extensive range of promotions designed to enhance your gaming experience. Enjoy generous 100% deposit bonuses, free spins, and "risk-free bets" that keep the excitement going!',
    image: "assets/frame-7.png",
    mobileImage: "assets/mobileframe-7.png",
  },
  {
    title: "Mobile Compatibility",
    description:
      "Enjoy the flexibility of gaming on-the-go with a fully optimized mobile platform, allowing players to place bets and enjoy their favorite games anytime, anywhere.",
    image: "assets/frame-8.png",
    mobileImage: "assets/mobileframe-8.png",
  },
  {
    title: "Loyalty Programs",
    description:
      "We reward players for their continued engagement with exclusive loyalty programs that offer points, milestones, and special rewards as they play.",
    image: "assets/frame-9.png",
    mobileImage: "assets/mobileframe-9.png",
  },
];

export const PlayerProsSlider = () => {
  const controls = useAnimationControls();
  const [cards, setCards] = useState(playerPros);
  const [isPlaying, setIsPlaying] = useState(true);
  const animationRef = useRef<NodeJS.Timeout | null>(null);
  const isPlayingRef = useRef(true);
  const currentPositionRef = useRef(0);

  const isMobile = useMediaQuery("(max-width: 768px)", {
    initializeWithValue: false,
  });
  const width = isMobile ? 346 : 934;

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
        const targetPosition = -(width + 16);
        const distance = Math.abs(targetPosition - fromPosition);
        const fullDistance = width + 16;
        const duration = (distance / fullDistance) * 16; // Пропорційна тривалість

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
          x: -(width + 16),
          transition: {
            duration: 0.5,
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
      controls.set({ x: -(width + 16) });

      // Потім анімуємо вправо до нормальної позиції
      controls.start({
        x: 0,
        transition: {
          duration: 0.5,
          ease: "easeInOut",
        },
      });
    },
    [controls, width, moveToPrev, isPlaying, stopAnimation]
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
        className="flex gap-4 cursor-pointer"
        animate={controls}
        onClick={handleSliderClick}
      >
        {cards.map((pro, index) => (
          <PlayerProCard
            key={`${index}-${pro.title}`}
            title={pro.title}
            description={pro.description}
            image={isMobile ? pro.mobileImage : pro.image}
          />
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
