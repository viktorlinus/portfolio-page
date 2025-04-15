import { redirect } from 'next/navigation'

export default function RootPage() {
  // För besökare, omdirigera till standardspråket (svenska)
  redirect('/sv')
}