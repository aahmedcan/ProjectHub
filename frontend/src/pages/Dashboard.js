import React, { useState, useEffect } from 'react';
import { projects, tasks } from '../services/api';

function Dashboard() {
  const [projectList, setProjectList] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [taskList, setTaskList] = useState([]);
  const [newProject, setNewProject] = useState({ name: '', description: '' });
  const [newTask, setNewTask] = useState({ title: '', description: '', status: 'todo' });

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {
      const data = await projects.getAll();
      setProjectList(data);
    } catch (err) {
      console.error('Error loading projects:', err);
    }
  };

  const handleCreateProject = async (e) => {
    e.preventDefault();
    try {
      await projects.create(newProject);
      setNewProject({ name: '', description: '' });
      loadProjects();
    } catch (err) {
      console.error('Error creating project:', err);
    }
  };

  const handleSelectProject = async (project) => {
    setSelectedProject(project);
    try {
      const data = await tasks.getByProject(project.id);
      setTaskList(data);
    } catch (err) {
      console.error('Error loading tasks:', err);
    }
  };

  const handleCreateTask = async (e) => {
    e.preventDefault();
    try {
      await tasks.create({ ...newTask, project_id: selectedProject.id });
      setNewTask({ title: '', description: '', status: 'todo' });
      handleSelectProject(selectedProject);
    } catch (err) {
      console.error('Error creating task:', err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-blue-600 text-white p-4 shadow-lg">
        <h1 className="text-2xl font-bold">ProjectHub Dashboard</h1>
      </nav>

      <div className="container mx-auto p-6">
        <div className="grid grid-cols-3 gap-6">
          {/* Projects Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">My Projects</h2>
            <form onSubmit={handleCreateProject} className="mb-4">
              <input
                type="text"
                placeholder="Project name"
                value={newProject.name}
                onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg mb-2"
                required
              />
              <textarea
                placeholder="Description"
                value={newProject.description}
                onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg mb-2"
              />
              <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                Create Project
              </button>
            </form>
            <div className="space-y-2">
              {projectList.map((project) => (
                <div
                  key={project.id}
                  onClick={() => handleSelectProject(project)}
                  className={`p-3 rounded-lg cursor-pointer ${
                    selectedProject?.id === project.id ? 'bg-blue-100' : 'bg-gray-100'
                  }`}
                >
                  <p className="font-semibold">{project.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tasks Section */}
          <div className="col-span-2 bg-white p-6 rounded-lg shadow-md">
            {selectedProject ? (
              <>
                <h2 className="text-xl font-bold mb-4">{selectedProject.name} - Tasks</h2>
                <form onSubmit={handleCreateTask} className="mb-6 p-4 bg-gray-50 rounded-lg">
                  <input
                    type="text"
                    placeholder="Task title"
                    value={newTask.title}
                    onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg mb-2"
                    required
                  />
                  <textarea
                    placeholder="Task description"
                    value={newTask.description}
                    onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg mb-2"
                  />
                  <select
                    value={newTask.status}
                    onChange={(e) => setNewTask({ ...newTask, status: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg mb-2"
                  >
                    <option value="todo">To Do</option>
                    <option value="in-progress">In Progress</option>
                    <option value="completed">Completed</option>
                  </select>
                  <button type="submit" className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
                    Create Task
                  </button>
                </form>
                <div className="space-y-2">
                  {taskList.map((task) => (
                    <div key={task.id} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <p className="font-semibold">{task.title}</p>
                      <p className="text-sm text-gray-600">{task.description}</p>
                      <span className={`inline-block mt-2 px-2 py-1 rounded text-sm ${
                        task.status === 'completed' ? 'bg-green-200' :
                        task.status === 'in-progress' ? 'bg-yellow-200' :
                        'bg-red-200'
                      }`}>
                        {task.status}
                      </span>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <p className="text-gray-500">Select a project to view tasks</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
