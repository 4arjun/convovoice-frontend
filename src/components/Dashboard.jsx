import React from 'react';
import { Line, Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import './Dashboard.css';

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, BarElement, ArcElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const lineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Speaking Proficiency',
        data: [20, 40, 60, 80, 100, 120, 140],
        borderColor: '#3498db',
        backgroundColor: 'rgba(52, 152, 219, 0.2)',
        fill: true,
        tension: 0.1,
      },
    ],
  };

  const barData = {
    labels: ['Vocabulary', 'Pronunciation', 'Grammar'],
    datasets: [
      {
        label: 'Completion',
        data: [85, 75, 90],
        backgroundColor: ['#1abc9c', '#e67e22', '#f39c12'],
        borderRadius: 5,
      },
    ],
  };

  const pieData = {
    labels: ['Vocabulary', 'Pronunciation', 'Grammar', 'Listening'],
    datasets: [
      {
        data: [30, 20, 25, 25],
        backgroundColor: ['#1abc9c', '#e67e22', '#f39c12', '#3498db'],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `Score: ${context.raw} %`;
          },
        },
      },
    },
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1 className="dashboard-title">Your Language Learning Dashboard</h1>
        <p className="dashboard-subtitle">Track your progress, analyze your performance, and set new goals.</p>
      </header>

      <section className="overview-section">
        <div className="overview-item">
          <h2 className="section-title">Overall Progress</h2>
          <Line data={lineData} options={options} />
        </div>
        <div className="overview-item">
          <h2 className="section-title">Skill Completion</h2>
          <Bar data={barData} options={options} />
        </div>
        <div className="overview-item">
          <h2 className="section-title">Skill Distribution</h2>
          <Pie data={pieData} options={options} />
        </div>
      </section>

      <section className="achievements-section">
        <h2 className="section-title">Achievements</h2>
        <div className="achievement-grid">
          <div className="achievement-item">
            <div className="achievement-icon">🎓</div>
            <h3 className="achievement-title">Language Mastery</h3>
            <p className="achievement-description">Congratulations on reaching level 5 in language mastery!</p>
          </div>
          <div className="achievement-item">
            <div className="achievement-icon">🏆</div>
            <h3 className="achievement-title">Top Performer</h3>
            <p className="achievement-description">You've been a top performer for the month. Keep up the great work!</p>
          </div>
          <div className="achievement-item">
            <div className="achievement-icon">🎯</div>
            <h3 className="achievement-title">Goal Achiever</h3>
            <p className="achievement-description">You've successfully achieved all your language learning goals for the week!</p>
          </div>
        </div>
      </section>

      <section className="activity-log-section">
        <h2 className="section-title">Recent Activity</h2>
        <div className="activity-log">
          <div className="activity-item">
            <span className="activity-date">Sept 15, 2024</span>
            <p className="activity-description">Completed a 30-minute session on advanced vocabulary.</p>
          </div>
          <div className="activity-item">
            <span className="activity-date">Sept 14, 2024</span>
            <p className="activity-description">Received feedback on pronunciation and corrected errors.</p>
          </div>
          <div className="activity-item">
            <span className="activity-date">Sept 13, 2024</span>
            <p className="activity-description">Started a new grammar module with interactive exercises.</p>
          </div>
        </div>
      </section>

      <section className="goals-section">
        <h2 className="section-title">Your Goals</h2>
        <div className="goal-item">
          <h3 className="goal-title">Improve Vocabulary</h3>
          <p className="goal-description">Aim to learn 50 new words in the next month.</p>
          <div className="goal-progress-bar-container">
            <div className="goal-progress-bar" style={{ width: '60%' }}></div>
          </div>
        </div>
        <div className="goal-item">
          <h3 className="goal-title">Enhance Pronunciation</h3>
          <p className="goal-description">Work on reducing accent and improving clarity in speech.</p>
          <div className="goal-progress-bar-container">
            <div className="goal-progress-bar" style={{ width: '40%' }}></div>
          </div>
        </div>
        <div className="goal-item">
          <h3 className="goal-title">Master Grammar</h3>
          <p className="goal-description">Complete all advanced grammar exercises by the end of the month.</p>
          <div className="goal-progress-bar-container">
            <div className="goal-progress-bar" style={{ width: '75%' }}></div>
          </div>
        </div>
      </section>

      <footer className="dashboard-footer">
        <p className="footer-text">© 2024 ConvoVoice. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Dashboard;
