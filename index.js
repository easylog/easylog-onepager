
import '@/styles/globals.css'
import { useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Mail } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f9fafb] text-gray-800 p-6 md:p-16 font-sans">
      <div className="max-w-4xl mx-auto space-y-12">
        <header className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-[#2b4c7e]">EasyLog</h1>
          <p className="text-lg text-gray-600">Dokumentation & Kommunikation einfach gemacht – speziell für soziale Institutionen</p>
        </header>

        <section className="grid md:grid-cols-3 gap-6">
          <Card className="bg-white shadow-md rounded-2xl">
            <CardContent className="p-6 space-y-4">
              <h2 className="text-xl font-semibold text-[#2b4c7e]">Zeitsparende Dokumentation</h2>
              <p>Schnelle Sprachaufnahme und KI-gestützte Umwandlung in professionelle Texte.</p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-md rounded-2xl">
            <CardContent className="p-6 space-y-4">
              <h2 className="text-xl font-semibold text-[#2b4c7e]">ChangeBoard für Teams</h2>
              <p>Alle Veränderungen zentral sammeln und für Kolleg:innen sichtbar machen – ideal bei Teilzeitmodellen.</p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-md rounded-2xl">
            <CardContent className="p-6 space-y-4">
              <h2 className="text-xl font-semibold text-[#2b4c7e]">Kommunikation vereinfachen</h2>
              <p>Automatische Textvorschläge für Mails und Rückmeldungen an Auftraggeber.</p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
