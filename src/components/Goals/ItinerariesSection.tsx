"use client";

import { useGoalStore } from "@/store/useGoalStore";
import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { DragDropContext, Droppable, Draggable, DropResult } from "@hello-pangea/dnd";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import "@/lib/i18n";

export default function ItinerariesSection() {
  const { itineraries, addItinerary, updateItinerary, reorderItineraries } = useGoalStore();
  const [newTitle, setNewTitle] = useState("");
  const [newActivities, setNewActivities] = useState("");
  const [newCompletion, setNewCompletion] = useState(0);
  const { t } = useTranslation();

  const handleAddItinerary = () => {
    if (!newTitle) return;
    addItinerary(
      newTitle,
      newActivities.split(",").map((a) => a.trim()),
      newCompletion
    );
    setNewTitle("");
    setNewActivities("");
    setNewCompletion(0);
  };

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    reorderItineraries(result.source.index, result.destination.index);
  };

  return (
    <div className="mt-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">
          {t("itineraries.title")}{" "}
          <span className="text-blue-400 text-sm">
            ({t("itineraries.draggableHint")})
          </span>
        </h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="mt-2 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition transform flex items-center gap-2 justify-center">
              <FiPlus /> {t("itineraries.addButton")}
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>{t("itineraries.dialogTitle")}</DialogTitle>
              <DialogDescription>
                {t("itineraries.dialogDescription")}
              </DialogDescription>
            </DialogHeader>

            <div className="flex flex-col gap-4 mt-4">
              <input
                type="text"
                placeholder={t("itineraries.inputTitle")}
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                className="border rounded-lg px-4 py-2"
              />
              <input
                type="text"
                placeholder={t("itineraries.inputActivities")}
                value={newActivities}
                onChange={(e) => setNewActivities(e.target.value)}
                className="border rounded-lg px-4 py-2"
              />
              <input
                type="number"
                min={0}
                max={100}
                placeholder={t("itineraries.inputCompletion")}
                value={newCompletion}
                onChange={(e) => setNewCompletion(Number(e.target.value))}
                className="border rounded-lg px-4 py-2"
              />

              <div className="flex justify-end">
                <DialogClose asChild>
                  <Button
                    onClick={handleAddItinerary}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                  >
                    {t("itineraries.addConfirm")}
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
            <div ref={provided.innerRef} {...provided.droppableProps} className="space-y-3">
              {itineraries.map((it, index) => (
                <Draggable key={it.id} draggableId={it.id.toString()} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="border shadow-md rounded-lg p-4 flex flex-col gap-2"
                    >
                      <div className="flex justify-between items-center">
                        <h3 className="font-semibold text-lg">{it.title}</h3>
                        <input
                          type="number"
                          min={0}
                          max={100}
                          value={it.completion}
                          onChange={(e) =>
                            updateItinerary(it.id, { completion: Number(e.target.value) })
                          }
                          className="w-16 border rounded px-2 py-1 text-center"
                        />
                      </div>
                      <p className="text-sm text-gray-400">
                        {t("itineraries.activitiesLabel")}: {it.activities.join(", ")}
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
  );
}
