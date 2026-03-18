import { ToolItemStatus } from "../../types"
import { ToolItem } from "./tool-item"

describe('ToolItem', () => {
    it('should create a valid tool', () => {
        const toolItem = ToolItem.create({
            id: '001-001-001',
            toolId: "001",
            isActive: true,
            serialNumber: "123456-7890",
            status: ToolItemStatus.AVAILABLE
        })

        expect(toolItem.id).toBe('001-001-001')
        expect(toolItem.toolId).toBe('001')
        expect(toolItem.isActive).toBeTruthy()
        expect(toolItem.serialNumber).toBe('123456-7890')
        expect(toolItem.status).toBe(ToolItemStatus.AVAILABLE)
    })

    it('should not create a tool without id', ()=> {
        expect(() =>
        ToolItem.create({
            id: "",
            toolId: "001",
            serialNumber: "123456-78900"
        }),
    ).toThrow('id is required')
    })

    it('should not create a tool without toolId', ()=> {
        expect(() =>
        ToolItem.create({
            id: "001-001-001",
            toolId: "",
            serialNumber: "123456-78900"
        }),
    ).toThrow('toolId is required')
    })

    it('should not create a tool without serialNumber', ()=> {
        expect(() =>
        ToolItem.create({
            id: "001-001-001",
            toolId: "001",
            serialNumber: ""
        }),
    ).toThrow('serialNumber is required')
    })

    it(`should not allow borrowedBy when status is not ${ToolItemStatus.BORROWED}`, () => {
        expect(() =>
        ToolItem.create({
            id: "001-001-001",
            toolId: "001",
            serialNumber: "123456-7890",
            status: ToolItemStatus.AVAILABLE,
            borrowedBy: '12345'
        }),
    ).toThrow(`borrowedBy can only be set when status is ${ToolItemStatus.BORROWED}`)
    })

    it(`should not allow borrowedAt when status is not ${ToolItemStatus.BORROWED}`, () => {
        expect(() =>
        ToolItem.create({
            id: "001-001-001",
            toolId: "001",
            serialNumber: "123456-7890",
            status: ToolItemStatus.AVAILABLE,
            borrowedAt: new Date()
        }),
    ).toThrow(`borrowedAt can only be set when status is ${ToolItemStatus.BORROWED}`)
    })

    it (`should require borrowedBy when status is ${ToolItemStatus.BORROWED}`, () => {
        expect(() =>
        ToolItem.create({
            id: "001-001-001",
            toolId: "001",
            serialNumber: "123456-7890",
            status: ToolItemStatus.BORROWED,
            borrowedAt: new Date()
        }),
    ).toThrow(`borrowedBy is required when status is ${ToolItemStatus.BORROWED}`)
    })

    it (`should require borrowedAt when status is ${ToolItemStatus.BORROWED}`, () => {
        expect(() =>
        ToolItem.create({
            id: "001-001-001",
            toolId: "001",
            serialNumber: "123456-7890",
            status: ToolItemStatus.BORROWED,
            borrowedBy: '12345'
        }),
    ).toThrow(`borrowedAt is required when status is ${ToolItemStatus.BORROWED}`)
    })
})