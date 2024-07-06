import performanceImage from 'public/performance.jpg'
import Hero from '@/components/hero'

export default function PerformancePage () {
    return (
        <Hero imgData={performanceImage} imgAlt="perfromance" title="Boost Your Performace"/>
    )
}