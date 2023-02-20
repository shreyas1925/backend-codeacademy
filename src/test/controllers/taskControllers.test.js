const taskServices = require('../../src/services/taskServices');
const taskController = require('../../src/controllers/taskControllers');

// in backend testing remember to check one for ok and one for null
// and remember .save() and .destroy() to be mocked in mockResult only

describe('Get all tasks', () => {
    describe('GET /tasks', () => {
        it('should return all tasks', async () => {

            const mockResult = [{ id: 1, title: 'Task 1', isCompleted: false }];
            jest.spyOn(taskServices, 'getAllTasks').mockResolvedValue(mockResult);
            const mockReq = {};
            const mockRes = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn()
            };
            await taskController.getAllTasks(mockReq, mockRes);
            expect(mockRes.status).toBeCalledWith(200);
            expect(mockRes.json).toBeCalledWith(mockResult);

        });
    });
});

describe('Get task by ID', () => {
    describe('GET /tasks/:id', () => {
        it('should return task based on id', async () => {
            const mockResult = { id: 1, title: 'Task 1', isCompleted: false };
            jest.spyOn(taskServices, 'getTaskById').mockResolvedValue(mockResult);
            const mockReq = { params: { id: 1 } };
            const mockRes = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn()
            };

            await taskController.getTaskById(mockReq, mockRes);
            expect(mockRes.status).toBeCalledWith(200);
            expect(mockRes.json).toBeCalledWith(mockResult);
        });
    });
});

describe('Create task', () => {
    describe('POST /tasks', () => {
        it('should create a new task', async () => {
            const mockResult = { id: 1, title: 'Task 1', isCompleted: false };
            jest.spyOn(taskServices, 'addTask').mockResolvedValue(mockResult);
            const mockReq = {};
            const mockRes = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn()
            };

            await taskController.addTask(mockReq, mockRes);
            expect(mockRes.status).toBeCalledWith(200);
            expect(mockRes.json).toBeCalledWith(mockResult);

        });
    });
});

describe('Update task by ID', () => {
    describe('PUT /tasks/:id', () => {
        it('should update task based on id', async () => {
            const mockResult = { id: 1, title: 'Task 1', isCompleted: true };
            jest.spyOn(taskServices, 'UpdateTaskById').mockResolvedValue(mockResult);
            const mockReq = { params: { id: 1 } };
            const mockRes = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn()
            };

            await taskController.UpdateTaskById(mockReq, mockRes);
            expect(mockRes.json).toBeCalledWith(mockResult);
            expect(mockRes.status).toBeCalledWith(200);
        });
    });
});

describe('Delete task if complete', () => {
    describe('PATCH /tasks/:id', () => {
        it('should update task based on id', async () => {
            const mockResult = { id: 1, title: 'Task 1', isCompleted: true };
            jest.spyOn(taskServices, 'UpdateTaskById').mockResolvedValue(mockResult);
            const mockReq = { params: { id: 1 } };
            const mockRes = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn()
            };

            await taskController.UpdateTaskById(mockReq, mockRes);
            expect(mockRes.status).toBeCalledWith(200);
            expect(mockRes.json).toBeCalledWith(mockResult);
        });
    });
});

describe('Get completed tasks', () => {
    describe('GET /tasks', () => {
        it('should get all completed tasks', async () => {
            const mockResult = [{ id: 1, title: 'Task 1', isCompleted: true }];
            jest.spyOn(taskServices, 'getCompletedTask').mockResolvedValue(mockResult);
            const mockReq = {
                query: { isCompleted: true }
            };
            const mockRes = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn()
            };

            await taskController.getCompletedTask(mockReq, mockRes);
            expect(mockRes.status).toBeCalledWith(200);
            expect(mockRes.json).toBeCalledWith(mockResult);
        });
    });
});

describe('Get active tasks', () => {
    describe('GET /tasks', () => {
        it('should get all active tasks', async () => {
            const mockResult = [{ id: 1, title: 'Task 1', isCompleted: true }];
            jest.spyOn(taskServices, 'getActiveTask').mockResolvedValue(mockResult);
            const mockReq = {
                query: { isCompleted: false }
            };
            const mockRes = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn()
            };

            await taskController.getCompletedTask(mockReq, mockRes);
            expect(mockRes.status).toBeCalledWith(200);
            expect(mockRes.json).toBeCalledWith(mockResult);
        });
    });
});

describe('Get all tasks', () => {
    describe('GET /tasks', () => {
        it('should return empty list',async  () => {
            const mockResult = [];
            jest.spyOn(taskServices, 'getAllTasks').mockResolvedValue(mockResult);
            const mockReq = {};
            const mockRes = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn()
            };
            await taskController.getAllTasks(mockReq, mockRes);
            expect(mockRes.status).toBeCalledWith(200);
            expect(mockRes.json).toBeCalledWith(mockResult);
        });
    });
});