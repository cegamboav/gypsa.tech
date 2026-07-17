export type ContactPayload = {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
};

export type ContactSuccessResponse = {
  success: true;
  message: string;
};

export class ContactRequestError extends Error {
  readonly status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = "ContactRequestError";
    this.status = status;
  }
}

function getApiBaseUrl(): string {
  const baseUrl = import.meta.env.VITE_API_BASE_URL?.trim();

  if (!baseUrl) {
    throw new ContactRequestError(
      "La URL de la API no está configurada. Define VITE_API_BASE_URL.",
      500,
    );
  }

  return baseUrl.replace(/\/$/, "");
}

export async function submitContact(
  payload: ContactPayload,
): Promise<ContactSuccessResponse> {
  const response = await fetch(`${getApiBaseUrl()}/api/v1/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: payload.name,
      email: payload.email,
      company: payload.company ?? "",
      phone: payload.phone ?? "",
      message: payload.message,
    }),
  });

  let data: unknown = null;

  try {
    data = await response.json();
  } catch {
    data = null;
  }

  if (!response.ok) {
    const apiMessage =
      typeof data === "object" &&
      data !== null &&
      "error" in data &&
      typeof (data as { error?: { message?: unknown } }).error?.message ===
        "string"
        ? (data as { error: { message: string } }).error.message
        : null;

    throw new ContactRequestError(
      apiMessage ??
        "No pudimos enviar tu mensaje. Inténtalo de nuevo en unos minutos.",
      response.status,
    );
  }

  if (
    typeof data === "object" &&
    data !== null &&
    "success" in data &&
    (data as { success: unknown }).success === true
  ) {
    const message =
      "message" in data &&
      typeof (data as { message?: unknown }).message === "string"
        ? (data as { message: string }).message
        : "Gracias por contactarnos. Hemos recibido tu mensaje.";

    return { success: true, message };
  }

  throw new ContactRequestError(
    "Recibimos una respuesta inesperada del servidor.",
    response.status,
  );
}
