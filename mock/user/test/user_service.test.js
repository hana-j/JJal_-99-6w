const UserClient = require('../user_client');
const UserService = require('../user_service');
jest.mock('../user_client');
//mock이용해서 혼자해보기 행위에 대한 테스트는 stub보다 mock이 적합
describe('UserService Test', ()=>{
    const login = jest.fn(async ()=>'success');
    UserClient.mockImplementation(()=>{
        return{
            login,
        };
    });

    let userService;

    beforeEach(()=>{
        userService = new UserService(new UserClient());
        login.mockClear();
        UserClient.mockClear();
    });

    it('should not call login() UserClient again if already logged in' ,async()=>{
        await userService.login('hana', 'hana');
        await userService.login('hana', 'hana')
        expect(login.mock.calls.length).toBe(1);
    });

});