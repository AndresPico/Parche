import { z } from "zod";

export const planSchema = z.object({
  title: z.string().min(3, "El nombre debe tener al menos 3 caracteres"),
  eventDate: z.string().min(1, "La fecha es obligatoria"),
  startTime: z.string().min(1, "La hora es obligatoria"),
  placeName: z.string().min(2, "El lugar es obligatorio"),
  planType: z.enum(["rumba", "paseo", "comida", "deporte", "viaje", "otro"]),
});

export type PlanSchema = z.infer<typeof planSchema>;