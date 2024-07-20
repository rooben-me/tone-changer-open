https://github.com/user-attachments/assets/d3d66b66-2417-4c3f-b58c-b29a8c2f6c70

# Reverse-Engineered Figma Tone Changer

A Figma-inspired tone changer built with Next.js, tailwind.css, Shadcn, Groq, and Llama-3

## Description

This project is a reverse-engineered version of Figma's tone changer, implemented as an open-source web application. It leverages Groq for high-speed inference and uses the Llama-3-8b language model to adjust the tone of input text based on user-selected tones and weights.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14.0.0 or later)
- pnpm (v6.0.0 or later)

## Installation

1. Clone the repository:
```
git clone https://github.com/rooben-me/tone-changer-open
```

2. Navigate to the project directory:
```
cd tone-changer-open
```
3. Install the dependencies:
```
pnpm install
```

## Running the Project

To run the project in development mode:
```
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Production Build

To build the project for production:
```
pnpm run build
```

To start the production server:
```
pnpm start
```

## Technologies Used

- Next.js
- React
- Tailwind CSS
- Groq API
- Llama-3 language model
- Zustand for state management
- Shadcn
- Unicorn.studios for creating Magic Background

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgements

- Inspired by Figma's tone changer feature
