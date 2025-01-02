import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"

interface User {
  name: string
  username: string
  email: string
  phone: string
  website: string
  company: {
    name: string
    catchPhrase: string
    bs: string
  }
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
  }
}

interface UserDetailsProps {
  user: User | undefined
}

export function UserDetails({ user }: UserDetailsProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link" className="whitespace-nowrap">View Details</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{user ? user.name : <Skeleton className="h-6 w-[200px]" />}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {user ? (
            <>
              <div className="grid grid-cols-4 items-center gap-4">
                <span className="font-bold">Username:</span>
                <span className="col-span-3">{user.username}</span>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <span className="font-bold">Email:</span>
                <span className="col-span-3 break-all">{user.email}</span>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <span className="font-bold">Phone:</span>
                <span className="col-span-3">{user.phone}</span>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <span className="font-bold">Website:</span>
                <span className="col-span-3 break-all">{user.website}</span>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <span className="font-bold">Company:</span>
                <span className="col-span-3">{user.company.name}</span>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <span className="font-bold">Address:</span>
                <span className="col-span-3">
                  {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}
                </span>
              </div>
            </>
          ) : (
            <>
              {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="grid grid-cols-4 items-center gap-4">
                  <Skeleton className="h-4 w-[50px]" />
                  <Skeleton className="h-4 w-full col-span-3" />
                </div>
              ))}
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

