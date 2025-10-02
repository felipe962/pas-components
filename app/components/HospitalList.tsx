'use client'

import React, { useState } from 'react'
import HospitalCard from './HospitalCard'
import { useHospitals } from '../hooks/useHospitals'
import { Hospital } from '../types/hospital'
import './HospitalList.css'

interface HospitalListProps {
  autoRefresh?: boolean
  refreshInterval?: number
}

export default function HospitalList({ autoRefresh = false, refreshInterval = 30000 }: HospitalListProps) {
  const { hospitals, loading, error } = useHospitals({ 
    autoRefresh, 
    refreshInterval 
  })

  // Mock data for demonstration when API is not available
  const mockHospitals: Hospital[] = [
    {
      id: '1',
      name: 'Hospital Municipal de Barueri Dr. Francisco Moran',
      waitTime: 5,
      address: 'Rua Angela Mirella, 354 - Jardim Barueri',
      phone: '(11) 4199-3000'
    },
    {
      id: '2',
      name: 'Hospital Municipal de Barueri Dr. Francisco Moran',
      waitTime: 5,
      address: 'Rua Angela Mirella, 354 - Jardim Barueri',
      phone: '(11) 4199-3000'
    },
    {
      id: '3',
      name: 'Hospital Municipal de Barueri Dr. Francisco Moran',
      waitTime: 5,
      address: 'Rua Angela Mirella, 354 - Jardim Barueri',
      phone: '(11) 4199-3000'
    },
    {
      id: '4',
      name: 'Hospital Municipal de Barueri Dr. Francisco Moran',
      waitTime: 5,
      address: 'Rua Angela Mirella, 354 - Jardim Barueri',
      phone: '(11) 4199-3000'
    },
    {
      id: '5',
      name: 'Hospital Municipal de Barueri Dr. Francisco Moran',
      waitTime: 5,
      address: 'Rua Angela Mirella, 354 - Jardim Barueri',
      phone: '(11) 4199-3000'
    },
    {
      id: '6',
      name: 'Hospital Municipal de Barueri Dr. Francisco Moran',
      waitTime: 5,
      address: 'Rua Angela Mirella, 354 - Jardim Barueri',
      phone: '(11) 4199-3000'
    },
    {
      id: '7',
      name: 'Hospital Municipal de Barueri Dr. Francisco Moran',
      waitTime: 5,
      address: 'Rua Angela Mirella, 354 - Jardim Barueri',
      phone: '(11) 4199-3000'
    },
    {
      id: '8',
      name: 'Hospital Municipal de Barueri Dr. Francisco Moran',
      waitTime: 5,
      address: 'Rua Angela Mirella, 354 - Jardim Barueri',
      phone: '(11) 4199-3000'
    },
    {
      id: '9',
      name: 'Hospital Municipal de Barueri Dr. Francisco Moran',
      waitTime: 5,
      address: 'Rua Angela Mirella, 354 - Jardim Barueri',
      phone: '(11) 4199-3000'
    },
    {
      id: '10',
      name: 'Hospital Municipal de Barueri Dr. Francisco Moran',
      waitTime: 5,
      address: 'Rua Angela Mirella, 354 - Jardim Barueri',
      phone: '(11) 4199-3000'
    },
    {
      id: '11',
      name: 'Hospital Municipal de Barueri Dr. Francisco Moran',
      waitTime: 5,
      address: 'Rua Angela Mirella, 354 - Jardim Barueri',
      phone: '(11) 4199-3000'
    },
    {
      id: '12',
      name: 'Hospital Municipal de Barueri Dr. Francisco Moran',
      waitTime: 5,
      address: 'Rua Angela Mirella, 354 - Jardim Barueri',
      phone: '(11) 4199-3000'
    }
  ]

  // Use mock data if API fails or no hospitals are returned
  const displayHospitals = hospitals.length > 0 ? hospitals : mockHospitals

  const handleLearnMore = (hospitalId: string) => {
    const hospital = displayHospitals.find(h => h.id === hospitalId)
    if (hospital) {
      console.log('Learn more about hospital:', hospital)
      // Here you can implement navigation to hospital details page
      // or open a modal with more information
      alert(`Mais informações sobre: ${hospital.name}`)
    }
  }

  if (loading) {
    return (
      <div className="hospital-list-container">
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Carregando hospitais...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="hospital-list-container">
      <div className="hospital-header">
        <button className="close-btn" type="button">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>

      {error && (
        <div className="error-message">
          <p>{error}</p>
        </div>
      )}

      <div className="hospital-list">
        {displayHospitals.map((hospital) => (
          <HospitalCard
            key={hospital.id}
            id={hospital.id}
            name={hospital.name}
            waitTime={hospital.waitTime}
            onLearnMore={handleLearnMore}
          />
        ))}
      </div>

      {displayHospitals.length === 0 && !loading && (
        <div className="empty-state">
          <p>Nenhum hospital encontrado.</p>
        </div>
      )}
    </div>
  )
}
