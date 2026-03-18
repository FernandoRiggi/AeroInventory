import { Tool } from "./tool"

describe('Tool', () => {
    it('should create a valid tool', () => {
        const id = '1'
        const name = 'Hammer Tramontina'
        const description = 'Used for hammering things'
        const tool = Tool.create({
            id,
            name,
            description
        })

        expect(tool.id).toBe('1')
        expect(tool.name).toBe('Hammer Tramontina')
        expect(tool.description).toBe('Used for hammering things')
        expect(tool.isActive).toBe(true)
    })

    it('should not create a tool without name', () => {
        expect(() =>
            Tool.create({
            id: '1',
            name: '',
      }),
    ).toThrow('tool name is required')
    })

    it('should not create a tool without id', () => {
        expect(() => 
            Tool.create({
                id: '',
                name: 'Hammer'
            }),
        ).toThrow('id is required')
    })
})
