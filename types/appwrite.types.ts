export type AppointmentStatus = 'scheduled' | 'pending' | 'cancelled'

export interface Appointment {
  $id?: string
  userId?: string
  primaryPhysician?: string
  schedule?: string | Date
  status?: AppointmentStatus
  cancellationReason?: string
  [key: string]: unknown
}

export interface CreateAppointmentParams {
  userId: string
  primaryPhysician?: string
  schedule?: string | Date
  status?: AppointmentStatus
  [key: string]: unknown
}

export interface UpdateAppointmentParams {
  appointmentId: string
  userId: string
  timeZone?: string
  appointment: Partial<CreateAppointmentParams>
  type?: 'schedule' | 'cancel'
}

export interface CreateUserParams {
  email: string
  phone?: string
  name?: string
  [key: string]: unknown
}

export interface RegisterUserParams extends CreateUserParams {
  identificationDocument?: FormData
}
