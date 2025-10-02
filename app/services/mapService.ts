// Map Service for API Integration
// This service can be used to integrate with any map provider (Google Maps, Mapbox, etc.)

export interface MapMarker {
  id: string
  lat: number
  lng: number
  title: string
  type: 'hospital' | 'clinic' | 'emergency'
  color?: string
}

export interface MapConfig {
  apiKey: string
  center: { lat: number; lng: number }
  zoom: number
  style?: string
}

class MapService {
  private apiKey: string = ''
  private mapInstance: any = null
  
  constructor(apiKey?: string) {
    this.apiKey = apiKey || process.env.NEXT_PUBLIC_MAP_API_KEY || ''
  }

  // Initialize map with Google Maps API
  async initGoogleMaps(containerElement: HTMLElement, config: MapConfig) {
    if (!window.google) {
      console.error('Google Maps API not loaded')
      return null
    }

    const mapOptions = {
      center: config.center,
      zoom: config.zoom,
      styles: config.style ? JSON.parse(config.style) : undefined
    }

    this.mapInstance = new window.google.maps.Map(containerElement, mapOptions)
    return this.mapInstance
  }

  // Add markers to the map
  addMarkers(markers: MapMarker[]) {
    if (!this.mapInstance || !window.google) return

    markers.forEach(marker => {
      const markerInstance = new window.google.maps.Marker({
        position: { lat: marker.lat, lng: marker.lng },
        map: this.mapInstance,
        title: marker.title,
        icon: this.getMarkerIcon(marker.type, marker.color)
      })

      // Add click listener
      markerInstance.addListener('click', () => {
        console.log('Marker clicked:', marker)
      })
    })
  }

  // Get marker icon based on type
  private getMarkerIcon(type: string, color?: string) {
    const colors = {
      hospital: '#dc2626',
      clinic: '#2563eb',
      emergency: '#f59e0b'
    }

    return {
      path: window.google.maps.SymbolPath.CIRCLE,
      fillColor: color || colors[type] || '#2563eb',
      fillOpacity: 1,
      strokeColor: '#ffffff',
      strokeWeight: 2,
      scale: 8
    }
  }

  // Load Google Maps script
  static loadGoogleMapsScript(apiKey: string): Promise<void> {
    return new Promise((resolve, reject) => {
      if (window.google) {
        resolve()
        return
      }

      const script = document.createElement('script')
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`
      script.async = true
      script.defer = true
      script.onload = () => resolve()
      script.onerror = () => reject(new Error('Failed to load Google Maps'))
      document.head.appendChild(script)
    })
  }
}

// Extend window interface for Google Maps
declare global {
  interface Window {
    google: any
  }
}

export default MapService
