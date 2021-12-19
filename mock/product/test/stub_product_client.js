//테스트시에만 사용, 네트워크에 의존하지 않는 코드임
class StubProductClient{
    async fetchItems(){
        return[
            {item:'🥛', available : true},
            {item:'🥚', available : false}  
        ];
    }
}
module.exports = StubProductClient;