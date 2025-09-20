"use client"

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MDEditorWrapper } from "./app-md-editor";
import { useState } from "react";

export function AppCardNewPost() {
  const [markdownContent, setMarkdownContent] = useState('');

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>New Post</CardTitle>
        <CardDescription>Create a new post to share with the community.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid w-full items-center gap-3">
          <Label htmlFor="new_post_title">Title</Label>
          <Input type="text" id="new_post_title" placeholder="Title*" />

          <Tabs defaultValue="text" className="w-full">
            <TabsList>
              <TabsTrigger value="text">Text</TabsTrigger>
              <TabsTrigger value="media">Images / Video</TabsTrigger>
            </TabsList>
            <TabsContent value="text">
              <div className="grid w-full gap-3">
                <Label htmlFor="message-2">Your Message</Label>
                <MDEditorWrapper
                  value={markdownContent}
                  onChange={(value) => setMarkdownContent(value || '')}
                  placeholder="Type your message in Markdown format..."
                  height={250}
                />
                <p className="text-muted-foreground text-sm">
                  Supports full Markdown formatting including code blocks, lists, and more.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="media">
              {/* Media content goes here */}
            </TabsContent>
          </Tabs>
        </div>
      </CardContent>
      <CardFooter>
        <CardAction className="w-full">Create Post</CardAction>
      </CardFooter>
    </Card>
  )
}