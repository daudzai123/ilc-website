"use client";

import React, { useEffect, useRef } from 'react';
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { fromLonLat } from 'ol/proj';
import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon';

import site from '../data/site.json';

export default function OpenLayersMap() {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const mapObj = useRef<Map | null>(null);

  useEffect(() => {
    const { location } = site as any;
    if (!location || !mapRef.current) return;

    const center = fromLonLat([location.lng, location.lat]);

    // Create marker
    const marker = new Feature({
      geometry: new Point(center),
    });

    marker.setStyle(
      new Style({
        image: new Icon({
          src: '/images/marker.svg',
          anchor: [0.5, 1],
          scale: 1,
        }),
      })
    );

    // Create vector layer
    const vectorSource = new VectorSource({ features: [marker] });
    const vectorLayer = new VectorLayer({ source: vectorSource });

    // Initialize map
    mapObj.current = new Map({
      target: mapRef.current,
      layers: [new TileLayer({ source: new OSM() }), vectorLayer],
      view: new View({
        center,
        zoom: 15,
      }),
      controls: [],
    });

    // Ensure map resizes properly
    setTimeout(() => {
      mapObj.current?.updateSize();
    }, 200);

    // Clean up on unmount
    return () => {
      mapObj.current?.setTarget(undefined); // ✅ fix TypeScript error
    };
  }, []);

  const { location } = site as any;
  const osmUrl = location
    ? `https://www.openstreetmap.org/?mlat=${location.lat}&mlon=${location.lng}#map=18/${location.lat}/${location.lng}`
    : undefined;

  return (
    <div>
      <div
        ref={mapRef}
        className="w-full h-64 rounded-md overflow-hidden"
        style={{ border: '1px solid #e5e7eb' }}
      />
      {osmUrl && (
        <div className="mt-2 text-sm">
          <a
            href={osmUrl}
            target="_blank"
            rel="noreferrer"
            className="text-ilc-primary hover:underline"
          >
            Open in OpenStreetMap
          </a>
        </div>
      )}
    </div>
  );
}
