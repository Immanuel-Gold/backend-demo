//

let articles = [
  {
    id: 1,
    title: "The Evolution of Artificial Intelligence",
    author: "John Doe",
    date: "2024-12-01",
    tags: ["AI", "Technology", "Innovation"],
    content:
      "An exploration of how AI has transformed industries over the past decade.",
  },
  {
    id: 2,
    title: "10 Tips for Better Time Management",
    author: "Jane Smith",
    date: "2024-11-30",
    tags: ["Productivity", "Self-help", "Tips"],
    content:
      "Practical strategies for organizing your day and maximizing productivity.",
  },
  {
    id: 3,
    title: "A Beginner's Guide to Blockchain",
    author: "Alex Johnson",
    date: "2024-12-02",
    tags: ["Blockchain", "Cryptocurrency", "Technology"],
    content:
      "Understand the fundamentals of blockchain and its applications in modern technology.",
  },
  {
    id: 4,
    title: "The Science Behind Healthy Eating",
    author: "Dr. Emily Carter",
    date: "2024-11-28",
    tags: ["Health", "Nutrition", "Wellness"],
    content:
      "Discover the role of balanced nutrition in maintaining a healthy lifestyle.",
  },
  {
    id: 5,
    title: "Top 5 Travel Destinations for 2025",
    author: "Lisa Wong",
    date: "2024-12-05",
    tags: ["Travel", "Adventure", "Culture"],
    content: "Explore the must-visit places for the upcoming year.",
  },
  {
    id: 6,
    title: "Mastering the Art of Public Speaking",
    author: "Michael Brown",
    date: "2024-12-03",
    tags: ["Communication", "Skills", "Public Speaking"],
    content:
      "Learn techniques to captivate and engage your audience during presentations.",
  },
  {
    id: 7,
    title: "Understanding Climate Change",
    author: "Sarah Green",
    date: "2024-11-29",
    tags: ["Environment", "Science", "Awareness"],
    content:
      "A deep dive into the causes, effects, and solutions to combat climate change.",
  },
  {
    id: 8,
    title: "How to Start Your Own Business",
    author: "Rachel Adams",
    date: "2024-12-04",
    tags: ["Entrepreneurship", "Business", "Startups"],
    content:
      "Step-by-step guidance on building a successful business from scratch.",
  },
  {
    id: 9,
    title: "The History of Space Exploration",
    author: "Chris Martinez",
    date: "2024-12-01",
    tags: ["Space", "History", "Exploration"],
    content: "A timeline of humanity's journey into space and beyond.",
  },
  {
    id: 10,
    title: "Yoga for Beginners: Poses and Benefits",
    author: "Sophia White",
    date: "2024-11-27",
    tags: ["Fitness", "Yoga", "Wellness"],
    content:
      "An introduction to yoga, featuring basic poses and their health benefits.",
  },
  {
    id: 11,
    title: "The Future of Renewable Energy",
    author: "Ethan Clark",
    date: "2024-12-06",
    tags: ["Energy", "Renewable", "Technology"],
    content:
      "Exploring the advancements and potential of renewable energy sources.",
  },
  {
    id: 12,
    title: "10 Must-Watch Movies of the Year",
    author: "Jessica Taylor",
    date: "2024-11-26",
    tags: ["Movies", "Entertainment", "Reviews"],
    content: "A curated list of this year's most impactful films.",
  },
  {
    id: 13,
    title: "Effective Budgeting Tips for Young Adults",
    author: "David Wilson",
    date: "2024-12-07",
    tags: ["Finance", "Budgeting", "Advice"],
    content:
      "Simple strategies to take control of your finances and save effectively.",
  },
  {
    id: 14,
    title: "The Psychology of Happiness",
    author: "Dr. Olivia Lewis",
    date: "2024-12-02",
    tags: ["Psychology", "Happiness", "Well-being"],
    content:
      "Understanding the key factors that contribute to a fulfilling life.",
  },
  {
    id: 15,
    title: "How to Build Your First Mobile App",
    author: "Mark Evans",
    date: "2024-12-08",
    tags: ["Technology", "Programming", "Mobile Apps"],
    content:
      "A beginner-friendly guide to creating a functional mobile application.",
  },
  {
    id: 16,
    title: "Exploring Ancient Civilizations",
    author: "Laura Turner",
    date: "2024-11-25",
    tags: ["History", "Archaeology", "Culture"],
    content:
      "Unveiling the mysteries of ancient societies and their contributions to the modern world.",
  },
  {
    id: 17,
    title: "The Best Practices for Remote Work",
    author: "Andrew King",
    date: "2024-12-09",
    tags: ["Productivity", "Remote Work", "Workplace"],
    content: "Tips and tools to thrive in a remote work environment.",
  },
  {
    id: 18,
    title: "Top 5 Coding Languages to Learn in 2025",
    author: "Nina Patel",
    date: "2024-12-10",
    tags: ["Programming", "Technology", "Skills"],
    content:
      "An overview of the most in-demand programming languages for the coming year.",
  },
  {
    id: 19,
    title: "The Role of Art in Modern Society",
    author: "Samuel Harris",
    date: "2024-11-24",
    tags: ["Art", "Culture", "Society"],
    content:
      "Exploring how art shapes societal values and individual perspectives.",
  },
  {
    id: 20,
    title: "Getting Started with Gardening",
    author: "Megan Hall",
    date: "2024-12-11",
    tags: ["Gardening", "Hobbies", "Nature"],
    content: "Essential tips for beginners to start their own garden.",
  },
  {
    id: 21,
    title: "The Impact of Social Media on Mental Health",
    author: "Emily Perez",
    date: "2024-12-12",
    tags: ["Social Media", "Mental Health", "Awareness"],
    content: "Understanding the psychological effects of social media usage.",
  },
  {
    id: 22,
    title: "Learning to Cook: Recipes for Beginners",
    author: "Thomas Baker",
    date: "2024-11-23",
    tags: ["Cooking", "Food", "Lifestyle"],
    content: "Simple and delicious recipes for those new to the kitchen.",
  },
  {
    id: 23,
    title: "The Science of Sleep",
    author: "Dr. Alan Scott",
    date: "2024-12-13",
    tags: ["Health", "Sleep", "Science"],
    content:
      "Exploring the importance of sleep for physical and mental well-being.",
  },
  {
    id: 24,
    title: "Beginner's Guide to Photography",
    author: "Olivia Brooks",
    date: "2024-12-14",
    tags: ["Photography", "Art", "Hobbies"],
    content:
      "Tips for getting started in photography and capturing stunning images.",
  },
  {
    id: 25,
    title: "How to Write a Compelling Resume",
    author: "Emma Collins",
    date: "2024-12-15",
    tags: ["Career", "Resume", "Tips"],
    content:
      "Practical advice on creating a resume that stands out to employers.",
  },
];

