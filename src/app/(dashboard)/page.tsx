"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Ellipsis } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

const mockData = [
  {
    id: 1,
    title: "Project A",
    duration: "3 months",
    resources: "5 people",
    status: "Active",
  },
  {
    id: 2,
    title: "Project B",
    duration: "6 months",
    resources: "10 people",
    status: "Pending",
  },
  {
    id: 3,
    title: "Project C",
    duration: "1 year",
    resources: "15 people",
    status: "Completed",
  },
  {
    id: 4,
    title: "Project D",
    duration: "2 years",
    resources: "20 people",
    status: "Active",
  },
  {
    id: 5,
    title: "Project E",
    duration: "3 years",
    resources: "25 people",
    status: "Active",
  },
];

type Product = {
  id: number;
  title: string;
  duration: string;
  resources: string;
  status: string;
};

const Dashboard = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [editedTitle, setEditedTitle] = useState("");

  return (
    <div className="space-y-4 space-x-2">
      <main>
        <div className="mb-2 flex items-center justify-between space-y-2">
          <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
          <div className="flex items-center space-x-2">
            <Dialog>
              <DialogTrigger>
                <Button className=" bg-purple">Add Project</Button>
              </DialogTrigger>
              <DialogContent className="bg-white p-5">
                <DialogHeader>
                  <DialogTitle>Create Project</DialogTitle>
                  <DialogDescription>
                    here you can create a new project by filling the form below
                  </DialogDescription>
                </DialogHeader>
                <form>
                  <div className="space-y-2">
                    <Label>Title</Label>
                    <Input
                      type="text"
                      placeholder="Enter project title"
                      onChange={(e) => setEditedTitle(e.target.value)}
                      value={editedTitle}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Duration</Label>
                    <Input type="text" placeholder="Enter project duration" />
                  </div>
                  <div className="space-y-2">
                    <Label>Resources Required</Label>
                    <Input type="text" placeholder="Enter resources required" />
                  </div>
                  <div className="space-y-2">
                    <Label>Status</Label>
                    <Input type="text" placeholder="Enter project status" />
                  </div>

                  <DialogFooter className="flex justify-end">
                    <Button className="bg-purple">Save</Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        <Tabs
          orientation="vertical"
          defaultValue="overview"
          className="space-y-4"
        >
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Card className="bg-white hover:border-purple">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total Revenue
                  </CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 "
                  >
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">50,890DA</div>
                  <p className="text-xs  text-green-200">
                    +10.1% from last month
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white hover:border-purple">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Orders</CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-muted-foreground"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+150</div>
                  <p className="text-xs text-red-200">-5.1% from last month</p>
                </CardContent>
              </Card>
              <Card className="bg-white hover:border-purple">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Sales</CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-muted-foreground"
                  >
                    <rect width="20" height="14" x="2" y="5" rx="2" />
                    <path d="M2 10h20" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+2,234</div>
                  <p className="text-xs text-red-200">-2% from last month</p>
                </CardContent>
              </Card>
              <Card className="bg-white hover:border-purple">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Active Now
                  </CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-muted-foreground"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+13</div>
                  <p className="text-xs text-orange-200">+4% since last week</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
      <Table className="bg-white px-5 py-6 mt-5">
        <TableHeader>
          <TableRow>
            <TableHead>Id</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Duration</TableHead>
            <TableHead>Resources Required</TableHead>
            <TableHead>Status</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockData.map((product) => (
            <TableRow key={product.id}>
              <TableCell>{product.id}</TableCell>
              <TableCell>{product.title}</TableCell>
              <TableCell>{product.duration}</TableCell>
              <TableCell>{product.resources}</TableCell>
              <TableCell>
                <Badge
                  className={`${product.status === "Active" ? "bg-green-200" : product.status === "Completed" ? "bg-orange-200" : "bg-red-200"}`}
                >
                  {product.status}
                </Badge>
              </TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Ellipsis />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>lunch</DropdownMenuItem>
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem className="text-red-200">
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Dashboard;
