// question images are expected to be in src/assets/question-imgs.
// achievement images are expected to be in src/assets/achievement-imgs.
// DO NOT add beginning '/'

// If the question does not have any images, put "noop" in the image section.
// The loadImage() functions will catch this and not do anything.

export default {
  questions: [
    {
      text: "What is the annual open source tech event that ICC members will be volunteers and conduct workshops for?",
      image: "noop",
      answers: [
        { text: "Microsoft Tech Summit", correct: false },
        { text: "Dunman High Model ASEAN Plus Summit", correct: false },
        { text: "FOSSASIA Tech Summit", correct: true }
      ],
    },
    {
      text: "During an Infocomm Club CCA session, you can ",
      image: "noop",
      answers: [
        { text: "Develop an agar.io game using Vue.js", correct: true },
        { text: "Watch movies on Netflix", correct: false },
        { text: "Hack Carousell's website", correct: false }
      ],
    },
    {
      text: "How many CCA sessions do we have per week",
      image: "noop",
      answers: [
        { text: "0", correct: false },
        { text: "1", correct: true },
        { text: "2", correct: false }
      ],
    },
    {
      text: "With the help of Infocomm outreach programmes, Dunman High School has been the top participating school for __________, an international open-source competition for teenagers since 2013",
      image: "noop",
      answers: [
        { text: "codeXtremeApps Hackathon", correct: false },
        { text: "Google-Code In", correct: true },
        { text: "Splash Awards", correct: false }
      ],
    },
    {
      text: "What is White Hat?",
      image: "noop",
      answers: [
        { text: "An integrated development environment (IDE)", correct: false },
        { text: "A term for Ethical Hacking", correct: true },
        { text: "A technique used for website attacking", correct: false }
      ]
    }
  ],
  achievements: [
    {
      title: "NIC Face-off 2016",
      image: "image9.jpg",
      body: "The NIC App Development Face-off is a first of its kind competition that brings together the top teams from four National Infocomm Competitions organised by IMDA for an epic showdown. In 2016, we had a team consisting of Senior High ICC members who won the first place in the NIC Face-off, and they were fully sponsored by IMDA to APICTA 2016 (Asia Pacific ICT Alliance) in Taiwan!"
    },
    {
      title: "ICC Bonding Day",
      image: "image8.jpg",
      body: "During the December holidays, an official Bonding Day is held to foster closer ties between ICC members. In other words, Bonding Day is essentially a day where members come together to have fun and get to know each other better!"
    },
    {
      title: "SITF Awards 2016",
      image: "image1.jpg",
      body: "Did you know? DHS ICC members participate in the SITF Awards every year, which recognises innovative ICM (Infocomm Media) solutions developed locally. In 2016, we even had two teams clinching the tied second position for this prestigious competition!"
    }
  ]
};