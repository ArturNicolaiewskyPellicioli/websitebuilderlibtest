import { useEffect, useState } from "react";
import { ICountdown1 } from "./types";

export const Countdown1 = ({
  homeTeamSrc,
  awayTeamSrc,
  homeTeamName,
  awayTeamName,
  initialTime,
  description,
}: ICountdown1) => {
  const [time, setTime] = useState<string>(initialTime);

  useEffect(() => {
    const [hours, minutes, seconds] = initialTime.split(":").map(Number);
    let totalSeconds = hours * 3600 + minutes * 60 + seconds;

    const interval = setInterval(() => {
      if (totalSeconds <= 0) {
        clearInterval(interval);
        return;
      }

      totalSeconds -= 1;
      const currentHours = Math.floor(totalSeconds / 3600);
      const currentMinutes = Math.floor(
        (totalSeconds - currentHours * 3600) / 60
      );
      const currentSeconds =
        totalSeconds - currentHours * 3600 - currentMinutes * 60;

      setTime(
        `${String(currentHours).padStart(2, "0")}:${String(
          currentMinutes
        ).padStart(2, "0")}:${String(currentSeconds).padStart(2, "0")}`
      );
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [initialTime]);

  return (
    <div className="bg-white flex flex-col md:flex-row gap-8 items-center justify-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <img
          src={homeTeamSrc}
          alt={homeTeamName}
          className="mx-auto mb-2 w-40 lg:w-52 lg:h-52 object-contain"
        />
        <p className="text-3xl font-semibold">{homeTeamName}</p>
      </div>

      <div className="mx-6 flex flex-col items-center">
        <p className="text-xl">{description}</p>
        <p className="text-4xl lg:text-8xl font-bold">{time}</p>
      </div>

      <div className="text-center">
        <img
          src={awayTeamSrc}
          alt={awayTeamName}
          className="mx-auto mb-2 w-40 lg:w-52 lg:h-52 object-contain"
        />
        <p className="text-3xl font-semibold">{awayTeamName}</p>
      </div>
    </div>
  );
};
