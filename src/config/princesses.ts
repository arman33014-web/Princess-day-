export type FlowerKind =
  | "rose"
  | "cherryBlossom"
  | "tulip"
  | "peony"
  | "lily";

export interface GardenFlowerWish {
  id: string;
  flowerName: string;
  kind: FlowerKind;
  wish: string;
  subNote: string;
}

export interface PrincessAccentColors {
  primaryPink: string;
  softPink: string;
  background: string;
  roseGold: string;
  softGold: string;
  ribbonPink: string;
  dressPrimary: string;
  dressHighlight: string;
  crownGold: string;
}

export interface PrincessConfig {
  slug: "misty" | "anika";
  route: "/princess/misty" | "/princess/anika";
  name: string;
  displayName: string;
  royalTitle: string;
  occasionDate: string;
  greeting: {
    scriptAccent: string;
    welcomeHeading: string;
    supportingText: string;
    personalBanner: string;
    welcomeParagraphs: string[];
    hinglishWhisper: string;
    ctaLabel: string;
  };
  introduction: {
    heading: string;
    badgeText: string;
    scriptNote: string;
    paragraphs: string[];
    closingLine: string;
  };
  letter: {
    heading: string;
    envelopeHint: string;
    scriptAccent: string;
    buttonLabel: string;
    closeLabel: string;
    salutation: string;
    paragraphs: string[];
    closingWish: string;
    signOffPrefix: string;
    signOffName: string;
    postScript: string;
  };
  garden: {
    heading: string;
    scriptAccent: string;
    supportingMessage: string;
    instructionHint: string;
    emptyPrompt: string;
    allDiscoveredMessage: string;
    wishes: GardenFlowerWish[];
  };
  finalSurprise: {
    heading: string;
    scriptAccent: string;
    subtext: string;
    buttonLabel: string;
    revealBadge: string;
    paragraphs: string[];
    celebrationLine: string;
    closingNote: string;
  };
  accentColors: PrincessAccentColors;
  metadata: {
    title: string;
    description: string;
    ogSubtitle: string;
  };
}

