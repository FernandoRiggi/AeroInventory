export type CreateToolParams = {
    id: string
    name: string
    isActive?: boolean
    description?: string | null
}

export enum ToolItemStatus {
    AVAILABLE = 'AVAILABLE',
    BORROWED = 'BORROWED',
    BROKEN = 'BROKEN',
    MAINTENCE = 'MAINTENCE',
    LOST = 'LOST'
}

export type CreateToolItemParams = {
    id: string
    toolId: string
    serialNumber: string
    isActive?: boolean
    status?: ToolItemStatus
}