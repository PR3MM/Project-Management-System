import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useData } from '../Context/ProgressContext';

const Tasks = () => {



  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "AI Model Training for Predictive Analytics",
      status: "pending",
      description: "Train a machine learning model to predict customer behavior.",
      skills: ["Python", "Machine Learning", "Pandas", "Scikit-learn"],
      deadline: "Dec 30, 2024"
    },
    {
      id: 2,
      title: "Cybersecurity Threat Detection System",
      status: "pending",
      description: "Develop a real-time cybersecurity monitoring system to detect threats",
      skills: ["Python", "Cybersecurity", "Network Security", "AI"],
      deadline: "Jan 15, 2025"
    },
    {
      id: 3,
      title: "AI-Based Chatbot for Customer Support",
      status: "pending",
      description: "Create an AI chatbot to automate customer support interactions",
      skills: ["Python", "Natural Language Processing", "TensorFlow"],
      deadline: "Jan 5, 2025"
    },
    {
      id: 4,
      title: "Data Science Project for Fraud Detection",
      status: "pending",
      description: "Develop a model to detect fraudulent activities using historical transaction data",
      skills: ["Python", "Data Science", "Machine Learning", "Pandas"],
      deadline: "Jan 20, 2025"
    }
  ]);
  
  const [AssignedTasks, setAssignedTasks] = useState([
    {
      id: 5,
      title: "Network Penetration Testing",
      status: "assigned",
      description: "Conduct penetration testing to identify vulnerabilities in the company's network",
      skills: ["Cybersecurity", "Penetration Testing", "Network Security"],
      deadline: "Jan 10, 2025"
    }
  ]);
  

  const [acceptedTasks, setAcceptedTasks] = useState([]);
  const [Currentprogress, setCurrentprogress] = useState(0);

  const {setProgress} = useData();


  const handleAccept = (task) => {
  setAcceptedTasks((prev) => [...(prev || []), { ...task, status: "accepted" }]);
  setProjects(projects.filter(p => p.id !== task.id));
  setProgress(Currentprogress + 25); 
  setCurrentprogress(Currentprogress + 25);
}


  const handleDecline = (task) => {
    setProjects(projects.filter(p => p.id !== task.id));
  }
  
  return (
    <div className="p-4">
      <h1 className="text-xl mb-8 font-bold">Projects</h1>

      <div className="h-[200px] overflow-x-auto overflow-y-hidden whitespace-nowrap scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
        {projects.map((project) => (
          <Card key={project.id} className="mb-4 w-[600px] inline-block mr-4">
            <CardContent className="p-4">
              <div className="flex justify-between mb-2">
                <h2 className="font-bold">{project.title}</h2>
                <Badge>{project.status}</Badge>
              </div>
              <p className="mb-2">{project.description}</p>
              <div className="mb-2">
                {project.skills.map((skill, index) => (
                  <Badge key={index} variant="outline" className="mr-2">
                    {skill}
                  </Badge>
                ))}
              </div>
              <div className="flex justify-between">
                <span>{project.deadline}</span>
                <div>
                  <Button variant="outline" className="mr-2" onClick={() => handleDecline(project)}>
                    Decline
                  </Button>
                  <Button onClick={() => handleAccept(project)}>Accept</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8">
        <h1 className="text-xl mb-8 font-bold">Accepted Tasks</h1>
        {!acceptedTasks.length ? (
          <p>Accept Tasks to show Tasks</p>
        ) : (
          <div className="grid gap-4">
            {acceptedTasks.map((task) => (
              <Card key={task.id}>
                <CardContent className="p-4">
                  <div className="flex justify-between mb-2">
                    <h2 className="font-bold">{task.title}</h2>
                    <Badge className="bg-green-100 text-green-800">{task.status}</Badge>
                  </div>
                  <p className="mb-2">{task.description}</p>
                  <div className="mb-2">
                    {task.skills.map((skill, index) => (
                      <Badge key={index} variant="outline" className="mr-2">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <span>{task.deadline}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>

      <div className="mt-8">
        <h1 className="text-xl mb-8 font-bold">Assigned Tasks</h1>
        
        <div className="grid gap-4">
          {AssignedTasks.map((task) => (
            <Card key={task.id}>
              <CardContent className="p-4">
                <div className="flex justify-between mb-2">
                  <h2 className="font-bold">{task.title}</h2>
                  <Badge>{task.status}</Badge>
                </div>
                <p className="mb-2">{task.description}</p>
                <div className="mb-2">
                  {task.skills.map((skill, index) => (
                    <Badge key={index} variant="outline" className="mr-2">
                      {skill}
                    </Badge>
                  ))}
                </div>
                <span>{task.deadline}</span>
              </CardContent>
            </Card>
          ))}

          {!AssignedTasks.length && <p>No assigned tasks</p>}


          </div>

      </div>
    </div>
  );
};

export default Tasks;