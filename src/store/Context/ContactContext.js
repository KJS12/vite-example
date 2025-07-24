import { createContext, useContext } from "react";

export const ContactContext = createContext(null);
export const useContactContext = () => useContext(ContactContext);