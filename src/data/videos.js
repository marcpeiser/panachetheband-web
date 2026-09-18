// Video archive. Source: youtube.com/@alanmackie4056 (active, Alan Mackie digitising the
// archive since Oct 2023) and youtube.com/@panachetheband (2009 reunion uploads, dormant).
// `note` text is drawn from the uploader's own video descriptions.

export const videos = [
  {
    id: 'B3ItVf-QHZo',
    title: 'We Gotta Make It',
    year: 'c. 1977',
    kind: 'original',
    note: 'A Greenock rehearsal, captured on the old Akai ghetto blaster.',
  },
  {
    id: 'QcQqdULskpk',
    title: 'Getting Closer',
    year: '1978',
    kind: 'original',
    note: 'Recorded at the band’s publisher’s studio in London — Alastair Sinclair on keyboards and Derek Taylor on drums, with Pat, Alan and Dougie.',
  },
  {
    id: 'wdDjuVAxK-4',
    title: 'Burn It Up',
    year: 'c. 1977',
    kind: 'original',
    note: 'Rehearsing at the Red Dragon in Greenock. One take, totally live. Dougie’s song about violent extremism and the madness of crowds.',
  },
  {
    id: 'GotqY6XWb3M',
    title: 'Cold Night (jam)',
    year: 'c. 1977',
    kind: 'original',
    note: 'Possibly Auchmountain Halls. A reggae version of a song they otherwise played straight.',
  },
  {
    id: 'B_xOSvsVJpo',
    title: 'You Can’t Do That',
    year: 'mid-70s',
    kind: 'original',
  },
  {
    id: 'GVClJteZgHU',
    title: 'In and Out of Love',
    year: 'mid-70s',
    kind: 'original',
  },
  {
    id: 'AXEz_vNjHJQ',
    title: 'Say You Will',
    year: 'mid-70s',
    kind: 'original',
  },
  {
    id: 'JKHrs5UfG0A',
    title: 'Give It All You’ve Got',
    year: 'mid-70s',
    kind: 'original',
  },
  {
    id: '89NDG95DQjs',
    title: 'Try',
    year: 'mid-70s',
    kind: 'original',
  },
  {
    id: 'THpUybwO-qw',
    title: 'Party Feeling / Keep Talking',
    year: 'mid-70s',
    kind: 'original',
  },
  {
    id: '4GSyRToOtoQ',
    title: 'Too Much Too Soon',
    year: 'mid-70s',
    kind: 'original',
  },
  {
    id: 'Qkjqm3STURI',
    title: 'Sweet Lady — Reimagined',
    year: '2026',
    kind: 'original',
    note: 'A new recording of one of the band’s own songs, fifty years on.',
  },

  {
    id: 'sYqq8qmViJk',
    title: 'Eleanor Rigby',
    writer: 'Lennon–McCartney',
    year: 'mid-70s',
    kind: 'cover',
    note: 'Live at the Victorian Carriage. Left to right: Robert Williams, Alan Mackie, Pat Hamill, George McClarkin, Dougie Campbell. The Beatles tune taken at a fast pace with a few jazzy chords.',
  },
  {
    id: 'YptlI3cpBBM',
    title: 'Ain’t It Strange',
    writer: 'John Cooper',
    year: 'mid-70s',
    kind: 'cover',
    note: 'A beautiful ballad written by John Cooper, a friend of ours from Irvine.',
  },
  {
    id: 'UII9snKSWc8',
    title: 'Look For My Light',
    writer: 'The Movies',
    year: 'mid-70s',
    kind: 'cover',
    note: 'We used to call it “Sentimental Lady”! I think they were Joan Armatrading’s backing band back in the day.',
  },

  {
    id: 'zzusFdyOTHY',
    title: 'Haitian Divorce',
    writer: 'Steely Dan',
    year: '2009',
    kind: 'reunion',
    note: 'I do my best to do the voicebox thing with a wah-wah pedal!',
  },
  {
    id: '0n1zs3rvX8Q',
    title: 'Kid Charlemagne',
    writer: 'Steely Dan',
    year: '2009',
    kind: 'reunion',
  },
  {
    id: '0sKsvaAswtY',
    title: 'Kerry',
    writer: 'Hall & Oates',
    year: '2009',
    kind: 'reunion',
    note: 'We added a little bit of “Panache” at the end!',
  },
  {
    id: 'ndwmB06kbrg',
    title: 'Sweet Lady',
    year: '2009',
    kind: 'reunion',
  },
  {
    id: 'FEdZKihjZnU',
    title: 'Do What I Wanna Do',
    year: '2009',
    kind: 'reunion',
  },
  {
    id: 'ceEGgYs5E44',
    title: 'Getting Closer',
    year: '2009',
    kind: 'reunion',
  },
  {
    id: 'ZmAlI_VwwYM',
    title: 'Enough To Make You Mine',
    year: '2009',
    kind: 'reunion',
  },
];

// Pre-Panache. Kept separate — different band, different decade.
export const auricle = {
  id: 'Ub3lKyufFnU',
  title: 'I Believe In Pigeons',
  year: '1974',
  note: 'Recorded on a ghettoblaster at the Burns Howff, Glasgow. Dougie Campbell, George McClarkin, Ian Parker and Alan Mackie — all aged around 18 to 20. Mainly instrumentals, a nod to Focus and Santana.',
};

// The 15 originals as listed on the band's own "Pour it Out" page.
// `video` links a title to a recording above where one exists.
export const originals = [
  { title: 'Why Don’t You Write' },
  { title: 'Sweet Lady', video: 'ndwmB06kbrg' },
  { title: 'Do What I Wanna Do', video: 'FEdZKihjZnU' },
  { title: 'Trudi' },
  { title: 'Don’t Leave It Up To Me' },
  { title: 'To The Full' },
  { title: 'Getting Closer', video: 'QcQqdULskpk' },
  { title: 'I’ll Be Around' },
  { title: 'All That I Need' },
  { title: 'Water Baby' },
  { title: 'Let’s Have A Beautiful Night' },
  { title: 'Real Nice Girl' },
  { title: 'Too Much Too Soon', video: '4GSyRToOtoQ' },
  { title: 'Feelings' },
  { title: 'Burn It Up', video: 'wdDjuVAxK-4' },
];
