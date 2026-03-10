import { useState } from 'react';
import './App.css';

// 問い合わせフォーム - レガシーコード
// 注意: このコードは意図的に「改善の余地がある」状態で書かれています
// 第6章のハンズオンで、Claude Codeを使って改善していきます

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [isConfirm, setIsConfirm] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    let newErrors = {};

    // 名前のバリデーション
    if (!name) {
      newErrors.name = '名前を入力してください';
    } else if (name.length < 2) {
      newErrors.name = '名前は2文字以上で入力してください';
    } else if (name.length > 50) {
      newErrors.name = '名前は50文字以内で入力してください';
    }

    // メールのバリデーション
    if (!email) {
      newErrors.email = 'メールアドレスを入力してください';
    } else if (email.indexOf('@') === -1) {
      newErrors.email = '正しいメールアドレスを入力してください';
    } else if (email.indexOf('.') === -1) {
      newErrors.email = '正しいメールアドレスを入力してください';
    }

    // メッセージのバリデーション
    if (!message) {
      newErrors.message = 'お問い合わせ内容を入力してください';
    } else if (message.length < 10) {
      newErrors.message = 'お問い合わせ内容は10文字以上で入力してください';
    } else if (message.length > 1000) {
      newErrors.message = 'お問い合わせ内容は1000文字以内で入力してください';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleConfirm = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsConfirm(true);
    }
  };

  const handleBack = () => {
    setIsConfirm(false);
  };

  const handleSubmit = () => {
    // 送信処理（モック）
    console.log('送信データ:', { name, email, message });
    setIsSubmitted(true);
  };

  // 送信完了画面
  if (isSubmitted) {
    return (
      <div className="container">
        <h1>送信完了</h1>
        <p>お問い合わせありがとうございます。</p>
        <p>内容を確認の上、担当者よりご連絡いたします。</p>
        <button className="confirm-button" style={{ marginTop: '20px' }} onClick={() => {
          setName('');
          setEmail('');
          setMessage('');
          setErrors({});
          setIsConfirm(false);
          setIsSubmitted(false);
        }}>新しいお問い合わせ</button>
      </div>
    );
  }

  // 確認画面
  if (isConfirm) {
    return (
      <div className="container">
        <h1>入力内容の確認</h1>
        <div className="confirm-item">
          <label>お名前</label>
          <p>{name}</p>
        </div>
        <div className="confirm-item">
          <label>メールアドレス</label>
          <p>{email}</p>
        </div>
        <div className="confirm-item">
          <label>お問い合わせ内容</label>
          <p>{message}</p>
        </div>
        <div className="button-group">
          <button type="button" onClick={handleBack} className="back-button">戻る</button>
          <button type="button" onClick={handleSubmit} className="submit-button">送信する</button>
        </div>
      </div>
    );
  }

  // 入力画面
  return (
    <div className="container">
      <h1>お問い合わせフォーム</h1>
      <form onSubmit={handleConfirm}>
        <div className="form-group">
          <label htmlFor="name">お名前 <span className="required">*</span></label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="山田 太郎"
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email">メールアドレス <span className="required">*</span></label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@example.com"
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="message">お問い合わせ内容 <span className="required">*</span></label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="5"
            placeholder="お問い合わせ内容を入力してください"
          />
          {errors.message && <span className="error">{errors.message}</span>}
        </div>

        <button type="submit" className="confirm-button">確認画面へ</button>
      </form>
    </div>
  );
}

export default App;
