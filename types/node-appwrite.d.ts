declare module 'node-appwrite' {
  export class Client {
    setEndpoint(endpoint: string): this
    setProject(project: string): this
    setKey(key: string): this
  }

  export class Databases {
    constructor(client: Client)
    createDocument(databaseId: string, collectionId: string, documentId: string, data: unknown): Promise<unknown>
    listDocuments(databaseId: string, collectionId: string, queries?: unknown[]): Promise<unknown>
    updateDocument(databaseId: string, collectionId: string, documentId: string, data: unknown): Promise<unknown>
    getDocument(databaseId: string, collectionId: string, documentId: string): Promise<unknown>
  }

  export class Users {
    constructor(client: Client)
    create(id: string, email: string, phone?: string, password?: string | undefined, name?: string): Promise<unknown>
    get(id: string): Promise<unknown>
    list(queries?: unknown[]): Promise<unknown>
  }

  export class Messaging {
    constructor(client: Client)
    createSms(id: string, message: string, params: unknown[], recipients: string[]): Promise<unknown>
  }

  export class Storage {
    constructor(client: Client)
    createFile(bucketId: string, fileId: string, file: unknown): Promise<unknown>
  }

  export class ID {
    static unique(): string
  }

  export class InputFile {
    static fromBlob(blob: Blob, filename: string): unknown
  }

  export class Query {
    static orderDesc(field: string): unknown
    static equal(field: string, value: unknown[]): unknown
  }
  export namespace SDK {
    export { Client, Databases, Users, Messaging, Storage, ID, InputFile, Query }
  }
}
