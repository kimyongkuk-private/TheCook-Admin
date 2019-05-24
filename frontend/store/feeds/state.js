
export default () => ({
  date: new Date().toISOString().substr(0, 10),
  headers: [
    {
      text: 'ID',
      value: 'id'
    },
    {
      text: '작성시간',
      value: 'created'
    },
    {
      text: '수정시간',
      value: 'updated'
    }
  ],
  dialog: {
    title: null
  }
})
// useridx를 토큰에서 빼내는데 실패
