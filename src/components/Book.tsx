import React from 'react';

interface IBook {
  image?: string;
  title?: string;
  synopsis?: string[];
  link?: string;
  isComingSoon?: boolean;
  seriesName?: string;
}

export const Book: React.FC<IBook> = ({
  image,
  title,
  synopsis = [],
  link,
  isComingSoon,
  seriesName
}) => {
  const getShortSynopsis = (synopsis: string[], wordCount: number) => {
    const words: string[] = [];
    let index = 0;

    while (words.length < wordCount && index < synopsis.length) {
      const thisSynops = synopsis[index];
      const theseWords = thisSynops.split(' ');
      const numbWordsLeft = wordCount - words.length;

      if (theseWords.length <= numbWordsLeft) {
        words.push(...theseWords);
      } else {
        words.push(...theseWords.slice(0, numbWordsLeft));
      }

      index++;
    }
    
    if(words.length === 1 && words[0] === ""){
      return "";
    }
    return words.join(' ') + '...';
  };

  const shortSynopsis = getShortSynopsis(synopsis, 100);

  return (
    <div className="my-16 w-full px-4">
  <div className="flex flex-col md:flex-row items-center gap-10 bg-white/5 backdrop-blur-md p-10 rounded-2xl shadow-2xl">
    {/* Book Cover */}
    {image && (
      <div className="flex-shrink-0">
        <img
          src={image}
          alt={title}
          className="w-48 sm:w-56 md:w-64 lg:w-72 h-auto rounded-xl object-cover"
        />
      </div>
    )}

    {/* Book Info */}
    <div className="flex-1 text-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-3">{title}</h2>
      <h3 className="text-lg italic text-gray-300 mb-5">{seriesName}</h3>
      <p className="text-lg md:text-xl leading-relaxed mb-5">{shortSynopsis}</p>
      {isComingSoon ? (
        <span className="text-base text-gray-300 italic">Coming Soon!</span>
      ) : (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-300 hover:underline text-base font-medium"
        >
          Buy on Amazon →
        </a>
      )}
    </div>
  </div>
</div>
  );
};
