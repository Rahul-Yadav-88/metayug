"use client"

import { usePathname } from "next/navigation"
import Preloader from "../components/Preloder"

export default function RoutePreloader() {
  const pathname = usePathname()

  return <Preloader key={pathname} />
}
