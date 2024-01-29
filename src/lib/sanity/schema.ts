import { type SchemaTypeDefinition } from "sanity";

import { schemas } from "../schemas";

export const schema: { types: SchemaTypeDefinition[] } = {
	types: schemas,
};
