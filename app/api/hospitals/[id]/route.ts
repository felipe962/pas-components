import { NextRequest, NextResponse } from 'next/server'
import { Hospital } from '../../../types/hospital'

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
  }
]

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300))

    const hospital = mockHospitals.find(h => h.id === id)

    if (!hospital) {
      return NextResponse.json(
        {
          success: false,
          data: null,
          message: 'Hospital not found',
          timestamp: new Date().toISOString()
        },
        { status: 404 }
      )
    }

    return NextResponse.json({
      success: true,
      data: hospital,
      message: 'Hospital retrieved successfully',
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    console.error('Error fetching hospital:', error)
    return NextResponse.json(
      {
        success: false,
        data: null,
        message: 'Internal server error',
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    )
  }
}
