export const networkNodes = [
    {
        id: "me",
        label: "Priyanshu",
        x: 50,
        y: 50,
        type: "core",
        size: "large",
        color: "primary",


    },

    {
        id: "react",
        label: "React",
        x: 28,
        y: 22,
        type: "tech",
        size: "small",
        color: "primary",

    },

    {
        id: "node",
        label: "Node.js",
        x: 72,
        y: 22,
        type: "tech",
        size: "small",
        color: "primary",

    },

    {
        id: "python",
        label: "Python",
        x: 18,
        y: 50,
        type: "tech",
        size: "small",
        color: "primary",
    },

    {
        id: "postgres",
        label: "PostgreSQL",
        x: 82,
        y: 50,
        type: "tech",
        size: "small",
        color: "primary",

    },

    {

        id: "fastapi",
        label: "FastAPI",
        x: 30,
        y: 80,
        type: "tech",
        size: "small",
        color: "primary",


    },

    {
        id: "docker",
        label: "Docker",
        x: 70,
        y: 80,
        type: "tech",
        size: "small",
        color: "primary",

    },

    {
        id: "ai",
        label: "AI",
        x: 50,
        y: 10,
        type: "focus",
        size: "secondary",
        color: "cyan",
    },

    {
    id: "backend",
    label: "Backend",
    x: 92,
    y: 30,
    type: "focus",
    size: "secondary",
     color: "cyan",

    },

    {

        id: "automation",
        label: "Automation",
        x: 8,
        y: 30,
        type: "focus",
        size: "secondary",
         color: "cyan",


    },

    {
        id: "frontend",
        label: "Frontend",
        x: 8,
        y: 70,
        type: "focus",
        size: "secondary",
         color: "cyan",
    },

    {
        id: "database",
        label: "Database",
        x: 92,
        y: 70,
        type: "focus",
        size: "secondary",
         color: "cyan",


    },
];

export const networkConnections = [
  {
    from: "me",
    to: "react",
    strength: 4,
  },
  {
    from: "me",
    to: "node",
    strength: 4,
  },
  {
    from: "me",
    to: "python",
    strength: 5,
  },
  {
    from: "me",
    to: "postgres",
    strength: 4,
  },
  {
    from: "me",
    to: "fastapi",
    strength: 5,
  },
  {
    from: "me",
    to: "docker",
    strength: 3,
  },
  {
    from: "me",
    to: "ai",
    strength: 5,
  },
  {
    from: "me",
    to: "automation",
    strength: 5,
  },
  {
    from: "me",
    to: "backend",
    strength: 5,
  },
  {
    from: "me",
    to: "frontend",
    strength: 4,
  },
  {
    from: "me",
    to: "database",
    strength: 4,
  },

  {
    from: "react",
    to: "frontend",
    strength: 5,
  },
  {
    from: "node",
    to: "backend",
    strength: 5,
  },
  {
    from: "python",
    to: "ai",
    strength: 5,
  },
  {
    from: "postgres",
    to: "database",
    strength: 5,
  },
  {
    from: "fastapi",
    to: "backend",
    strength: 5,
  },
  {
    from: "docker",
    to: "backend",
    strength: 3,
  },
  {
    from: "backend",
    to: "database",
    strength: 4,
  },
  {
    from: "backend",
    to: "ai",
    strength: 3,
  },
  {
    from: "frontend",
    to: "backend",
    strength: 4,
  },
];



