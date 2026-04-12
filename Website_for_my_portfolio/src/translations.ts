export type Language = 'en' | 'ja';

export const translations = {
  en: {
    navbar: {
      portfolio: "Portfolio",
      links: { home: "Home", about: "About", works: "Works", contact: "Contact" }
    },
    hero: {
      subtitle: "Hi, my name is",
      title: "Rishun.",
      role: "Electrical and Electronic Engineering student",
      description: "I'm a university student passionate about computer technology.",
      btnWork: "View My Work",
      btnContact: "Contact Me"
    },
    about: {
      title: "About Me",
      eduCareer: "Education & Career",
      educations: [
        {
          institution: "Kobe University, Japan",
          degree: "Bachelor of Electrical and Electronic Engineering",
          period: "April 2024 – Present"
        },
        {
          institution: "Tampere University, Finland",
          degree: "Exchange Student of Information Technology and Communication Sciences",
          period: "August 2025 – May 2026 (1 year programme)"
        }
      ],
      certifications: "Certifications",
      certItems: [
        { title: "TOEIC Listening & Reading IP: 770", date: "May 2024 (First-year student)" },
        { title: "IELTS: 6.5", date: "December 2024 (First-year student)" }
      ],
      skills: "Skills",
      skillItems: [
        { name: "HTML", items: ["Portfolio website"] },
        { name: "CSS", items: ["Portfolio website"] },
        { name: "JavaScript", items: ["Portfolio website"] },
        { name: "React", items: ["Portfolio website"] },
        { name: "TypeScript", items: ["Portfolio website"]}
      ],
      basicKnowledge: "Basic Knowledge",
      basicItems: [
        { name: "Python", items: ["I learned it by myself and used it in a lecture of the machine learning."] },
        { name: "C", items: ["I learned it in a lecture."] }
      ]
    },
    projects: {
      title: "My Works",
      works: [
        {
          title: "Portfolio Website",
          description: "The website you are looking at right now. Built with React and Vite to introduce myself and showcase my projects."
        }
      ],
      code: "Code",
      liveDemo: "Live Demo",
      comingSoon: "More projects coming soon!"
    },
    contact: {
      title: "Get In Touch",
      text: "I am currently looking for new opportunities and collaborations. Whether you have a question or just want to say hi, feel free to drop a message!",
      socials: { email: "Email Me", github: "GitHub", linkedin: "LinkedIn" },
      form: {
        name: "Name",
        email: "Email",
        message: "Message",
        send: "Send Message",
        sending: "Sending...",
        success: "Message sent successfully!",
        error: "Failed to send message. Please try again later."
      }
    },
    footer: {
      rights: "Rishun. All rights reserved."
    }
  },
  ja: {
    navbar: {
      portfolio: "Portfolio",
      links: { home: "ホーム", about: "自己紹介", works: "制作物", contact: "お問い合わせ" }
    },
    hero: {
      subtitle: "はじめまして、",
      title: "佐脇利駿、",
      role: "電気電子工学科の学生です",
      description: "コンピュータ技術に情熱を持つ大学生です",
      btnWork: "制作物",
      btnContact: "お問い合わせ"
    },
    about: {
      title: "自己紹介",
      eduCareer: "学歴・経歴",
      educations: [
        {
          institution: "神戸大学",
          degree: "工学部 電気電子工学科",
          period: "2024年4月 – 現在"
        },
        {
          institution: "タンペレ大学（フィンランド）",
          degree: "情報技術・通信科学 交換留学",
          period: "2025年8月 – 2026年5月（1年間プログラム）"
        }
      ],
      certifications: "資格",
      certItems: [
        { title: "TOEIC Listening & Reading IP: 770", date: "2024年5月取得（大学1年）" },
        { title: "IELTS: 6.5", date: "2024年12月取得（大学1年）" }
      ],
      skills: "スキル",
      skillItems: [
        { name: "HTML", items: ["ポートフォリオサイト"] },
        { name: "CSS", items: ["ポートフォリオサイト"] },
        { name: "JavaScript", items: ["ポートフォリオサイト"] },
        { name: "React", items: ["ポートフォリオサイト"] },
        { name: "TypeScript", items: ["ポートフォリオサイト"] }
      ],
      basicKnowledge: "基礎知識",
      basicItems: [
        { name: "Python", items: ["独学で学び、機械学習の講義で使用しました。"] },
        { name: "C言語", items: ["大学の講義で学びました。"] }
      ]
    },
    projects: {
      title: "制作物",
      works: [
        {
          title: "ポートフォリオサイト",
          description: "あなたが現在見ているウェブサイトです。自分自身の紹介と制作物を展示するためにReactとViteを使用して構築しました。"
        }
      ],
      code: "コード",
      liveDemo: "デモ",
      comingSoon: "新しいプロジェクトを準備中！"
    },
    contact: {
      title: "お問い合わせ",
      text: "現在、新しい機会やコラボレーションを探しています。質問がある方も、単に挨拶したい方も、お気軽にメッセージを送ってください！",
      socials: { email: "メールを送る", github: "GitHub", linkedin: "LinkedIn" },
      form: {
        name: "お名前",
        email: "メールアドレス",
        message: "メッセージ",
        send: "送信する",
        sending: "送信中...",
        success: "メッセージを送信しました！",
        error: "メッセージの送信に失敗しました。後でもう一度お試しください。"
      }
    },
    footer: {
      rights: "Rishun. 無断転載を禁じます。"
    }
  }
};
