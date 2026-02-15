import React, { useState } from "react";
import myPhoto from "./assest/biz.jpg";

const App: React.FC = () => {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);

  // Exact array of strings based on the new requirements
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

  // If the user has clicked through all phrases, show the full-screen Yes button
  const isFullScreenYes = noCount >= phrases.length;

  // The size of the Yes button increases with every "No" click.
  const yesButtonSize = noCount * 20 + 16;

  // Logic to get the current text.
  const getNoButtonText = () => {
    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  const handleNoClick = () => {
    setNoCount((prev) => prev + 1);
    // Play funny "bonk" sound
    const audio = new Audio(
      "https://cdn.pixabay.com/audio/2022/03/15/audio_c8b84676b6.mp3"
    );
    audio.volume = 0.6;
    audio.play().catch((e) => console.error("Audio error:", e));
  };

  const handleYesClick = () => {
    setYesPressed(true);
    // Play celebration sound
    const audio = new Audio(
      "https://cdn.pixabay.com/audio/2021/08/04/audio_12b0c7443c.mp3"
    );
    audio.volume = 0.6;
    audio.play().catch((e) => console.error("Audio error:", e));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100 p-4 overflow-hidden selection:bg-pink-300">
      {yesPressed ? (
        /* Success State */
        <div className="flex flex-col items-center justify-center animate-fade-in text-center">
          <img
            src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
            alt="Bears kissing"
            className="w-64 h-64 object-cover mb-6 rounded-lg shadow-xl"
          />
          <h1 className="text-4xl font-black text-pink-600 drop-shadow-sm">
            Biliyordum ki hehe &lt;3
          </h1>
        </div>
      ) : (
        /* Asking State */
        <div className="flex flex-col items-center text-center">
          {/* USER PHOTO SECTION */}
          <img
            src={myPhoto}
            alt="Bizim Fotoğrafımız"
            className="w-72 md:w-96 h-auto rounded-xl shadow-xl mb-8 border-4 border-white rotate-[-3deg] hover:rotate-0 transition-transform duration-300"
          />

          <img
            src="https://media.tenor.com/KUdbG_j5iJgAAAAi/mochi-peach-cat-mochi.gif"
            alt="Cute asking character"
            className="w-48 h-48 object-contain mb-6 mix-blend-multiply"
          />

          <h1 className="text-3xl md:text-4xl font-bold text-pink-700 mb-10 drop-shadow-sm px-4">
            Gelecekti karım olmak ister misiniz?
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-6">
            {isFullScreenYes ? (
              <button
                className="fixed inset-0 z-50 bg-green-500 hover:bg-green-600 text-white font-black text-8xl flex items-center justify-center transition-colors duration-300 animate-pulse"
                onClick={handleYesClick}
              >
                EVET
              </button>
            ) : (
              <>
                <button
                  className="bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-green-500/50 hover:-translate-y-1 active:scale-90 active:translate-y-1"
                  style={{
                    fontSize: yesButtonSize,
                    padding: `${yesButtonSize / 2}px ${yesButtonSize}px`,
                  }}
                  onClick={handleYesClick}
                >
                  Evet
                </button>

                <button
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-red-500/50 hover:scale-105 active:scale-95 active:bg-red-700"
                  onClick={handleNoClick}
                >
                  {getNoButtonText()}
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