export const MISTY_PRINCESS: PrincessConfig = {
  slug: "misty",
  route: "/princess/misty",
  name: "Misty",
  displayName: "Princess Misty",
  royalTitle: "Warm Smiles & Quiet Magic",
  occasionDate: "18 November",
  greeting: {
    scriptAccent: "Hey Misty! ❤️",
    welcomeHeading: "Welcome To Your Little Fairytale",
    supportingText: "Pata hai, ye chhoti si website sirf tumhare liye banayi hai.",
    personalBanner: "Welcome, Princess Misty! 👑",
    welcomeParagraphs: [
      "Kuch bahut bada ya extraordinary nahi hai, bas socha tumhare liye ek aisi cute si jagah banayi jaaye jahan enter karte hi tumhare face par ek pyari si smile aa jaaye.",
      "Toh welcome hai tumhara is chhoti si magical duniya mein, Princess! 👑",
    ],
    hinglishWhisper:
      "Bas ek chhota sa thought — ki aaj ka din tumhare liye thoda aur pyaara ban jaaye.",
    ctaLabel: "Enter Your Fairytale ✨",
  },
  introduction: {
    heading: "Aaj Ka Din Sirf Tumhare Naam, Misty!",
    badgeText: "Chapter I • Just For You",
    scriptNote: "A little corner made with care",
    paragraphs: [
      "Hey Misty! ❤️",
      "Aaj Princess Day hai, toh socha normally wish karne se achha hai kuch cute aur thoda personal banaya jaaye.",
      "Is chhoti si pink duniya ka har page bas ek gentle reminder hai — ki tumhara simple sa warmth, tumhara nature aur tumhari smile sach mein bahut khaas hain.",
    ],
    closingLine: "Chalo aage dekho, tumhare liye ek chhota sa letter hai 💌",
  },
  letter: {
    heading: "A Little Letter For You, Misty 💌",
    envelopeHint:
      "Is pink wax seal ke andar kuch sidhi aur dil se likhi hui baatein hain, sirf tumhare liye.",
    scriptAccent: "Written with care, just for Misty",
    buttonLabel: "Open Your Letter",
    closeLabel: "Fold Letter Gently",
    salutation: "Dear Misty,",
    paragraphs: [
      "Sabse pehle toh Happy Princess Day! ❤️",
      "Aaj socha tumhare liye kuch alag kiya jaaye. Isliye ye chhoti si website banayi, jisme thodi si creativity hai, thoda sa magic hai aur bahut saari achhi wishes hain.",
      "Bas ek baat kehni thi...",
      "Khud ko kabhi kam mat samajhna. Tumhari apni ek alag pehchaan hai, apna ek alag andaaz hai.",
      "Hamesha khush rehna, apne dreams ke peeche jaana aur apni smile ko kabhi khona mat.",
      "I hope aaj ka din tumhare liye utna hi beautiful ho jitni ye chhoti si duniya tumhare liye banayi hai.",
    ],
    closingWish: "Once again, Happy Princess Day, Misty! 👑❤️",
    signOffPrefix: "With warm wishes,",
    signOffName: "Someone who wanted to see you smile",
    postScript:
      "P.S. Jab bhi thoda tired ya low feel ho, bas ye page wapas khol lena.",
  },
  garden: {
    heading: "Welcome To Your Magical Garden 🌷",
    scriptAccent: "Little notes hidden in every bloom",
    supportingMessage:
      "Yahan har phool ke paas tumhare liye ek chhoti si thoughtful wish hai.",
    instructionHint: "Har phool par tap ya click karo apna note dekhne ke liye",
    emptyPrompt:
      "🌸 Kisi bhi phool par click karo — har phool ke paas tumhare liye ek pyaari si baat hai.",
    allDiscoveredMessage:
      "Saare phool khil gaye, Misty! Hope in chhoti-chhoti baaton ne tumhe thoda sa smile karwaya ho 🌸",
    wishes: [
      {
        id: "misty-rose",
        flowerName: "Blush Rose",
        kind: "rose",
        wish: "Aaj thoda extra smile karna, Princess! 🌸",
        subNote:
          "Kyunki jab tum smile karti ho, toh sach mein sab kuch aur zyada bright lagta hai.",
      },
      {
        id: "misty-sakura",
        flowerName: "Cherry Blossom",
        kind: "cherryBlossom",
        wish: "Tumhari happiness bahut important hai.",
        subNote:
          "Sabka khayal rakhte-rakhte apna aur apne sukoon ka khayal rakhna mat bhoolna.",
      },
      {
        id: "misty-tulip",
        flowerName: "Golden Tulip",
        kind: "tulip",
        wish: "Hamesha apne dreams follow karna.",
        subNote:
          "Chahe pace slow hi kyun na ho, apne har chhote-bade goal tak zaroor pahunchna.",
      },
      {
        id: "misty-peony",
        flowerName: "Soft Peony",
        kind: "peony",
        wish: "Life mein chhoti-chhoti khushiyon ko enjoy karna.",
        subNote:
          "Kabhi ek achha gaana, kabhi shaam ki thandi hawa aur kabhi bas sukoon ke do pal.",
      },
      {
        id: "misty-lily",
        flowerName: "Fairy Lily",
        kind: "lily",
        wish: "You deserve beautiful days and beautiful memories.",
        subNote:
          "Hope aaj ka Princess Day bhi unhi sweet memories mein se ek ban jaaye ✨",
      },
    ],
  },
  finalSurprise: {
    heading: "One Last Surprise, Misty... 🎁",
    scriptAccent: "Untie the golden ribbon",
    subtext:
      "Is pink gift box ko kholo — andar tumhare liye ek aakhiri dil se wish rakhi hai.",
    buttonLabel: "Open Your Royal Gift ✨",
    revealBadge: "Princess Day • 18 November",
    paragraphs: [
      "Misty, bas itni si wish hai ki tumhari life mein hamesha khushiyon ke naye-naye reasons milte rahein.",
      "Kabhi kisi wajah se smile kam ho jaaye, toh yaad rakhna ki tumhari smile bahut precious hai.",
      "Apna khayal rakhna, khush rehna aur hamesha aise hi shine karti rehna.",
    ],
    celebrationLine: "Happy Princess Day! ❤️👑",
    closingNote: "A little magical gift, thoughtfully made for Misty ✨",
  },
  accentColors: {
    primaryPink: "#F5A6C8",
    softPink: "#FFE1EC",
    background: "#FFF7FA",
    roseGold: "#DDA0A8",
    softGold: "#E8C77B",
    ribbonPink: "#E57AA8",
    dressPrimary: "#F8B6D2",
    dressHighlight: "#FFEAF2",
    crownGold: "#E8C77B",
  },
  metadata: {
    title: "Princess Misty's Fairytale | Princess Dreamland",
    description:
      "A cute, personal 2D illustrated Princess Day fairytale website thoughtfully created for Misty.",
    ogSubtitle: "A Little Magical World Thoughtfully Created For Misty",
  },
};

