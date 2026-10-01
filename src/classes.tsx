import { useEffect } from 'react'

export function meta() {
  return [{ title: 'Classes | Westend Wellness' }]
}

export default function Classes() {
  useEffect(() => {
    const script = document.createElement('script')
    script.async = true
    script.type = 'module'
    script.src = 'https://momence.com/plugin/host-schedule/host-schedule.js'
    script.setAttribute('host_id', '310814')
    script.setAttribute('teacher_ids', '[]')
    script.setAttribute('location_ids', '[]')
    script.setAttribute('tag_ids', '[]')
    script.setAttribute('default_filter', 'show-all')
    script.setAttribute('locale', 'en')
    document.body.appendChild(script)

    return () => {
      script.remove()
    }
  }, [])

  return <div id="ribbon-schedule"></div>
}
