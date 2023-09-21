import { UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button"

export default function DashboardPage() {
  return (

    <div>
        <p className="text-6xl text-green-500"> DashBoard Page (Protected)</p>
        <Button variant="destructive">Button</Button>
        <UserButton afterSignOutUrl="/"/>
    </div>

  )
}