export const ANIKA_PRINCESS: PrincessConfig = {
  slug: "anika",
  route: "/princess/anika",
  name: "Anika",
  displayName: "Princess Anika",
  royalTitle: "Keeper of Warm Smiles & Starlight",
  occasionDate: "18 November",
  greeting: {
    scriptAccent: "Hey Anika! ❤️",
    welcomeHeading: "Every Princess Deserves Her Own Fairytale",
    supportingText: "A little magical world, created just for you.",
    personalBanner: "Welcome, Princess Anika!",
    welcomeParagraphs: [
      "Aaj ka ye pyaara sa fairytale safar sirf aur sirf tumhare liye hai, Anika.",
    ],
    hinglishWhisper:
      "Aaj ka ye pyaara sa fairytale safar sirf aur sirf tumhare liye hai, Anika.",
    ctaLabel: "Enter Your Fairytale ✨",
  },
  introduction: {
    heading: "Aaj Ka Din Sirf Tumhare Naam, Princess!",
    badgeText: "Royal Storybook • Chapter I",
    scriptNote: "Made with warm wishes",
    paragraphs: [
      "Hey Princess Anika! ❤️",
      "Aaj tumhara special day hai, aur ye chhoti si magical duniya specially tumhare liye banayi gayi hai.",
      "Tumhari pyari si smile hamesha bani rahe, tumhare saare dreams poore hon aur tumhari life hamesha khushiyon se bhari rahe.",
    ],
    closingLine: "Keep shining, Princess Anika! 👑",
  },
  letter: {
    heading: "A Little Letter For My Princess 💌",
    envelopeHint:
      "Ye royal pink wax seal sirf Princess Anika ke liye band kiya gaya hai.",
    scriptAccent: "Sealed with warm wishes",
    buttonLabel: "Open Your Letter",
    closeLabel: "Fold Letter Gently",
    salutation: "Hey Princess Anika! ❤️",
    paragraphs: [
      "Aaj Princess Day hai, toh socha tumhare liye kuch dil se special banaya jaaye.",
      "Anika, tum apne aap mein bahut special ho. Hamesha khush rehna, apni pyaari si smile kabhi mat khona aur apne har dream ko poora karne ki koshish karna.",
      "May your life always be filled with happiness, beautiful memories aur countless reasons to smile.",
      "Tum hamesha aise hi shine karti rehna, kyunki tumhari warmth sabka din bright bana deti hai.",
    ],
    closingWish: "Happy International Princess Day, Anika! 👑❤️",
    signOffPrefix: "With lots of wishes,",
    signOffName: "Your Secret Fairytale Creator.",
    postScript:
      "P.S. Jab bhi thoda sa magic chahiye ho, bas is chhote se castle mein wapas aa jaana.",
  },
  garden: {
    heading: "Welcome To Your Magical Garden 🌷",
    scriptAccent: "Little wishes in every bloom",
    supportingMessage:
      "Yahan har phool tumhare liye ek chhoti si wish lekar aaya hai.",
    instructionHint:
      "Har phool par tap ya click karo apni royal wish dekhne ke liye",
    emptyPrompt:
      "✨ Kisi bhi phool par click karo — har phool ke paas ek special wish hai!",
    allDiscoveredMessage:
      "Waah Princess Anika! Tumne apni saari magical garden wishes khol li hain ✨",
    wishes: [
      {
        id: "anika-rose",
        flowerName: "Blush Rose",
        kind: "rose",
        wish: "Keep smiling, Princess Anika! ❤️",
        subNote:
          "Tumhari smile is garden ke sabse pyaare phool se bhi zyada khoobsurat hai.",
      },
      {
        id: "anika-sakura",
        flowerName: "Cherry Blossom",
        kind: "cherryBlossom",
        wish: "May all your dreams come true.",
        subNote: "Har chhota bada sapna tumhare kadmon mein khil uthe.",
      },
      {
        id: "anika-tulip",
        flowerName: "Golden Tulip",
        kind: "tulip",
        wish: "Tumhari life hamesha khushiyon se bhari rahe.",
        subNote: "Har subah nayi umeed aur har shaam sukoon lekar aaye.",
      },
      {
        id: "anika-peony",
        flowerName: "Royal Peony",
        kind: "peony",
        wish: "Never stop believing in your magic.",
        subNote: "Anika, tumhara dil sach mein bilkul pure gold jaisa hai.",
      },
      {
        id: "anika-lily",
        flowerName: "Starlight Lily",
        kind: "lily",
        wish: "You deserve all the happiness in the world.",
        subNote: "Aaj Princess Day par bhi, aur har aane wale kal mein bhi ✨",
      },
    ],
  },
  finalSurprise: {
    heading: "One Last Surprise, Princess... 🎁",
    scriptAccent: "A final wish for you",
    subtext:
      "Is golden ribbon ke peeche tumhare liye ek aakhiri dil se nikli hui wish chhupi hai.",
    buttonLabel: "Open Your Royal Gift",
    revealBadge: "International Princess Day • 18 November",
    paragraphs: [
      "Chahe duniya mein kitni bhi princesses kyun na hon, Anika, tumhari apni ek alag hi magic hai.",
      "Hamesha khush rehna, apni pyaari smile kabhi mat khona, aur yun hi chamakti rehna, Princess!",
    ],
    celebrationLine: "Happy International Princess Day, Princess Anika! 👑❤️",
    closingNote: "Forever welcome in Princess Dreamland ✨",
  },
  accentColors: {
    primaryPink: "#F5A6C8",
    softPink: "#FFE1EC",
    background: "#FFF7FA",
    roseGold: "#DDA0A8",
    softGold: "#E8C77B",
    ribbonPink: "#E57AA8",
    dressPrimary: "#F8B6D2",
    dressHighlight: "#FFEAF2",
    crownGold: "#E8C77B",
  },
  metadata: {
    title: "Princess Anika's Fairytale | Princess Dreamland",
    description:
      "A magical 2D illustrated Princess Day fairytale storybook created specially for Princess Anika.",
    ogSubtitle: "A Little Magical World Created Just For Princess Anika",
  },
};
