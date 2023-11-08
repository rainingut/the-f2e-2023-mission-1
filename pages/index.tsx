import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '@/components/layout/layout'
import Home from './home'

const inter = Inter({ subsets: ['latin'] })

export default function Index() {
  return (<><Home /></>)
}
