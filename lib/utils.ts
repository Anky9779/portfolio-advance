import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const validateString = (
    value: unknown,
    maxLength: number
): value is string => {
    if (!value || typeof value !== "string" || value.length > maxLength) {
        return false;
    }

    return true;
};

export const validateEmail = (
    value: unknown,
    maxLength: number
): value is string => {
    if (!validateString(value, maxLength)) {
        return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value as string);
};

export const getErrorMessage = (error: unknown): string => {
    let message: string;

    if (error instanceof Error) {
        message = error.message;
    } else if (error && typeof error === "object" && "message" in error) {
        message = String(error.message);
    } else if (typeof error === "string") {
        message = error;
    } else {
        message = "Something went wrong";
    }

    return message;
};