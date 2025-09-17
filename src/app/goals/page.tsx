"use client";

import { GoalCircle } from "@/components/GoalProgress";
import ProtectedRoute from "@/components/Shared/ProtectedRoute";
import { Button } from "@/components/ui/button";
import { useGoalStore } from "@/store/useGoalStore";
import { useState } from "react";
import { FiTarget, FiTrendingUp, FiGift, FiPlus } from "react-icons/fi";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "@hello-pangea/dnd";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";

export default function GoalsPage() {
  const {
    goals,
    addGoal,
    itineraries,
    addItinerary,
    updateItinerary,
    reorderItineraries,
  } = useGoalStore();
  const [title, setTitle] = useState("");
  const [target, setTarget] = useState(1);
  const [progress, setProgress] = useState(0);

  // New itinerary inputs
  const [newItineraryTitle, setNewItineraryTitle] = useState("");
  const [newItineraryActivities, setNewItineraryActivities] = useState("");
  const [newItineraryCompletion, setNewItineraryCompletion] = useState(0);

  const handleAddGoal = () => {
    if (!title) return;
    addGoal(title, target, progress);
    setTitle("");
    setTarget(1);
    setProgress(0);
  };

  const handleAddItinerary = () => {
    if (!newItineraryTitle) return;
    addItinerary(
      newItineraryTitle,
      newItineraryActivities.split(",").map((a) => a.trim()),
      newItineraryCompletion
    );
    setNewItineraryTitle("");
    setNewItineraryActivities("");
    setNewItineraryCompletion(0);
  };

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    reorderItineraries(result.source.index, result.destination.index);
  };

  const totalGoals = goals.length;
  const totalProgress = goals.reduce((acc, g) => acc + g.progress, 0);
  const totalTarget = goals.reduce((acc, g) => acc + g.target, 0);
  const overallPercent = totalTarget
    ? Math.round((totalProgress / totalTarget) * 100)
    : 0;

  return (
    <ProtectedRoute>
      <div className="space-y-8 px-5 md:px-10 py-6">
        {/* Top Banner */}
        <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-3xl font-bold mb-2">
            Achieve Your Travel Dreams!
          </h2>
          <p className="text-lg">
            Stay motivated and track your goals every step of the way.
          </p>
        </div>

        {/* Add Goal Form */}
        <div className="border shadow-lg rounded-xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center relative ">
          {/* Left Side: Inputs */}
          <div className="flex-1 flex flex-col gap-4">
            <div className="flex flex-col">
              <label className="mb-1 font-semibold ">Goal Title</label>
              <input
                type="text"
                placeholder="Enter your goal..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-1 font-semibold ">Target</label>
              <input
                type="number"
                min={1}
                value={target}
                onChange={(e) => setTarget(Number(e.target.value))}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-1 font-semibold ">Progress</label>
              <input
                type="number"
                min={0}
                max={target}
                value={progress}
                onChange={(e) => setProgress(Number(e.target.value))}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
            </div>

            <Button
              onClick={handleAddGoal}
              className="mt-2 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition transform flex items-center gap-2 justify-center"
            >
              <FiPlus size={20} /> Add Goal
            </Button>
          </div>

          {/* Right Side: Big Icon */}
          <div className="hidden md:flex flex-1 justify-center items-center">
            <FiTarget className="text-green-400 text-[300px] opacity-100" />
          </div>
        </div>

        {/* Highlights */}
        <div className="flex flex-col md:flex-row gap-4 justify-between">
          <div className="flex-1 flex items-center gap-3 border shadow-md rounded-lg p-4">
            <FiTarget className="text-green-500 text-3xl" />
            <div>
              <p>Total Goals</p>
              <p className="text-xl font-bold">{totalGoals}</p>
            </div>
          </div>
          <div className="flex-1 flex items-center gap-3 border shadow-md rounded-lg p-4">
            <FiTrendingUp className="text-blue-500 text-3xl" />
            <div>
              <p>Overall Progress</p>
              <p className="text-xl font-bold">{overallPercent}%</p>
            </div>
          </div>
          <div className="flex-1 flex items-center gap-3 border shadow-md rounded-lg p-4">
            <FiGift className="text-yellow-500 text-3xl" />
            <div>
              <p>Total Steps Completed</p>
              <p className="text-xl font-bold">{totalProgress}</p>
            </div>
          </div>
        </div>

        {/* Goals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {goals.map((goal) => (
            <GoalCircle
              key={goal.id}
              title={goal.title}
              progress={goal.progress}
              target={goal.target}
            />
          ))}
        </div>

        {/* Itineraries Section */}
        <div className="mt-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">
              Itineraries <span className="text-blue-400 text-sm">(Draggable Item ~ Priority)</span>
            </h2>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="mt-2 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition transform flex items-center gap-2 justify-center">
                  <FiPlus /> Add Itinerary
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Create New Itinerary</DialogTitle>
                  <DialogDescription>
                    Add title, activities (comma separated), and completion.
                  </DialogDescription>
                </DialogHeader>

                <div className="flex flex-col gap-4 mt-4">
                  {/* Itinerary Title */}
                  <div className="flex flex-col">
                    <label
                      htmlFor="itineraryTitle"
                      className="mb-1 font-medium"
                    >
                      Title
                    </label>
                    <input
                      id="itineraryTitle"
                      type="text"
                      placeholder="Enter itinerary title"
                      value={newItineraryTitle}
                      onChange={(e) => setNewItineraryTitle(e.target.value)}
                      className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                    />
                  </div>

                  {/* Activities */}
                  <div className="flex flex-col">
                    <label
                      htmlFor="itineraryActivities"
                      className="mb-1 font-medium"
                    >
                      Activities
                    </label>
                    <input
                      id="itineraryActivities"
                      type="text"
                      placeholder="Enter activities separated by commas"
                      value={newItineraryActivities}
                      onChange={(e) =>
                        setNewItineraryActivities(e.target.value)
                      }
                      className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                    />
                  </div>

                  {/* Completion */}
                  <div className="flex flex-col">
                    <label
                      htmlFor="itineraryCompletion"
                      className="mb-1 font-medium"
                    >
                      Completion (%)
                    </label>
                    <input
                      id="itineraryCompletion"
                      type="number"
                      min={0}
                      max={100}
                      value={newItineraryCompletion}
                      onChange={(e) =>
                        setNewItineraryCompletion(Number(e.target.value))
                      }
                      className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                    />
                  </div>

                  {/* Add Button */}
                  <div className="flex justify-end mt-2">
                    <DialogClose asChild>
                      <Button
                        onClick={handleAddItinerary}
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                      >
                        Add
                      </Button>
                    </DialogClose>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="itineraries">
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="space-y-3"
                >
                  {itineraries.map((it, index) => (
                    <Draggable
                      key={it.id}
                      draggableId={it.id.toString()}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="border shadow-md rounded-lg p-4 flex flex-col gap-2"
                        >
                          <div className="flex justify-between items-center">
                            <h3 className="font-semibold text-lg">
                              {it.title}
                            </h3>
                            <input
                              type="number"
                              min={0}
                              max={100}
                              value={it.completion}
                              onChange={(e) =>
                                updateItinerary(it.id, {
                                  completion: Number(e.target.value),
                                })
                              }
                              className="w-16 border rounded px-2 py-1 text-center"
                            />
                          </div>
                          <p className="text-sm text-gray-400">
                            Activities: {it.activities.join(", ")}
                          </p>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>

        {/* Bottom Motivation */}
        <div className="flex flex-col md:flex-row gap-4 mt-8">
          <div className="flex-1 bg-gradient-to-r from-pink-400 to-purple-500 text-white p-6 rounded-lg shadow-lg">
            <h3 className="font-semibold text-lg mb-2">Tip: Stay Consistent</h3>
            <p>
              Small daily progress adds up. Track your steps and celebrate
              milestones.
            </p>
          </div>
          <div className="flex-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-6 rounded-lg shadow-lg">
            <h3 className="font-semibold text-lg mb-2">
              Challenge: Push Limits
            </h3>
            <p>
              Try setting a higher target this week to see how far you can go!
            </p>
          </div>
          <div className="flex-1 bg-gradient-to-r from-green-400 to-teal-500 text-white p-6 rounded-lg shadow-lg">
            <h3 className="font-semibold text-lg mb-2">
              Motivation: Visualize Success
            </h3>
            <p>
              Imagine yourself achieving your travel dreams. It keeps you
              focused and motivated.
            </p>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
