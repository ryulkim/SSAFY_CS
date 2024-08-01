const handler = {
    get: function (target, name) {
        return name === "name" ? `${target.a} ${target.b}` : target[name];
    },
};
const p = new Proxy({ a: "junghyeok", b: "is FE developer" }, handler);
console.log(p.name);
// junghyeok is FE developer
// name을 가져올 때, handler의 get 메소드가 실행되어 target.a + target.b를 반환한다.
// console.log(p.a);
// console.log(p.b);
