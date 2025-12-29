# DevSquad Portfolio

A modern portfolio website for DevSquad team, built with Next.js, Tailwind CSS, and Python backend.

## Features

- **Cover Page** - Team branding and introduction
- **About Section** - Team vision and mission
- **Team Members & Roles** - Detailed team information
- **Skills & Tech Stack** - Technologies we work with
- **Projects Overview** - Showcase of our work (ready for content)
- **Code Samples** - GitHub links and architecture diagrams
- **Contact Information** - Ways to reach us

## Tech Stack

### Frontend
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS

### Backend
- Python (FastAPI)

## Getting Started

### Frontend Setup

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Create a virtual environment:
```bash
python -m venv venv
```

3. Activate the virtual environment:
```bash
# Windows
venv\Scripts\activate

# macOS/Linux
source venv/bin/activate
```

4. Install dependencies:
```bash
pip install -r requirements.txt
```

5. Run the server:
```bash
uvicorn main:app --reload
```

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── CoverPage.tsx       # Cover page component
│   ├── AboutSection.tsx    # About section
│   ├── TeamSection.tsx     # Team members section
│   ├── SkillsSection.tsx   # Skills section
│   ├── ProjectsSection.tsx # Projects section
│   ├── CodeSamplesSection.tsx # Code samples section
│   ├── ContactSection.tsx  # Contact section
│   └── Navigation.tsx      # Navigation component
├── backend/                # Python backend
└── public/                 # Static assets
```

## Customization

Update team member information, skills, and contact details in the respective component files.

## License

MIT

