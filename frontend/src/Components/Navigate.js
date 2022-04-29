const navigate = [
    {
        index: 0,
        path: '/intro',
        title: '학회소개',
        subNav: [
            {
                id: 10,
                subTitle: '학회개요',
                subPath: '/outline'
            }, {
                id: 11,
                subTitle: '회장취임인사말',
                subPath: '/greeting'
            }, {
                id: 12,
                subTitle: '연혁',
                subPath: '/history'
            }, {
                id: 13,
                subTitle: '임원진',
                subPath: '/current-executives',
            }, {
                id: 14,
                subTitle: '역대주요임원',
                subPath: '/past-executives'
            }, {
                id: 15,
                subTitle: '학회정관',
                subPath: '/articles'
            }
        ]
    }, {
        index: 1,
        path: '/active',
        title: '주요활동',
        subNav: [
            {
                id: 16,
                subTitle: '학술지 발간',
                subPath: '/journal-publication'
            }, {
                id: 17,
                subTitle: '학술대회',
                subPath: '/conference'
            }, {
                id: 18,
                subTitle: 'ICASL',
                subPath: '/icasl'
            }, {
                id: 19,
                subTitle: '학술대회 운영',
                subPath: '/symposium-operation'
            }, {
                id: 20,
                subTitle: '해사문화상',
                subPath: '/cultural-award'
            }, {
                id: 21,
                subTitle: '해운물류 경영대상',
                subPath: '/management-award'
            }
        ]
    }, {
        index: 2,
        path: '/academic',
        title: '학술지',
        subNav: [
            {
                id: 22,
                subTitle: '학술위원회',
                subPath: '/committee'
            }, {
                id: 23,
                subTitle: '산하 분과위원회',
                subPath: '/subcommittee'
            }, {
                id: 24,
                subTitle: '학술위원회 규칙',
                subPath: '/rule'
            }, {
                id: 25,
                subTitle: '논문검색',
                subPath: '/thesis-search'
            }
        ]
    }, {
        index: 3,
        path: '/thesis-submission',
        title: '논문투고',
        subNav: [

            {
                id: 26,
                subTitle: '국문지 바로가기',
                url: 'https://jsl.jams.or.kr/co/main/jmMain.kci'
            }, {
                id: 27,
                subTitle: '영문지 바로가기',
                url: 'http://www.ajsl.info/'
            }, {
                id: 28,
                subTitle: '논문투고 안내',
                subPath: '/thesis-submission-guide'
            }, {
                id: 29,
                subTitle: '논문집필 요령',
                subPath: '/thesis-writing'
            }, {
                id: 30,
                subTitle: '논문심사 방법',
                subPath: '/thesis-review'
            }, {
                id: 31,
                subTitle: '윤리 규정',
                subPath: '/code-of-ethics'
            },
        ]
    }, {
        index: 4,
        path: '/signupinfo',
        title: '정회원가입 정보',
        subNav: [
            {
                id: 32,
                subTitle: '정회원가입 안내',
                subPath: '/sign-up-information'
            }
        ]
    }, {
        index: 5,
        path: '/community',
        title: '커뮤니티',
        subNav: [
            {
                id: 33,
                subTitle: '공지사항',
                subPath: '/notice'
            }, {
                id: 34,
                subTitle: '학회소식',
                subPath: '/news'
            }
        ]
    }
]

export default navigate;