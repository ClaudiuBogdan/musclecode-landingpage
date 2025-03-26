"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card } from "@/components/ui/card"

export function CodeDemo() {
  const [activeTab, setActiveTab] = useState("challenge")

  return (
    <div className="rounded-lg border bg-card shadow-xs overflow-hidden max-w-4xl mx-auto">
      <Tabs defaultValue="challenge" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="flex items-center justify-between border-b px-4">
          <TabsList className="h-14">
            <TabsTrigger value="challenge" className="data-[state=active]:bg-background">
              Challenge
            </TabsTrigger>
            <TabsTrigger value="solution" className="data-[state=active]:bg-background">
              Solution
            </TabsTrigger>
            <TabsTrigger value="ai-trainer" className="data-[state=active]:bg-background">
              AI Trainer
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="challenge" className="p-0 m-0">
          <div className="p-6 bg-muted/30">
            <h3 className="text-lg font-semibold mb-2">Two Sum</h3>
            <p className="text-muted-foreground mb-4">
              Given an array of integers nums and an integer target, return indices of the two numbers such that they
              add up to target.
            </p>
            <div className="font-mono text-sm bg-background p-4 rounded-md border">
              <div>
                <span className="text-primary">function</span> <span className="text-yellow-500">twoSum</span>(nums,
                target) {"{"}
              </div>
              <div className="pl-4 text-muted-foreground">{"// Your solution here"}</div>
              <div>{"}"}</div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="solution" className="p-0 m-0">
          <div className="p-6 bg-muted/30">
            <h3 className="text-lg font-semibold mb-2">Solution</h3>
            <div className="font-mono text-sm bg-background p-4 rounded-md border">
              <div>
                <span className="text-primary">function</span> <span className="text-yellow-500">twoSum</span>(nums,
                target) {"{"}
              </div>
              <div className="pl-4">
                <span className="text-primary">const</span> map = {};
              </div>
              <div className="pl-4">
                <span className="text-primary">for</span> (<span className="text-primary">let</span> i = 0; i {"<"}{" "}
                nums.length; i++) {"{"}
              </div>
              <div className="pl-8">
                <span className="text-primary">const</span> complement = target - nums[i];
              </div>
              <div className="pl-8">
                <span className="text-primary">if</span> (map[complement] !=={" "}
                <span className="text-primary">undefined</span>) {"{"}
              </div>
              <div className="pl-12">
                <span className="text-primary">return</span> [map[complement], i];
              </div>
              <div className="pl-8">{"}"}</div>
              <div className="pl-8">map[nums[i]] = i;</div>
              <div className="pl-4">{"}"}</div>
              <div className="pl-4">
                <span className="text-primary">return</span> [];
              </div>
              <div>{"}"}</div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="ai-trainer" className="p-0 m-0">
          <div className="p-6 bg-muted/30 h-[300px] overflow-y-auto">
            <div className="flex items-start gap-4 mb-4">
              <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
                AI
              </div>
              <Card className="p-3 text-sm">
                <p>Let's break down the Two Sum problem:</p>
                <ol className="list-decimal pl-5 mt-2 space-y-2">
                  <li>We need to find two numbers in the array that add up to the target.</li>
                  <li>The brute force approach would be to use nested loops (O(n²) time complexity).</li>
                  <li>A more efficient approach uses a hash map to store values we've seen (O(n) time complexity).</li>
                </ol>
                <p className="mt-2">Would you like me to explain the hash map approach in more detail?</p>
              </Card>
            </div>

            <div className="flex items-start gap-4 mb-4">
              <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center shrink-0">U</div>
              <Card className="p-3 text-sm">
                <p>Yes, please explain the hash map approach.</p>
              </Card>
            </div>

            <div className="flex items-start gap-4">
              <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
                AI
              </div>
              <Card className="p-3 text-sm">
                <p>The hash map approach works like this:</p>
                <ol className="list-decimal pl-5 mt-2 space-y-2">
                  <li>Create an empty hash map to store values and their indices.</li>
                  <li>Iterate through the array. For each element:</li>
                  <li>Calculate the complement (target - current element).</li>
                  <li>Check if the complement exists in our hash map. If it does, we've found our pair!</li>
                  <li>If not, add the current element and its index to the hash map.</li>
                </ol>
                <p className="mt-2">
                  This approach is efficient because hash map lookups are O(1), making the overall algorithm O(n) time
                  complexity.
                </p>
                <p className="mt-2">Would you like to try implementing this solution now?</p>
              </Card>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

