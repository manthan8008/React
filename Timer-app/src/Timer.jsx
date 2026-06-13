import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Timer() {
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");

  const [timeLeft, setTimeLeft] = useState(0);
  const [initialTime, setInitialTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [dark, setDark] = useState(true);
  const progress = initialTime > 0 ? (timeLeft / initialTime) * 100 : 100;

  const presets = [
    { label: "1m", value: 60 },
    { label: "5m", value: 300 },
    { label: "15m", value: 900 },
    { label: "25m", value: 1500 },
    { label: "45m", value: 2700 },
    { label: "60m", value: 3600 },
  ];

  const ringColor =
    progress > 50 ? "#22c55e" : progress > 20 ? "#facc15" : "#ef4444";

  useEffect(() => {
    let interval;

    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }

    if (timeLeft === 0) {
      setIsRunning(false);
    }

    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);

  const startTimer = () => {
    if (timeLeft === 0) {
      const total =
        Number(hours || 0) * 3600 +
        Number(minutes || 0) * 60 +
        Number(seconds || 0);

      if (total <= 0) return;

      setTimeLeft(total);
      setInitialTime(total);
    }

    setIsRunning(true);
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(0);
    setInitialTime(0);

    setHours("");
    setMinutes("");
    setSeconds("");
  };

  const formatTime = (secondsTotal) => {
    const hrs = Math.floor(secondsTotal / 3600);
    const mins = Math.floor((secondsTotal % 3600) / 60);
    const secs = secondsTotal % 60;

    return [hrs, mins, secs]
      .map((item) => String(item).padStart(2, "0"))
      .join(":");
  };

  const radius = 110;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className={dark ? "dark min-h-screen" : "min-h-screen"}>
      <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-900 via-indigo-950 to-slate-900 p-5">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl"
        >
          <motion.h1
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="text-4xl font-bold text-center text-white mb-8"
          >
            Countdown Timer
          </motion.h1>

          {timeLeft === 0 && !isRunning ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-3 gap-3 mb-8"
            >
              <input
                type="number"
                placeholder="HH"
                value={hours}
                onChange={(e) => setHours(e.target.value)}
                className="bg-white/10 border border-white/20 text-white rounded-xl p-3 text-center outline-none"
              />

              <input
                type="number"
                placeholder="MM"
                value={minutes}
                onChange={(e) => setMinutes(e.target.value)}
                className="bg-white/10 border border-white/20 text-white rounded-xl p-3 text-center outline-none"
              />

              <input
                type="number"
                placeholder="SS"
                value={seconds}
                onChange={(e) => setSeconds(e.target.value)}
                className="bg-white/10 border border-white/20 text-white rounded-xl p-3 text-center outline-none"
              />
            </motion.div>
          ) : (
            <div className="flex justify-center mb-8">
              <div className="relative w-65 h-65">
                <svg
                  className="absolute inset-0 -rotate-90"
                  width="260"
                  height="260"
                >
                  <circle
                    cx="130"
                    cy="130"
                    r={radius}
                    stroke="rgba(255,255,255,0.15)"
                    strokeWidth="12"
                    fill="none"
                  />

                  <motion.circle
                    cx="130"
                    cy="130"
                    r={radius}
                    stroke={ringColor}
                    strokeWidth="12"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    animate={{
                      strokeDashoffset,
                    }}
                    transition={{
                      duration: 0.5,
                    }}
                  />
                </svg>

                <motion.div
                  key={timeLeft}
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <span className="text-4xl font-bold text-white">
                    {formatTime(timeLeft)}
                  </span>
                </motion.div>
              </div>
            </div>
          )}

          <div className="flex gap-3 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={isRunning ? pauseTimer : startTimer}
              className="px-6 py-3 rounded-xl bg-indigo-500 text-white font-semibold"
            >
              {isRunning ? "Pause" : "Start"}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={resetTimer}
              className="px-6 py-3 rounded-xl bg-red-500 text-white font-semibold"
            >
              Reset
            </motion.button>
          </div>

          <AnimatePresence>
            {timeLeft === 0 && initialTime > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 text-center text-green-400 font-semibold"
              >
                🎉 Time's Up!
              </motion.div>
            )}
          </AnimatePresence>
          <div className="flex flex-wrap gap-2 justify-center my-6">
            {presets.map((preset) => (
              <button
                key={preset.value}
                onClick={() => {
                  setTimeLeft(preset.value);
                  setInitialTime(preset.value);
                }}
                className="px-4 py-2 rounded-xl bg-indigo-500 text-white"
              >
                {preset.label}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
