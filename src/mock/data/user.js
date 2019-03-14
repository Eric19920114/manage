import Mock from 'mockjs';
const LoginUsers = [
  {
    id: 1,
    username: 'admin',
    password: 'admin',
    avatar: '',
    name: '屈先生'
  }
];
const Users = [];
Mock.Random.extend({
    constellation: function(date) {
        var constellations = ['篮球', '羽毛球', '兵乓球', '足球', '滑板', '滑旱冰', '跑步', '跳绳', '听音乐', '看电影', '绘画','写小说','看书','积木','弹吉他','钢琴','英雄联盟','国际象棋','扑克牌','唱歌']
        return this.pick(constellations)
    }
})
Mock.Random.constellation()
Mock.mock('@CONSTELLATION')
for (let i = 0; i < 100; i++) {
  Users.push(Mock.mock({
    id: Mock.Random.guid(),
    name: Mock.Random.cname(),
    addr: Mock.mock('@county(true)'),
    hobby: Mock.mock('@CONSTELLATION'),
    birth: Mock.Random.date(),
    sex: Mock.Random.integer(0, 1)
  }));
}
export { LoginUsers, Users };
