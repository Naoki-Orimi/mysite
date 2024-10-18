/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'], //どのファイルを監視してCSSを生成するか定義
  theme: { // Tailwind CSS のデフォルトテーマ（色、フォントサイズ、スペーシングなど）をカスタマイズするための設定
    extend: {
      colors: {
        primary: '#8cc9ed',
      }
    },
  },
  plugins: [
    
  ],
}

