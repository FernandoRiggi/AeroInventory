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
        if (borrowedBy && status !== ToolItemStatus.BORROWED) {
            throw new Error (`borrowedBy can only be set when status is ${ToolItemStatus.BORROWED}`)
        }
        if (borrowedAt && status !== ToolItemStatus.BORROWED) {
            throw new Error (`borrowedAt can only be set when status is ${ToolItemStatus.BORROWED}`)
        }
        if (status === ToolItemStatus.BORROWED && (!borrowedBy || !borrowedBy.trim())) {
            throw new Error (`borrowedBy is required when status is ${ToolItemStatus.BORROWED}`)
        }
        if (status === ToolItemStatus.BORROWED && !borrowedAt) {
            throw new Error (`borrowedAt is required when status is ${ToolItemStatus.BORROWED}`)
        }
    }

    static create(params: CreateToolItemParams) {
        return new ToolItem(
            params.id,
            params.toolId,
            params.isActive || true,
            params.serialNumber,
            params.status || ToolItemStatus.AVAILABLE,
            params.borrowedBy || null,
            params.borrowedAt || null,
            new Date(),
            new Date(),
            null
        )
    }
}