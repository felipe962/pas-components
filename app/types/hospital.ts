export interface Hospital {
  id: string
  name: string
  waitTime: number
  address?: string
  phone?: string
  specialties?: string[]
  latitude?: number
  longitude?: number
  capacity?: number
  currentOccupancy?: number
  emergencyServices?: boolean
  lastUpdated?: string
}

export interface ApiResponse<T> {
  data: T
  success: boolean
  message?: string
  timestamp?: string
}

export interface HospitalApiResponse extends ApiResponse<Hospital[]> {}

export interface HospitalDetailsApiResponse extends ApiResponse<Hospital> {}
