import { CreateToolItemParams, ToolItemStatus } from "../../types";

export class ToolItem {
    constructor (
        public readonly id: string,
        public readonly toolId: string,
        public readonly isActive: boolean,
        public readonly serialNumber: string,
        public readonly status: ToolItemStatus,
        public readonly borrowedBy: string | null,
        public readonly borrowedAt: Date | null,
        public readonly createdAt: Date,
        public readonly updatedAt: Date,
        public readonly deletedAt: Date | null
    ) {
        if (!id || !id.trim()) {
            throw new Error ('id is required')
        }
        if (!toolId || !toolId.trim()) {
            throw new Error ('toolId is required')
        }
        if (!serialNumber || !serialNumber.trim()) {
            throw new Error ('serialNumber is required')
        }
    }

    static create(params: CreateToolItemParams) {
        return new ToolItem(
            params.id,
            params.toolId,
            params.isActive || true,
            params.serialNumber,
            params.status || ToolItemStatus.AVAILABLE,
            null,
            null,
            new Date(),
            new Date(),
            null
        )
    }
}