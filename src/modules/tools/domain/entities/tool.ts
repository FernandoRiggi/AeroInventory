import { createToolParams } from "../types"

export class Tool {
    constructor (
        public readonly id: string,
        public readonly name: string,
        public readonly description: string | null,
        public readonly isActive: boolean,
        public readonly createdAt: Date,
        public readonly updatedAt: Date,
        public readonly deletedAt: Date | null
    ) {
        if (!name || !name.trim()) {
            throw new Error ('tool name is required')
        }
        if (!id || !id.trim()) {
            throw new Error ('id is required')
        }
    }

    static create(params: createToolParams): Tool {
        return new Tool(
            params.id,
            params.name,
            params.description ?? null,
            true,
            new Date(),
            new Date(),
            null
        )
    }
}