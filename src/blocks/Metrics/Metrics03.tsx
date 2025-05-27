'use client'
import React from 'react'
import type { MetricsBlock as MetricsBlockProps } from '@/payload-types'

import { cn } from '@/utilities/ui'

export const Metrics03: React.FC<MetricsBlockProps> = ({ table, enableLogos, logos }) => {
  const renderTable = () => {
    if (!table) return null

    // Handle different types of table data
    if (typeof table === 'string') {
      try {
        const parsedTable = JSON.parse(table)
        return renderTableFromData(parsedTable)
      } catch (error) {
        console.error('Failed to parse table JSON:', error)
        return <p className="text-destructive">Invalid table data format</p>
      }
    }

    if (Array.isArray(table)) {
      return renderTableFromData(table)
    }

    if (typeof table === 'object') {
      return renderTableFromData(table)
    }

    return <p className="text-muted-foreground">No table data available</p>
  }

  const renderTableFromData = (data: any) => {
    // If it's an array of objects (rows)
    if (Array.isArray(data) && data.length > 0) {
      const firstRow = data[0]
      const headers = Object.keys(firstRow)

      return (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-border border-b">
                {headers.map((header, index) => (
                  <th
                    key={index}
                    className="text-foreground px-4 py-3 text-left text-sm font-semibold"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row: any, rowIndex: number) => (
                <tr key={rowIndex} className="border-border/50 border-b">
                  {headers.map((header, cellIndex) => (
                    <td key={cellIndex} className="text-muted-foreground px-4 py-3 text-sm">
                      {row[header]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    }

    // If it's an object with rows/columns structure
    if (typeof data === 'object' && data.rows) {
      return (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            {data.headers && (
              <thead>
                <tr className="border-border border-b">
                  {data.headers.map((header: string, index: number) => (
                    <th
                      key={index}
                      className="text-foreground px-4 py-3 text-left text-sm font-semibold"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
            )}
            <tbody>
              {data.rows.map((row: any[], rowIndex: number) => (
                <tr key={rowIndex} className="border-border/50 border-b">
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex} className="text-muted-foreground px-4 py-3 text-sm">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    }

    return <p className="text-muted-foreground">Unsupported table format</p>
  }

  return (
    <div className="py-xl container">
      <div className="border-border bg-card rounded-lg border shadow-sm">{renderTable()}</div>

      {enableLogos && logos && logos.length > 0 && (
        <div className="mt-xl">
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
            {logos.map((logo, index) => {
              if (typeof logo === 'string') return null
              return (
                <div key={logo.id || index} className="h-8">
                  <img
                    src={logo.url || ''}
                    alt={logo.alt}
                    className="h-full w-auto object-contain"
                  />
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
