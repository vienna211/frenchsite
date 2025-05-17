import { 
  users, type User, type InsertUser, 
  reservations, type Reservation, type InsertReservation,
  messages, type Message, type InsertMessage
} from "@shared/schema";

// Interface for storage operations
export interface IStorage {
  // User operations
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  // Reservation operations
  createReservation(reservation: InsertReservation): Promise<Reservation>;
  getReservation(id: number): Promise<Reservation | undefined>;
  getAllReservations(): Promise<Reservation[]>;

  // Message operations
  createMessage(message: InsertMessage): Promise<Message>;
  getMessage(id: number): Promise<Message | undefined>;
  getAllMessages(): Promise<Message[]>;
}

// In-memory implementation of storage interface
export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private reservations: Map<number, Reservation>;
  private messages: Map<number, Message>;
  
  private userIdCounter: number;
  private reservationIdCounter: number;
  private messageIdCounter: number;

  constructor() {
    this.users = new Map();
    this.reservations = new Map();
    this.messages = new Map();
    
    this.userIdCounter = 1;
    this.reservationIdCounter = 1;
    this.messageIdCounter = 1;
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userIdCounter++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Reservation methods
  async createReservation(insertReservation: InsertReservation): Promise<Reservation> {
    const id = this.reservationIdCounter++;
    const now = new Date();
    const reservation: Reservation = { 
      ...insertReservation, 
      id, 
      created_at: now 
    };
    this.reservations.set(id, reservation);
    return reservation;
  }

  async getReservation(id: number): Promise<Reservation | undefined> {
    return this.reservations.get(id);
  }

  async getAllReservations(): Promise<Reservation[]> {
    return Array.from(this.reservations.values());
  }

  // Message methods
  async createMessage(insertMessage: InsertMessage): Promise<Message> {
    const id = this.messageIdCounter++;
    const now = new Date();
    const message: Message = { 
      ...insertMessage, 
      id, 
      created_at: now 
    };
    this.messages.set(id, message);
    return message;
  }

  async getMessage(id: number): Promise<Message | undefined> {
    return this.messages.get(id);
  }

  async getAllMessages(): Promise<Message[]> {
    return Array.from(this.messages.values());
  }
}

// Create and export a singleton instance of the storage
export const storage = new MemStorage();
