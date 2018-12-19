// question images are expected to be in src/assets/question-imgs.
// achievement images are expected to be in src/assets/achievement-imgs.
// DO NOT add beginning '/'

// If the question does not have any images, put "noop" in the image section.
// The loadImage() functions will catch this and not do anything.

export default {
  questions: [
    {
      text: "Where is this location?",
      image: "gjHAjb7.png",
      answers: [
        { text: "Former Dunman High School", correct: true },
        { text: "Chung Cheng High School (Main)", correct: false },
        { text: "Bukit Panjang High School", correct: false }
      ],
    },
    {
      text: "Dunman High School's logo was designed by:",
      image: "Dunman-High-School2-1024x1024.jpg",
      answers: [
        { text: "Mr. Sun Hwan Sin", correct: false },
        { text: "Mr. Liu Kang", correct: true },
        { text: "Mr. Tan Thiam Hock", correct: false }
      ],
    },
    {
      text: "What does this image show?",
      image: "tumblr_leqrx5hnZn1qa5di0.jpg",
      answers: [      
        { text: "Dunman High School’s school song", correct: true },
        { text: "Dunman High School’s vision", correct: false },
        { text: "Dunman High School’s school crest", correct: false }
      ],
    },
    {
      text: "What do you think Dunman High School’s metal buttons symbolise?",
      image: "Photo_Grid_1483335829713.png",
      answers: [
        { text: "Dunmanians’ courage and determination", correct: false },
        { text: "Dunman High School’s traditional Chinese culture", correct: true },
        { text: "Dunman High School’s status as an autonomous school", correct: false }
      ],
    },
    {
      text: "These mascots for Dunman High School are known as...",
      image: "fEd86dW.png",
      answers: [
        { text: "Dunman Dolls", correct: true },
        { text: "Dunman Figurines", correct: false },
        { text: "Dunman Puppets", correct: false }
      ],
    },
    {
      text: "Dunman High School celebrated its 60th anniversary in the year...",
      image: "0808fdhs60_01.jpg",
      answers: [
        { text: "1990", correct: false },
        { text: "2007", correct: false },
        { text: "2016", correct: true }
      ],
    },
    {
      text: "This photo is taken at Dunman High School’s...",
      image: "1083_03.jpg",
      answers: [
        { text: "Media Resource Library (MRL)", correct: true },
        { text: "Auditorium", correct: false },
        { text: "PAC", correct: false }
      ],
    },
    {
      text: "Dunman High School’s Performing Arts Centre (PAC) can sit up to...",
      image: "article_10180.jpg",
      answers: [
        { text: "100 people", correct: false },
        { text: "400 people", correct: false },
        { text: "800 people", correct: true }
      ],
    },
    {
      text: "This was layout of the former Dunman High School campus. \n Which of the following building names are no longer in use?",
      image: "28swj8n.jpg",
      answers: [
        { text: "集思楼", correct: false },
        { text: "晓学楼", correct: true },
        { text: "正心楼", correct: false }
      ],
    },
    {
      text: "Which of the following is our school’s mission?",
      image: "noop",
      answers: [
        { text: "We are committed to building character, enhancing confidence and nurturing talents in all our pupils.", correct: false },
        { text: "To nurture our students to Care, to Serve, and to Lead.", correct: true },
        { text: "Home of scholars and leaders who serve with honour.", correct: false }
      ]
    },
    {
      text: "What does the red colour in our school crest represent?",
      image: "Dunman-High-School2-1024x1024.jpg",
      answers: [
        { text: "Passion and drive for success", correct: true },
        { text: "Universal brotherhood and equality", correct: false },
        { text: "Courage and compassion", correct: false }
      ]
    },
    {
      text: "How many stalls are there in Dunman High School’s canteen?",
      image: "noop",
      answers: [
        { text: "8", correct: false },
        { text: "13", correct: false },
        { text: "16", correct: true }
      ]
    },
    {
      text: "When was Dunman High School established?",
      image: "noop",
      answers: [
        { text: "14 October 1956", correct: true },
        { text: "15 September 1960", correct: false },
        { text: "16 February 1971", correct: false }
      ]
    },
    {
      text: "The statue in the middle of the 正心园 is that of...",
      image: "76315221.jpg",
      answers: [
        { text: "Sir Stamford Raffles", correct: false },
        { text: "Confucius", correct: true },
        { text: "Joseph-Louis Lagrange", correct: false }
      ]
    }
  ]
};