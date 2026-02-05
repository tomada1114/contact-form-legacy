import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  test('フォームのタイトルが表示される', () => {
    render(<App />)
    expect(screen.getByText('お問い合わせフォーム')).toBeInTheDocument()
  })
})
