import man from "@/assets/research/ex.jpg";
import woman from "@/assets/research/woman.jpg";
import profImage from "@/assets/slab/team/prof.jpg";
import arun from "@/assets/slab/team/arun.jpeg";
import jai from "@/assets/slab/team/jai.jpg";
import mei from "@/assets/slab/team/mai.jpeg";

export const professorInfo = {
  name: "Vetriselvi V",
  image: profImage,
  title: "Professor",
  department: "Computer Science and Engineering",
  university: "College of Engineering Guindy, Anna University",
  emails: ["vetri@annauniv.edu"],
  experience: [
    "Professor at Anna University (Aug 2015 - Present)",
    "Associate Professor at Anna University (Aug 2012 - Aug 2015)",
    "Assistant Professor at Anna University (Aug 2009 - Aug 2012)",
    "Lecturer at Anna University (Jan 2003 - Aug 2009)",
    "Teaching Research Associate at Anna University (Nov 2000 - Jan 2003)",
  ],
};

export const currentStudents = [
  {
    name: "Jai Vinita L",
    image: jai,
    type: "PhD Student",
  },
  {
    name: "Meignaanamoorthi D",
    image: mei,
    type: "PhD Student",
  },
  {
    name: "Arun Amaithi Rajan",
    image: arun,
    type: "PhD Student",
  },
  {
    name: "Aishwarya R",
    image: woman,
    type: "PhD Student",
  },
  {
    name: "Anand B",
    image: man,
    type: "Masters Student",
  },
  {
    name: "Sudeep R",
    image: man,
    type: "Undergraduate Student",
  },
  {
    name: "Riya Elizabeth",
    image: woman,
    type: "Undergraduate Student",
  },
  {
    name: "Vikranth",
    image: man,
    type: "Undergraduate Student",
  },
  {
    name: "Vishwanth",
    image: man,
    type: "Undergraduate Student",
  },
];

export const masterStudents = {
  columns: [
    "Name",
    "Association",
    "Area of Research",
    "Current Position",
  ],
  data: [
    {
      name: "Anand B",
      association: "2024-Present",
      thesis: "Secure Image Storage using Adversarial attack resistant steganography and Blockchain technologies",
      position: "Ongoing",
    },
    {
      name: "Mohamed Fuzail H",
      link: "https://www.linkedin.com/in/fuzail22/",
      association: "2022-2023",
      thesis: "Secure and Privacy-Aware Targeted-Encryption Based Image Storage and Retrieval Framework",
      position: "Full Stack Engineer at 21n",
    },
    {
      name: "Baskar P N",
      link: "https://www.linkedin.com/in/baskar-p-n-7298a116a/",
      association: "2022-2023",
      thesis: "Multimodal Emotion Recognition in Conversation using Graph Convolution Networks",
      position: "Software Engineer at Hindustan Aeronautics Limited",
    },
  ],
};

export const groupedInternStudents = [
  {
    area: "Network Security",
    mentor: "Jun Han",
    association: "Summer 2023",
    publication: "https://github.com",
    columns: ["Name", "Current Position"],
    students: [
      {
        name: "Alice Chen",
        position: "Graduate Student at MIT",
      },
      {
        name: "Bob Wilson",
        position: "Software Engineer at Google",
      },
    ],
  },
  {
    area: "IoV Security",
    mentor: "Jun Han",
    association: "Fall 2023",
    columns: ["Name", "Current Position"],
    students: [
      {
        name: "Carol Smith",
        position: "Masters Student at Stanford",
      },
      {
        name: "David Lee",
        position: "Research Assistant at Berkeley",
      },
    ],
  },
];
