const taskServices = require('../../../src/services/taskServices');
const {Task} = require('../../../src/database/models');

describe('Task Services Testing', () => {
    describe('Get all task', () => {
        it('Should return an array of tasks', async () => {
            const mockResult = [
                {
                    'id': 4,
                    'title': 'shreyas hello world',
                    'isCompleted': false,
                    'createdAt': '2023-01-31T08:03:26.185Z',
                    'updatedAt': '2023-01-31T08:03:26.185Z'
                },
          
            ];
            jest.spyOn(Task, 'findAll').mockResolvedValue(mockResult);
            const result = await taskServices.getAllTasks();
            expect(result).toBe(mockResult);
        });
    });
    describe('Get a task', () => {
        it('Should return a task', async () => {
            const mockResult = {
                'id': 4,
                'title': 'hello world',
                'isCompleted': false,
                'createdAt': '2023-01-31T08:03:26.185Z',
                'updatedAt': '2023-01-31T08:03:26.185Z'
            };
            jest.spyOn(Task, 'findOne').mockResolvedValue(mockResult);
            const result = await taskServices.getTaskById(4);
            expect(result).toBe(mockResult);
        });
        it('SHould return null if task not found', async () => {
            jest.spyOn(Task, 'findOne').mockResolvedValue(null);
            const result = await taskServices.getTaskById(4);
            expect(result).toBe(null);
        });
    });
    describe('Post a task', () => {
        it('Should return a task', async () => {
            const mockResult = {
                'id': 2,
                'title': 'hello mckinsey ',
                'isCompleted': false,
                'createdAt': '2023-01-31T08:03:26.185Z',
                'updatedAt': '2023-01-31T08:03:26.185Z'
            };
            jest.spyOn(Task, 'create').mockResolvedValue(mockResult);
            const result = await taskServices.addTask(mockResult);
            expect(result).toBe(mockResult);
        });
    });
    describe('Edit a task', () => {
        it('Should return a task', async () => {
            const mockResult = {
                'id': 4,
                'title': 'hello ',
                'isCompleted': true,
                'createdAt': '2023-01-31T08:03:26.185Z',
                'updatedAt': '2023-01-31T08:03:26.185Z',
                save: jest.fn()
            };
            jest.spyOn(Task, 'findOne').mockResolvedValue(mockResult);
            const result = await taskServices.UpdateTaskById(4);
            expect(result).toBe(mockResult);
        });
        it('Should return null if task not found', async () => {
            jest.spyOn(Task, 'findOne').mockResolvedValue(null);
            const result = await taskServices.UpdateTaskById(4);
            expect(result).toBe(null);
        });
    });
    describe('Complete a task', () => {
        it('Should return a task', async () => {
            const mockResult = {
                'id': 4,
                'title': 'hello',
                'isCompleted': true,
                'createdAt': '2023-01-31T08:03:26.185Z',
                'updatedAt': '2023-01-31T08:03:26.185Z',
                save: jest.fn()
            };
            jest.spyOn(Task, 'findOne').mockResolvedValue(mockResult);
  
            const result = await taskServices.getCompletedTask(4);
            expect(result).toBe(mockResult);
        });
        it('Should return null if task not found', async () => {
            const mockResult = [];
            jest.spyOn(Task, 'findOne').mockResolvedValue(mockResult);
            const result = await taskServices.getCompletedTask(4);
            expect(result).toBe(mockResult);
        });
    });
    describe('Delete completed tasks', () => {
        it('Should return a task', async () => {
            const mockResult = [
                {
                    'id': 4,
                    'title': 'hello ',
                    'isCompleted': false,
                    'createdAt': '2023-01-31T08:03:26.185Z',
                    'updatedAt': '2023-01-31T08:03:26.185Z'
                },
                {
                    'id': 11,
                    'title': 'hello ',
                    'isCompleted': false,
                    'createdAt': '2023-02-02T04:32:56.307Z',
                    'updatedAt': '2023-02-02T04:32:56.307Z'
                }
            ];
            jest.spyOn(Task, 'destroy').mockResolvedValue(mockResult);
            const result = await taskServices.DeleteTask();
            expect(result).toBe(mockResult);
        });
    });
});