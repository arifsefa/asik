import React, { useMemo, useState } from "react";
import myPhoto from "./biz.jpg";

const App: React.FC = () => {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);

  const phrases = [
    "Hayır",
    "istemiyom git",
    "yooooooookkk",
    "aşkım defol",
    "Arif git yılışma",
    "maraşa da gelme dersin sen şimdi",
    "hala basıyo inanılmaz",
    "yeterrrrrrrrrrrrrr",
    "küsçem valla",
  ];

  const isFullScreenYes = noCount >= phrases.length;
  const yesButtonSize = Math.min(noCount * 16 + 22, 72);
  const progress = Math.min((noCount / phrases.length) * 100, 100);

  const floatingHearts = useMemo(
    () =>
      Array.from({ length: 16 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 6}s`,
        duration: `${5 + Math.random() * 6}s`,
        scale: 0.5 + Math.random() * 0.9,
      })),
    []
  );

  const getNoButtonText = () => phrases[Math.min(noCount, phrases.length - 1)];

  const playSound = (source: string, volume = 0.6) => {
    const audio = new Audio(source);
    audio.volume = volume;
    audio.play().catch(() => undefined);
  };

  const handleNoClick = () => {
    setNoCount((prev) => prev + 1);
    playSound("https://cdn.pixabay.com/audio/2022/03/15/audio_c8b84676b6.mp3");
  };

  const handleYesClick = () => {
    setYesPressed(true);
    playSound("https://cdn.pixabay.com/audio/2021/08/04/audio_12b0c7443c.mp3");
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-rose-100 via-pink-100 to-fuchsia-100 p-4 selection:bg-pink-300">
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-pink-300/45 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-72 w-72 rounded-full bg-purple-300/40 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-80 w-80 rounded-full bg-rose-300/45 blur-3xl" />
      </div>

      {floatingHearts.map((heart) => (
        <span
          key={heart.id}
          className="pointer-events-none absolute bottom-[-40px] text-pink-400/60"
          style={{
            left: heart.left,
            animation: `floatUp ${heart.duration} linear infinite`,
            animationDelay: heart.delay,
            transform: `scale(${heart.scale})`,
          }}
        >
          💖
        </span>
      ))}

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-2rem)] w-full max-w-5xl items-center justify-center">
        {yesPressed ? (
          <div className="w-full max-w-xl rounded-[2rem] border border-white/60 bg-white/75 p-8 text-center shadow-2xl backdrop-blur-xl animate-[fadeIn_0.5s_ease-out]">
            <p className="mb-3 inline-flex rounded-full bg-pink-100 px-4 py-2 text-sm font-bold text-pink-600">
              Mission Complete ✨
            </p>
            <img
              src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
              alt="Bears kissing"
              className="mx-auto mb-6 h-60 w-60 rounded-2xl object-cover shadow-xl"
            />
            <h1 className="text-4xl font-black text-pink-600 md:text-5xl">Biliyordum ki hehe &lt;3</h1>
            <p className="mt-4 text-lg text-pink-700">Artık romantik film gecesi zorunlu 💘</p>
          </div>
        ) : (
          <div className="grid w-full gap-8 rounded-[2rem] border border-white/70 bg-white/70 p-6 shadow-2xl backdrop-blur-xl md:grid-cols-[1.15fr_1fr] md:p-10">
            <div className="flex flex-col items-center justify-center text-center">
              <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-pink-100 px-4 py-2 text-xs font-extrabold uppercase tracking-wide text-pink-600">
                Romantik Oylama Sistemi
              </span>
              <h1 className="mb-4 px-2 text-3xl font-black text-pink-700 md:text-5xl">
                Gelecekteki karım olur musun?
              </h1>
              <p className="mb-6 max-w-md text-sm text-pink-600 md:text-base">
                Seçim tamamen özgür... ama "Evet" seçeneği biraz daha cazip olabilir. 😌
              </p>

              <div className="mb-8 h-3 w-full max-w-sm overflow-hidden rounded-full bg-pink-100">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-pink-400 to-fuchsia-500 transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4">
                {isFullScreenYes ? (
                  <button
                    className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-emerald-400 to-emerald-600 text-8xl font-black text-white transition-all duration-300 animate-pulse"
                    onClick={handleYesClick}
                  >
                    EVET
                  </button>
                ) : (
                  <>
                    <button
                      className="rounded-2xl bg-gradient-to-r from-emerald-400 to-green-500 font-black text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-green-500/40 active:translate-y-0 active:scale-95"
                      style={{
                        fontSize: `${yesButtonSize}px`,
                        padding: `${yesButtonSize / 2.8}px ${yesButtonSize}px`,
                        lineHeight: 1.05,
                      }}
                      onClick={handleYesClick}
                    >
                      Evet 💚
                    </button>

                    <button
                      className="rounded-2xl bg-gradient-to-r from-rose-500 to-red-500 px-5 py-3 font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-red-500/30 active:scale-95"
                      onClick={handleNoClick}
                    >
                      {getNoButtonText()}
                    </button>
                  </>
                )}
              </div>
            </div>

            <div className="relative flex flex-col items-center justify-center">
              <div className="absolute -top-4 right-6 rounded-full bg-pink-500 px-4 py-2 text-xs font-extrabold text-white shadow-lg">
                %100 Aşk Sertifikalı
              </div>

              <div className="relative mb-6">
                <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-pink-200 to-fuchsia-200 blur-lg" />
                <img
                  src={myPhoto}
                  alt="Bizim Fotoğrafımız"
                  className="relative h-auto w-72 rounded-3xl border-4 border-white object-cover shadow-2xl md:w-80"
                />
              </div>

              <img
                src="https://media.tenor.com/KUdbG_j5iJgAAAAi/mochi-peach-cat-mochi.gif"
                alt="Cute asking character"
                className="h-40 w-40 object-contain drop-shadow-lg"
              />
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes floatUp {
          0% { transform: translateY(0) scale(0.8); opacity: 0; }
          12% { opacity: 0.7; }
          100% { transform: translateY(-115vh) scale(1.2); opacity: 0; }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

export default App;
