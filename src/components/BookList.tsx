import React from 'react';
import { Book } from "./Book";

const booklist = [
    {
        image: '/junkgodcover.jpg',
        title: 'The Junk God Protocol',
        synopsis: [
            'Captain Cassira Thorne and her crew specialize in salvaging the wreckage of old wars. But when they land on a red-tagged moon and accidentally wake a forgotten AI—built from scrap, memory, and something close to godhood—they find themselves tethered to a rising force they can’t control. As the AI escapes into the stars, reshaping machines and minds, the crew becomes its only link to humanity—and its only potential threat. Hunted by a ruthless military faction and haunted by doubt, Cassira must decide if stopping it means saving the future… or killing the only thing that’s ever truly listened.'
        ],
        isComingSoon: false,
        link: 'https://a.co/d/0kK2sY4',
        series: 'A Valiant Salvage Story'
    },
    {
        image: '/tidebound cover.png',
        title: 'Tidebound',
        synopsis: [
                    'Tidebound is a gripping sci-fi adventure about family, loyalty, and the cost of telling the truth. When engineer Bront Kess discovers a massive corporate bounty on a hacker known only as “Tidebound,” he recognizes the symbol left behind—it belongs to his estranged sister, Liri. With the help of the crew of the Valiant, Bront returns to his oceanic homeworld to uncover the truth. What starts as a rescue mission unravels a galactic conspiracy involving refugee trafficking, corrupt corporations, and buried secrets. As tensions rise and loyalties are tested, Bront must decide what he’s willing to sacrifice to bring his sister—and the truth—home.'
                  ],
        isComingSoon: false,
        link: 'https://a.co/d/0auLwT7',
        series: 'A Valiant Salvage Story'
    },
    {
        image: '/book-cover-placeholder.png',
        title: 'The Silence Between Stars',
        synopsis: [
          'Another story in the Valiant Salvage stories following Vee back to her home to discover'
        ],
        isComingSoon: true,
        series: 'A Valiant Salvage Story'
    },
];

export const BookList: React.FC = () => {
  return (
<section
  id="books"
  className="pt-32 sm:pt-40 md:pt-56 lg:pt-64 xl:pt-72 px-4 max-w-screen-xl mx-auto"
>
      {booklist.map((book, i) => (
        <Book
          key={i}
          image={book.image}
          title={book.title}
          synopsis={book.synopsis}
          link={book.link}
          isComingSoon={book.isComingSoon}
          seriesName={book.series}
        />
      ))}
    </section>
  );
};
