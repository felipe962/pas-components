'use client'

import React from 'react'
import './HospitalCard.css'

interface HospitalCardProps {
  id: string
  name: string
  waitTime: number
  onLearnMore?: (hospitalId: string) => void
}

export default function HospitalCard({ id, name, waitTime, onLearnMore }: HospitalCardProps) {
  const handleLearnMoreClick = () => {
    if (onLearnMore) {
      onLearnMore(id)
    }
  }

  return (
    <div className="hospital-card">
      <div className="hospital-info">
        <h3 className="hospital-name">{name}</h3>
        <div className="wait-time-container">
          <svg 
            className="clock-icon" 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10"/>
            <polyline points="12,6 12,12 16,14"/>
          </svg>
          <span className="wait-time-text">
            Tempo de espera
          </span>
        </div>
        <div className="wait-time-value">
          {waitTime} minutos
        </div>
      </div>
      <button 
        className="learn-more-btn" 
        onClick={handleLearnMoreClick}
        type="button"
      >
        Saber mais
      </button>
    </div>
  )
}
