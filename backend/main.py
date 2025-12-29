from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional

app = FastAPI(title="DevSquad Portfolio API", version="1.0.0")

# CORS middleware for frontend communication
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Data models
class TeamMember(BaseModel):
    name: str
    role: str
    skills: str
    responsibilities: str

class Project(BaseModel):
    name: str
    type: str
    tech_stack: str
    team_members: str
    demo_url: Optional[str] = None
    github_url: Optional[str] = None
    description: str

# Sample data (can be replaced with database)
team_members_data = [
    {
        "name": "Member 1",
        "role": "Frontend Developer",
        "skills": "React, Tailwind",
        "responsibilities": "UI/UX, frontend development"
    },
    {
        "name": "Member 2",
        "role": "Backend Developer",
        "skills": "Node.js, MongoDB",
        "responsibilities": "Server-side logic, APIs"
    },
    {
        "name": "Member 3",
        "role": "AI / ML Specialist",
        "skills": "OpenAI SDK, LangChain",
        "responsibilities": "AI integration, chatbot development"
    },
    {
        "name": "Member 4",
        "role": "Full-Stack Developer",
        "skills": "React, Node",
        "responsibilities": "Bridges frontend & backend"
    },
    {
        "name": "Member 5",
        "role": "QA & Deployment",
        "skills": "Testing, CI/CD",
        "responsibilities": "Ensures code quality, deploys projects"
    }
]

projects_data: List[Project] = []

@app.get("/")
async def root():
    return {"message": "DevSquad Portfolio API", "version": "1.0.0"}

@app.get("/api/team", response_model=List[TeamMember])
async def get_team_members():
    return team_members_data

@app.get("/api/projects", response_model=List[Project])
async def get_projects():
    return projects_data

@app.post("/api/projects", response_model=Project)
async def create_project(project: Project):
    projects_data.append(project)
    return project

@app.get("/api/health")
async def health_check():
    return {"status": "healthy"}