const getArticle = (req, res) => {
  const limit = req.query.limit;
  res.json(articles.slice(0, limit));
};
const getArticleById = (req, res) => {
  const id = parseInt(req.params.id);
  const article = articles.find((article) => article.id === id);

  if (!article) {
    // throw new Error(``);
    res.status(400).json({ msg: "Not found" });
  }
  res.status(200).json(article);
};
const createArticle = (req, res) => {
  const newArticle = {
    id: articles.length + 1,
    title: req.body.title,
    author: req.body.author,
    date: req.body.date,
    // tags: ["Career", "Resume", "Tips"],
    content: req.body.content,
  };

  // console.log(req.body.title);
  articles.push(newArticle);

  res.status(201).json(articles);
};
const updateArticle = (req, res) => {
  const id = parseInt(req.params.id);

  const article = articles.find((article) => article.id === id);

  article.title = req.body.title;
  article.author = req.body.author;
  article.content = req.body.content;
  article.date = req.body.date;

  res.status(200).json(articles);
};
const deleteArticle = (req, res) => {
  const id = parseInt(req.params.id);

  articles = articles.filter((article) => article.id !== id);

  res.status(200).json(articles);
};

export {
  getArticle,
  getArticleById,
  createArticle,
  updateArticle,
  deleteArticle,
};
