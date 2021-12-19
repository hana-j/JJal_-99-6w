const ProductService = require('../product_service_no_di.js');
const ProductClient = require('../product_client.js');
jest.mock('../product_client'); //가짜 클라이언트를 가져와서 사용할거라고 설정 

//Mock함수를 사용하는 이유는 클라이언트에서 직접적인 연관이 있는 부분을 가짜로 만들어줌 => 단위테스트를 가능하게 해준다.
describe('ProductService Test',()=>{
    const fetchItems = jest.fn(async ()=>[
        {item:'🥛', available : true},
        {item:'🥚', available : false}
    ]);
    ProductClient.mockImplementation(()=>{
        return {
            fetchItems
        };
    });
    let productService;
    beforeEach(()=>{
        productService = new ProductService();
        fetchItems.mockClear();
        ProductClient.mockClear();
    });

    it('should filter out only available items', async ()=>{
        const items = await productService.fetchAvailableItems();
        expect(items.length).toBe(1);
        expect(items).toEqual([{item:'🥛', available : true}]);
        
    });
    it('test', async()=>{
        const items = await productService.fetchAvailableItems();
        expect(fetchItems).toHaveBeenCalledTimes(1);
    });
});