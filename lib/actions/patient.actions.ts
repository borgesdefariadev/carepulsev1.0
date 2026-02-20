"use server";

import { ID, InputFile, Query } from "node-appwrite";

import {
  BUCKET_ID,
  DATABASE_ID,
  ENDPOINT,
  PATIENT_COLLECTION_ID,
  PROJECT_ID,
  databases,
  storage,
  users,
} from "../appwrite.config";
import { parseStringify } from "../utils";
import {
  CreateUserParams,
  RegisterUserParams,
  Patient,
} from "@/types/appwrite.types";

// CREATE APPWRITE USER
export const createUser = async (user: CreateUserParams) => {
  try {
    // Create new user -> https://appwrite.io/docs/references/1.5.x/server-nodejs/users#create
    const newuser = await users.create(
      ID.unique(),
      user.email,
      user.phone,
      undefined,
      user.name
    );

    return parseStringify(newuser);
  } catch (error: unknown) {
    // Check existing user
    const err = error as { code?: number } | undefined
    if (err && err.code === 409) {
      const existingUser = await users.list([
        Query.equal("email", [user.email]),
      ]);

      const existingUserRes = existingUser as unknown as { users: unknown[] }

      return existingUserRes.users[0];
    }
    console.error("An error occurred while creating a new user:", error);
  }
};

// GET USER
export const getUser = async (userId: string): Promise<User | undefined> => {
  try {
    const user = await users.get(userId);

    return parseStringify(user) as User;
  } catch (error) {
    console.error(
      "An error occurred while retrieving the user details:",
      error
    );
  }
};

// REGISTER PATIENT
export const registerPatient = async ({
  identificationDocument,
  ...patient
}: RegisterUserParams): Promise<Patient | undefined> => {
  try {
    // Upload file ->  // https://appwrite.io/docs/references/cloud/client-web/storage#createFile
  let file: unknown;
    if (identificationDocument) {
      const inputFile =
        identificationDocument &&
        InputFile.fromBlob(
          identificationDocument?.get("blobFile") as Blob,
          identificationDocument?.get("fileName") as string
        );

      file = await storage.createFile(BUCKET_ID!, ID.unique(), inputFile) as unknown;
    }

    // Create new patient document -> https://appwrite.io/docs/references/cloud/server-nodejs/databases#createDocument
    const newPatient = await databases.createDocument(
      DATABASE_ID!,
      PATIENT_COLLECTION_ID!,
      ID.unique(),
      {
        identificationDocumentId: (file as unknown as { $id?: string })?.$id ? (file as unknown as { $id?: string }).$id : null,
        identificationDocumentUrl: (file as unknown as { $id?: string })?.$id
          ? `${ENDPOINT}/storage/buckets/${BUCKET_ID}/files/${(file as unknown as { $id?: string }).$id}/view??project=${PROJECT_ID}`
          : null,
        ...patient,
      }
    );

    return parseStringify(newPatient) as Patient;
  } catch (error) {
    console.error("An error occurred while creating a new patient:", error);
  }
};

// GET PATIENT
export const getPatient = async (userId: string): Promise<Patient | undefined> => {
  try {
    const patients = await databases.listDocuments(
      DATABASE_ID!,
      PATIENT_COLLECTION_ID!,
      [Query.equal("userId", [userId])]
    );

  const patientsRes = patients as unknown as { documents: unknown[] }
  return parseStringify(patientsRes.documents[0]) as Patient | undefined;
  } catch (error) {
    console.error(
      "An error occurred while retrieving the patient details:",
      error
    );
  }
};
