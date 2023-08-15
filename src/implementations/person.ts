export type { Person } from "../types/person.ts";

export namespace Person {
  export const from = ({ id, name }: { id: string; name: string }): Person => ({
    type: "people",
    id,
    name,
  });

  export const is = (value?: any): value is Person =>
    value && typeof value === "object" && value.type === "people";
}
