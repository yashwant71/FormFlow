import { Button } from '@/components/ui/button'
import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen min-w-full bg-background max-h-screen h-screen">
        <div className="flex w-full h-full flex-col items-center justify-center gap-4">
        <h2 className="text-destructive text-4xl">404 Page Not Found !</h2>
        <Button asChild>
            <Link href={"/"}>Go back to home</Link>
        </Button>
        </div>
    </div>
  )
}