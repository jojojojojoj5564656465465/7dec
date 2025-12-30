import type { APIRoute } from 'astro'

// Données structurées pour les outils d'IA
const aiData = {
  "@context": "https://schema.org",
  "@type": "AIDataFeed",
  "provider": {
    "@type": "Organization",
    "name": "Visite Virtuelle Photography",
    "url": "https://visite-virtuelle.photography/",
    "logo": "https://visite-virtuelle.photography/favicon.svg",
    "description": "Photographe professionnel spécialisé dans les visites virtuelles 360° pour entreprises et biens immobiliers",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+33670755094",
      "contactType": "Customer Service",
      "areaServed": "FR"
    }
  },
  "dataset": {
    "@type": "Dataset",
    "name": "Visite Virtuelle Photography - Services Data",
    "description": "Données structurées sur les services de photographie 360° et visites virtuelles",
    "license": "https://creativecommons.org/licenses/by-nc-nd/4.0/",
    "dateModified": "2025-12-30",
    "keywords": ["photographie 360", "visite virtuelle", "photographe professionnel", "google street view", "immobilier", "restaurant", "hôtel"],
    "spatialCoverage": {
      "@type": "Place",
      "name": "France",
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 48.6807824,
        "longitude": 2.5026636
      }
    }
  },
  "services": [
    {
      "@type": "Service",
      "name": "Visite Virtuelle 360°",
      "description": "Création de visites virtuelles immersives pour votre entreprise",
      "category": "Photography",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "EUR",
        "price": "490",
        "availability": "https://schema.org/InStock"
      }
    },
    {
      "@type": "Service",
      "name": "Photographie Immobilière",
      "description": "Photos professionnelles pour la vente ou location de biens immobiliers",
      "category": "RealEstate",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "EUR",
        "price": "290",
        "availability": "https://schema.org/InStock"
      }
    },
    {
      "@type": "Service",
      "name": "Google Street View Trusted",
      "description": "Photographe certifié Google pour les visites virtuelles Street View",
      "category": "DigitalMarketing",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "EUR",
        "price": "590",
        "availability": "https://schema.org/InStock"
      }
    }
  ],
  "contentPages": [
    {
      "url": "https://visite-virtuelle.photography/",
      "title": "Accueil",
      "description": "Page principale du site",
      "priority": 0.5,
      "lastModified": "2025-12-30"
    },
    {
      "url": "https://visite-virtuelle.photography/tarif",
      "title": "Tarifs",
      "description": "Grille tarifaire des services",
      "priority": 0.4,
      "lastModified": "2025-12-30"
    },
    {
      "url": "https://visite-virtuelle.photography/exemple",
      "title": "Exemples",
      "description": "Galerie d'exemples de travaux",
      "priority": 0.3,
      "lastModified": "2025-12-30"
    }
  ],
  "businessCategories": [
    {
      "name": "Bars",
      "url": "https://visite-virtuelle.photography/bars",
      "description": "Visites virtuelles pour bars et cafés"
    },
    {
      "name": "Boulangeries",
      "url": "https://visite-virtuelle.photography/boulangerie",
      "description": "Visites virtuelles pour boulangeries"
    },
    {
      "name": "Écoles",
      "url": "https://visite-virtuelle.photography/ecole",
      "description": "Visites virtuelles pour établissements scolaires"
    },
    {
      "name": "Hôtels",
      "url": "https://visite-virtuelle.photography/hotel",
      "description": "Visites virtuelles pour hôtels et hébergements"
    },
    {
      "name": "Immobilier",
      "url": "https://visite-virtuelle.photography/immobilier",
      "description": "Visites virtuelles pour agences immobilières"
    },
    {
      "name": "Restaurants",
      "url": "https://visite-virtuelle.photography/restaurant",
      "description": "Visites virtuelles pour restaurants"
    },
    {
      "name": "Salles de sport",
      "url": "https://visite-virtuelle.photography/salles-de-sport",
      "description": "Visites virtuelles pour salles de sport"
    }
  ],
  "updateFrequency": "yearly",
  "lastUpdated": "2025-12-30T00:00:00Z",
  "version": "1.0"
}

export const GET: APIRoute = () => {
  return new Response(JSON.stringify(aiData, null, 2), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=86400', // Cache for 24 hours
      'AI-Data-Version': '1.0',
      'AI-Content-Type': 'business-services',
      'AI-License': 'CC-BY-NC-ND-4.0'
    }
  })
}