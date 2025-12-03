import Link from "next/link";

export const metadata = {
  title: 'About DJ Events',
  description: 'Learn more about us at My Site',
  openGraph: { //Shared links on social media (FB, LinkedIn, WhatsApp preview)
    title: 'About Us | My Site',
    description: 'Learn more about us at My Site',
  }
}

export default function AboutPage() {
  return (
    <div>
        <h1>About</h1>
        <p>This is an app to find the lastest DJ and other musical events</p>
        <p>Version: 1.0.0</p>
        <Link href="/">Home</Link>
    </div>
  )
}
