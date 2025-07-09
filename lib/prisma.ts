// Mock prisma client for build purposes
const mockPrisma = {
    article: {
        findMany: (args?: any) => Promise.resolve([]),
        findUnique: (args?: any) => Promise.resolve(null),
        create: (args?: any) => Promise.resolve({}),
        update: (args?: any) => Promise.resolve({}),
        delete: (args?: any) => Promise.resolve({}),
        upsert: (args?: any) => Promise.resolve({})
    },
    project: {
        findMany: (args?: any) => Promise.resolve([]),
        findUnique: (args?: any) => Promise.resolve(null),
        create: (args?: any) => Promise.resolve({}),
        update: (args?: any) => Promise.resolve({}),
        delete: (args?: any) => Promise.resolve({}),
        upsert: (args?: any) => Promise.resolve({})
    },
    configuration: {
        findMany: (args?: any) => Promise.resolve([]),
        findUnique: (args?: any) => Promise.resolve(null),
        create: (args?: any) => Promise.resolve({}),
        update: (args?: any) => Promise.resolve({}),
        delete: (args?: any) => Promise.resolve({}),
        upsert: (args?: any) => Promise.resolve({})
    }
}

export default mockPrisma
