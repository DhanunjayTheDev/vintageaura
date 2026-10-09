import Eyebrow from '../components/Eyebrow'
import Button from '../components/Button'

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-6 pt-20">
      <div>
        <Eyebrow center>Error 404</Eyebrow>
        <h1 className="font-display text-6xl md:text-7xl mt-4 mb-6">Page Not Found</h1>
        <p className="text-muted max-w-md mx-auto mb-10">
          The page you’re looking for has either moved, or never existed — much like a perfectly kept secret.
        </p>
        <Button to="/" variant="solid" className="inline-flex">
          Return Home
        </Button>
      </div>
    </section>
  )
}
