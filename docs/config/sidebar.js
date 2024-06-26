export const sidebarConfig = {
    // /column/Algothm/表示对这个文件夹下的所有md文件做侧边栏配置
    '/column/Algorithm/': [
       // 第一部分
      {
        text: '栈和队列',
        items: [
          {
            text: '栈-深拷贝和浅拷贝',
            link: '/column/Algorithm/001_stack'
          },
          {
            text: '队列-事件循环',
            link: '/column/Algorithm/002_queue'
          }
        ]
      },
      // 第二部分
      {
        text: '字典和树',
        items: [
          {
            text: '字典和集合-Set和Map',
            link: '/column/Algorithm/003_dictionary'
          },
          {
            text: '树-深/广度优先遍历',
            link: '/column/Algorithm/004_tree'
          }
        ]
      }
    ]
  }