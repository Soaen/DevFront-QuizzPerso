import "./style/Home.css"
import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
    document.title = "Quizz - Accueil"
    return (
      <div>
            <h1>Quizz</h1>
            <Link to='/categories'>
            <button className="btn-quizz">Accéder au quizz</button>
            </Link>
      </div>
    );
  }