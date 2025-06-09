import React, { useState } from 'react';
import './Resources.css';
import { Link } from 'react-router-dom';

const ResourcesPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  // Resource categories
  const categories = [
    { id: 'all', name: 'All Resources' },
    { id: 'programming', name: 'Technical Skills' },
    { id: 'events', name: 'Events' },
    { id: 'networking', name: 'Networking' },
    { id: 'career', name: 'Career Development' }
  ];

  // Sample resources data
  const resources = [
    {
      id: 1,
      title: 'Web Development Projects Committee',
      description: 'Join our projects committee to learn React, Next.js, and other modern frameworks while building real-world applications with experienced developers.',
      image: 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      category: 'programming',
      tags: ['React', 'Web Dev', 'Projects'],
      link: 'https://www.mozilla.org/en-US/learn/'
    },
    {
      id: 2,
      title: 'Black in Tech Conferences',
      description: 'Information about major tech conferences for Black professionals including AfrоTech, NSBE Convention, and Black Enterprise TechConnext.',
      image: 'https://obsidi.com/wp-content/uploads/2024/07/black-tech-conferences.jpg',
      category: 'events',
      tags: ['AfrоTech', 'Conferences', 'Networking'],
      link: 'https://www.blacktechconference.com/'
    },
    {
      id: 3,
      title: 'Networking for Tech Professionals',
      description: 'Networking opportunities including our Google campus tour and tech industry mixers designed specifically for underrepresented professionals.',
      image: 'src/components/images/rss1.jpg',
      category: 'networking',
      tags: ['Google Tour', 'Industry Events', 'Professional'],
      link: 'https://www.linkedin.com/learning/networking-for-career-success'
    },
    {
      id: 4,
      title: 'Python Programming Essentials',
      description: 'Master the fundamentals of Python with our specialized workshops and resources that support diversity in coding and data science.',
      image: 'https://i.pinimg.com/736x/c2/6a/58/c26a58af112f4cad08629893409f32c5.jpg',
      category: 'programming',
      tags: ['Python', 'Coding', 'Data Science'],
      link: 'https://www.python.org/about/gettingstarted/'
    },
    {
      id: 5,
      title: 'Black in Tech Resume Workshops',
      description: 'Attend our resume workshops featuring Microsoft recruiters who provide personalized advice to help you stand out in the tech industry.',
      image: 'src/components/images/rss2.jpg',
      category: 'career',
      tags: ['Microsoft', 'Resume', 'Job Search'],
      link: 'https://www.indeed.com/career-advice/resumes-cover-letters/how-to-make-a-resume-with-examples'
    },
    {
      id: 6,
      title: 'Tech Industry Mentorship',
      description: 'Connect with experienced mentors in the tech industry who can provide guidance and support for your career journey.',
      image: 'src/components/images/rss3.jpg',
      category: 'career',
      tags: ['Mentorship', 'Career Growth', 'Development'],
      link: 'https://www.blacksintechnology.net/'
    }
  ];

  // Filter resources based on active category
  const filteredResources = activeCategory === 'all' 
    ? resources 
    : resources.filter(resource => resource.category === activeCategory);

  return (
    <div className="resources-section page-transition">
      {/* Hero section */}
      <div className="resources-hero">
        <h1 className="fade-in-up">Resources</h1>
        <p className="fade-in-up">Explore our curated collection of resources to help you advance your technical skills and career in the tech industry.</p>
      </div>

      {/* Resources container */}
      <div className="resources-container">
        {/* Category filters */}
        <div className="resource-categories fade-in-up">
          {categories.map((category, index) => (
            <button
              key={category.id}
              className={`category-tab ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Resources grid */}
        {filteredResources.length > 0 ? (
          <div className="resources-grid">
            {filteredResources.map((resource, index) => (
              <div className="resource-card" key={resource.id}>
                <img src={resource.image} alt={resource.title} />
                <div className="card-content">
                  <h3>{resource.title}</h3>
                  <p>{resource.description}</p>
                  <div className="resource-tags">
                    {resource.tags.map((tag, index) => (
                      <span key={index} className="resource-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-resources fade-in-up">
            <h2>No resources found</h2>
            <p>We couldn't find any resources matching your selected category. Please try another category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResourcesPage; 