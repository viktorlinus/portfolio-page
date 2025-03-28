"use client"

import { useEffect, useRef, useState } from 'react'

interface UseEqualHeightProps {
  enabled: boolean
  rowSelector: string
}

export const useEqualHeight = ({ enabled = true, rowSelector }: UseEqualHeightProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [rowHeights, setRowHeights] = useState<Record<string, number>>({})

  useEffect(() => {
    if (!enabled || !containerRef.current) return

    const equalizeHeights = () => {
      if (!containerRef.current) return

      // Reset any previously set heights
      const items = containerRef.current.querySelectorAll(rowSelector)
      items.forEach(item => {
        (item as HTMLElement).style.height = 'auto'
      })

      // Group items by their row
      const rows: Record<number, HTMLElement[]> = {}
      items.forEach(item => {
        const element = item as HTMLElement
        const top = element.getBoundingClientRect().top
        if (!rows[top]) rows[top] = []
        rows[top].push(element)
      })

      // Set heights for each row
      const newRowHeights: Record<string, number> = {}
      Object.keys(rows).forEach(topPosition => {
        const rowItems = rows[Number(topPosition)]
        const maxHeight = Math.max(...rowItems.map(el => el.scrollHeight))
        
        rowItems.forEach(item => {
          item.style.height = `${maxHeight}px`
        })
        
        newRowHeights[topPosition] = maxHeight
      })

      setRowHeights(newRowHeights)
    }

    // Initialize
    equalizeHeights()

    // Re-run on resize
    const handleResize = () => {
      equalizeHeights()
    }

    // Listen for height changes from children
    const handleHeightChange = () => {
      // Debounce to avoid multiple rapid calls
      if (window.requestAnimationFrame) {
        window.requestAnimationFrame(() => {
          equalizeHeights()
        })
      } else {
        setTimeout(equalizeHeights, 16) // ~60fps
      }
    }

    window.addEventListener('resize', handleResize)
    document.addEventListener('heightchange', handleHeightChange)
    
    return () => {
      window.removeEventListener('resize', handleResize)
      document.removeEventListener('heightchange', handleHeightChange)
    }
  }, [enabled, rowSelector])

  return { containerRef, rowHeights }
}
