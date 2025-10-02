import { Hospital, HospitalApiResponse, HospitalDetailsApiResponse } from '../types/hospital'

class HospitalService {
  private baseUrl: string
  
  constructor(baseUrl: string = '/api') {
    this.baseUrl = baseUrl
  }

  async getHospitals(): Promise<Hospital[]> {
    try {
      const response = await fetch(`${this.baseUrl}/hospitals`)
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const result: HospitalApiResponse = await response.json()
      
      if (!result.success) {
        throw new Error(result.message || 'Failed to fetch hospitals')
      }
      
      return result.data
    } catch (error) {
      console.error('Error fetching hospitals:', error)
      throw error
    }
  }

  async getHospitalById(id: string): Promise<Hospital> {
    try {
      const response = await fetch(`${this.baseUrl}/hospitals/${id}`)
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const result: HospitalDetailsApiResponse = await response.json()
      
      if (!result.success) {
        throw new Error(result.message || 'Failed to fetch hospital details')
      }
      
      return result.data
    } catch (error) {
      console.error('Error fetching hospital details:', error)
      throw error
    }
  }

  async updateHospitalWaitTime(id: string, waitTime: number): Promise<Hospital> {
    try {
      const response = await fetch(`${this.baseUrl}/hospitals/${id}/wait-time`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ waitTime }),
      })
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const result: HospitalDetailsApiResponse = await response.json()
      
      if (!result.success) {
        throw new Error(result.message || 'Failed to update wait time')
      }
      
      return result.data
    } catch (error) {
      console.error('Error updating wait time:', error)
      throw error
    }
  }

  async searchHospitals(query: string): Promise<Hospital[]> {
    try {
      const response = await fetch(`${this.baseUrl}/hospitals/search?q=${encodeURIComponent(query)}`)
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const result: HospitalApiResponse = await response.json()
      
      if (!result.success) {
        throw new Error(result.message || 'Failed to search hospitals')
      }
      
      return result.data
    } catch (error) {
      console.error('Error searching hospitals:', error)
      throw error
    }
  }
}

export const hospitalService = new HospitalService()
export default HospitalService
