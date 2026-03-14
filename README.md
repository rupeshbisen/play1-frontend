# Play1

Play1 is an **open-source, real-time sports platform** that enables live match scoring, live video streaming, and player auctions for sports tournaments.

Built for scalability, low latency, and transparency -- from grassroots tournaments to professional leagues.

Website: Coming Soon  
 Docs: Coming Soon
Core Concepts: Real-time | WebSockets | Scalable | OSS

# Play1 Web Frontend

Play1 Web Frontend is the **public-facing web application** for viewing live match scores, live streams, and real-time player auctions.

## Features

- Real-time live match scoring
- Live video streaming with score overlays
- Live auction participation
- SEO-friendly match pages
- Mobile-friendly UI (PWA-ready)

## Tech Stack

- Next.js 14 (App Router)
- React
- Tailwind CSS
- Redux Toolkit
- Socket.io Client
- HLS.js / Video.js

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm / npm / yarn

### Installation

```bash
git clone https://github.com/rupeshbisen/play1-frontend.git
cd play1-frontend
npm install
```

### Running Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
src/    
  └── app/
      ├── layout.tsx        # Root layout component
      ├── page.tsx          # Home page
      ├── globals.css       # Global styles
      └── favicon.ico       # Favicon
public/                      # Static assets
```

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (\git checkout -b feature/amazing-feature\)
3. Commit your changes (\git commit -m 'Add amazing feature'\)
4. Push to the branch (\git push origin feature/amazing-feature\)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

- [Report a Bug](https://github.com/rupeshbisen/play1-frontend/issues)
- [Request a Feature](https://github.com/rupeshbisen/play1-frontend/issues)
- [Discussions](https://github.com/rupeshbisen/play1-frontend/discussions)
