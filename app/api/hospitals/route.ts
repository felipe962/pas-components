import { NextRequest, NextResponse } from 'next/server'
import { Hospital } from '../../types/hospital'

// Mock data for demonstration
const mockHospitals: Hospital[] = [
  {
    id: '1',
    name: 'Hospital Municipal de Barueri Dr. Francisco Moran',
    waitTime: 5,
    address: 'Rua Angela Mirella, 354 - Jardim Barueri',
    phone: '(11) 4199-3000',
    specialties: ['Emergência', 'Clínica Geral', 'Pediatria'],
    latitude: -23.5505,
    longitude: -46.6333,
    capacity: 100,
    currentOccupancy: 75,
    emergencyServices: true,
    lastUpdated: new Date().toISOString()
  },
  {
    id: '2',
    name: 'Hospital Municipal de Barueri Dr. Francisco Moran',
    waitTime: 8,
    address: 'Rua Angela Mirella, 354 - Jardim Barueri',
    phone: '(11) 4199-3000',
    specialties: ['Emergência', 'Clínica Geral'],
    latitude: -23.5505,
    longitude: -46.6333,
    capacity: 80,
    currentOccupancy: 60,
    emergencyServices: true,
    lastUpdated: new Date().toISOString()
  },
  {
    id: '3',
    name: 'Hospital Municipal de Barueri Dr. Francisco Moran',
    waitTime: 12,
    address: 'Rua Angela Mirella, 354 - Jardim Barueri',
    phone: '(11) 4199-3000',
    specialties: ['Emergência', 'Ortopedia'],
    latitude: -23.5505,
    longitude: -46.6333,
    capacity: 120,
    currentOccupancy: 95,
    emergencyServices: true,
    lastUpdated: new Date().toISOString()
  }
]

export async function GET(request: NextRequest) {
  try {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500))

    // Get search query if provided
    const { searchParams } = new URL(request.url)
    const query = searchParams.get('q')

    let hospitals = mockHospitals

    // Filter by search query if provided
    if (query) {
      hospitals = mockHospitals.filter(hospital =>
        hospital.name.toLowerCase().includes(query.toLowerCase()) ||
        hospital.address?.toLowerCase().includes(query.toLowerCase()) ||
        hospital.specialties?.some(specialty =>
          specialty.toLowerCase().includes(query.toLowerCase())
        )
      )
    }

    return NextResponse.json({
      success: true,
      data: hospitals,
      message: 'Hospitals retrieved successfully',
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    console.error('Error fetching hospitals:', error)
    return NextResponse.json(
      {
        success: false,
        data: [],
        message: 'Internal server error',
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    )
  }
}
