"use client"
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { AvatarImage } from "@radix-ui/react-avatar";
import { FaDownload, FaPencil } from "react-icons/fa6";

 
const TABLE_HEAD = ["Transaction", "Amount", "Date", "Status", "Account", ""];
 
const TABLE_ROWS = [
  {
    img: "https://docs.material-tailwind.com/img/logos/logo-spotify.svg",
    name: "Spotify",
    amount: "$2,500",
    date: "Wed 3:00pm",
    status: "paid",
    account: "visa",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    img: "https://docs.material-tailwind.com/img/logos/logo-amazon.svg",
    name: "Amazon",
    amount: "$5,000",
    date: "Wed 1:00pm",
    status: "paid",
    account: "master-card",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    img: "https://docs.material-tailwind.com/img/logos/logo-pinterest.svg",
    name: "Pinterest",
    amount: "$3,400",
    date: "Mon 7:40pm",
    status: "pending",
    account: "master-card",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    img: "https://docs.material-tailwind.com/img/logos/logo-google.svg",
    name: "Google",
    amount: "$1,000",
    date: "Wed 5:00pm",
    status: "paid",
    account: "visa",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    img: "https://docs.material-tailwind.com/img/logos/logo-netflix.svg",
    name: "netflix",
    amount: "$14,000",
    date: "Wed 3:30am",
    status: "cancelled",
    account: "visa",
    accountNumber: "1234",
    expiry: "06/2026",
  },
];
 
export default function Payments() {
  return (
    <Card className="h-full w-full">
      <CardHeader  className="rounded-none">
        <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <h5 className="text-gray-500">
              Recent Transactions
            </h5>
            <p  className="mt-1 font-normal text-gray-300">
              These are details about the last transactions
            </p>
          </div>
          <div className="flex w-full shrink-0 gap-2 md:w-max">
            <div className="w-full md:w-72">
              <Input
                
                
              />
            </div>
            <Button className="flex items-center gap-3" size="sm">
              <FaDownload/> Download
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="overflow-scroll px-0">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                >
                  <span
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map(
              (
                {
                  img,
                  name,
                  amount,
                  date,
                  status,
                  account,
                  accountNumber,
                  expiry,
                },
                index,
              ) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";
 
                return (
                  <tr key={name}>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <Avatar
                        
                          className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
                        >
                          <AvatarImage src={img} />
                          <AvatarFallback>{img}</AvatarFallback>
                          </Avatar>
                        <span
                          className="font-bold"
                        >
                          {name}
                        </span>
                      </div>
                    </td>
                    <td className={classes}>
                      <span
                        className="font-normal"
                      >
                        {amount}
                      </span>
                    </td>
                    <td className={classes}>
                      <span
                        className="font-normal"
                      >
                        {date}
                      </span>
                    </td>
                    <td className={classes}>
                      <div className="w-max">
                        <Badge
                          
                          variant="outline"
                         
                          className={
                            status === "paid"
                              ? "text-green-500"
                              : status === "pending"
                              ? "text-amber-500"
                              : "text-red-500"
                          }
                        >
                           status
                          </Badge>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <div className="h-9 w-12 rounded-md border border-blue-gray-50 p-1">
                          <Avatar>
                            <AvatarFallback>MM</AvatarFallback>
                            <AvatarImage src={
                              account === "visa"
                                ? "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/logos/visa.png"
                                : "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/logos/mastercard.png"
                            }

                            />
                          </Avatar>
                            
                           
                        </div>
                        <div className="flex flex-col">
                          <span
                            className="font-normal capitalize"
                          >
                            {account.split("-").join(" ")} {accountNumber}
                          </span>
                          <span
                           
                            className="font-normal opacity-70"
                          >
                            {expiry}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className={classes}>
                      
                        <span>
                          <FaPencil className="h-4 w-4" />
                        </span>
                      
                    </td>
                  </tr>
                );
              },
            )}
          </tbody>
        </table>
      </CardContent>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Button  size="sm">
          Previous
        </Button>
        <div className="flex items-center gap-2">
          <span>
            1
          </span>
          <span>
            2
          </span>
          <span>
            3
          </span>
          <span>
            ...
          </span>
          <span>
            8
          </span>
          <span>
            9
          </span>
          <span>
            10
          </span>
        </div>
        <Button  size="sm">
          Next
        </Button>
      </CardFooter>
    </Card>
  );
}