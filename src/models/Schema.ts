import * as z from "zod";

// LoginForm Schema
export const loginSchema = z.object({
  email: z
    .string()
    .email("Not valid Email")
    .min(1, { message: "Email is required!" }),
  password: z.string().min(6, { message: "Must be 6 characters min" }),
});


// Register Form schema
export const registerSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z
    .string()
    .email("Not a valid email")
    .min(1, { message: "Email is required" }),
  password: z.string().min(6, { message: "Password must be 6 charactees min" }),
});


// User Data form schema
export const userSchema = z.object({
  full_name: z.string().min(1, { message: "Name is required" }),
  email: z
    .string()
    .email("Not valid Email")
    .min(1, { message: "Email is required" }),
  phone: z.string().min(5, { message: "Valid number is required" }),
  address: z.string().min(1, { message: "Address is required" }),
  bank: z.string().min(1, { message: "Bank name is required" }),
  gender: z.enum(["male", "female"], { message: "Select gender" }),
  marital_status: z.enum(["single", "married"], {
    message: "Select status",
  }),
  bvn: z.string().min(10, { message: "BVN is required" }),
  employment_status: z.enum(["employee", "employer"], {
    message: "Select a status",
  }),
  sector: z.enum(["Fintech", "Academia", "Oil", "Telecoms", "Others"], {
    message: "Select sector",
  }),
  level: z.enum(["HND", "B.Sc", "B.A", "PhD", "Others"]),
  office_email: z
    .string()
    .email("Not a valid email")
    .min(1, { message: "Email is required" }),
  income: z.string().min(1, { message: "Income is required" }),
  duration: z.enum(["0-1yr", "2-5yrs", "6-10yrs", "11yrs+"], {
    message: "Select duration",
  }),
  twitter: z.string().min(1, { message: "Name is not recognized" }).optional(),
  facebook: z.string().min(1, { message: "Name is not recognized" }).optional(),
  instagram: z
    .string()
    .min(1, { message: "Name is not recognized" })
    .optional(),
  guarantor_name: z.string().min(1, { message: "Name is required" }),
  guarantor_phone: z.string().min(5, { message: "Valid number is required" }),
  guarantor_email: z
    .string()
    .email("Not a valid email")
    .min(1, { message: "Email is required" }),
  relationship: z.string().min(1, { message: "Relationship is required" }),
});
