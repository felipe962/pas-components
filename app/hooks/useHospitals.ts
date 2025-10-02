'use client'

import { useState, useEffect, useCallback } from 'react'
import { Hospital } from '../types/hospital'
import { hospitalService } from '../services/hospitalService'

interface UseHospitalsOptions {
  autoRefresh?: boolean
  refreshInterval?: number
}

interface UseHospitalsReturn {
  hospitals: Hospital[]
  loading: boolean
  error: string | null
  refresh: () => Promise<void>
  searchHospitals: (query: string) => Promise<void>
}

export function useHospitals(options: UseHospitalsOptions = {}): UseHospitalsReturn {
  const { autoRefresh = false, refreshInterval = 30000 } = options
  
  const [hospitals, setHospitals] = useState<Hospital[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchHospitals = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)
      const data = await hospitalService.getHospitals()
      setHospitals(data)
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Erro desconhecido'
      setError('API não disponível. Usando dados de exemplo.')
      console.error('Error fetching hospitals:', err)
      // Set empty array so component can use mock data
      setHospitals([])
    } finally {
      setLoading(false)
    }
  }, [])

  const searchHospitals = useCallback(async (query: string) => {
    try {
      setLoading(true)
      setError(null)
      const data = await hospitalService.searchHospitals(query)
      setHospitals(data)
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Erro na busca'
      setError(errorMessage)
      console.error('Error searching hospitals:', err)
    } finally {
      setLoading(false)
    }
  }, [])

  const refresh = useCallback(async () => {
    await fetchHospitals()
  }, [fetchHospitals])

  useEffect(() => {
    fetchHospitals()
  }, [fetchHospitals])

  useEffect(() => {
    if (autoRefresh && refreshInterval > 0) {
      const interval = setInterval(fetchHospitals, refreshInterval)
      return () => clearInterval(interval)
    }
  }, [autoRefresh, refreshInterval, fetchHospitals])

  return {
    hospitals,
    loading,
    error,
    refresh,
    searchHospitals,
  }
}
