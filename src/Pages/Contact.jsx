export default function Contact() {
  return (

// 名前：入力必須 & 30文字以内
// メールアドレス：入力必須 & メールアドレスの形式になっていること
// 本文：入力必須 & 500字以内

    <form>
      <p>名前</p>
      <input type="text" />
      <p>メールアドレス</p>
      <input type="text" />
      <p>本文</p>
      <textarea />
      <input type='submit' value='送信' />
    </form>
  )
}