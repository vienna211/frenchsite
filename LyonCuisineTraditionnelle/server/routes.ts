import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertMessageSchema, insertReservationSchema } from "@shared/schema";
import { ZodError } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Message submission endpoint
  app.post("/api/messages", async (req, res) => {
    try {
      const messageData = insertMessageSchema.parse(req.body);
      const newMessage = await storage.createMessage(messageData);
      
      res.status(201).json({
        success: true,
        message: "Message envoyé avec succès",
        data: newMessage
      });
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({
          success: false,
          message: "Données invalides",
          errors: error.errors
        });
      } else {
        console.error("Error saving message:", error);
        res.status(500).json({
          success: false,
          message: "Une erreur est survenue lors de l'envoi du message"
        });
      }
    }
  });

  // Reservation submission endpoint
  app.post("/api/reservations", async (req, res) => {
    try {
      const reservationData = insertReservationSchema.parse(req.body);
      const newReservation = await storage.createReservation(reservationData);
      
      res.status(201).json({
        success: true,
        message: "Réservation effectuée avec succès",
        data: newReservation
      });
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({
          success: false,
          message: "Données invalides",
          errors: error.errors
        });
      } else {
        console.error("Error saving reservation:", error);
        res.status(500).json({
          success: false,
          message: "Une erreur est survenue lors de la réservation"
        });
      }
    }
  });

  // Get messages (admin functionality, can be extended later)
  app.get("/api/messages", async (req, res) => {
    try {
      const messages = await storage.getAllMessages();
      res.status(200).json(messages);
    } catch (error) {
      console.error("Error fetching messages:", error);
      res.status(500).json({
        success: false,
        message: "Une erreur est survenue lors de la récupération des messages"
      });
    }
  });

  // Get reservations (admin functionality, can be extended later)
  app.get("/api/reservations", async (req, res) => {
    try {
      const reservations = await storage.getAllReservations();
      res.status(200).json(reservations);
    } catch (error) {
      console.error("Error fetching reservations:", error);
      res.status(500).json({
        success: false,
        message: "Une erreur est survenue lors de la récupération des réservations"
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
