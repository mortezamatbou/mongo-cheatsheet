db.users.insertMany([
    {
        _id: 1,
        username: 'mori',
        email: 'mori@lobdown.com',
        registerDate: '2023-01-06 16:53:25',
        tmpStrategies: ['Ichimoku RSI', 'Price Action', 'RTM', 'ICT'],
        tmpReadyChecklist: ['', '', ''],
        tmpMistakes: ['FOMO', 'Overtrade', 'No SL'],
        tmpEmotions: ['Fear', 'Greedy', 'Tired', 'Angry'],
        tmpEndDayQuestions: ['Did i follow my rules?', 'Did i hit my target?', 'Did i learn something new?']
    },
]);


db.orders.insertMany([
    {
        orderId: 1,
        userId: 1,
        symbol: 'ADAUSDT',
        side: 'BUY',
        market: 'SPOT',
        orderType: 'MARKET',
        amount: 751,
        avgPrice: 0.566,
        info: {
            ep: {
                1: { price: 0.6, amount: 250, status: 'filled' },
                2: { price: 0.55, amount: 501, status: 'filled' }
            },
            sl: {
                1: { price: 0.5, volume: 50, status: 'pending' },
                2: { price: 0.45, volume: 50, status: 'pending' },
            },
            rf: 0,
            cls: {}
        },
        date: '2023-01-03',
        time: '19:08',
        creationDateTime: '2023-01-03 20:01',
        closeDateTime: '2023-01-03 22:47',
        status: 'OPEN',
        pnl: {
            amount: 425.066,
            profit_p: 10,
            profit: 42.5,
            loss: 0
        },
        timeframe: "4h",
        strategy: "Ichimoku"
    },
]);


// -**-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-**-- -**-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-**-- -**-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-**--

[
    {
        side:
            ['BUY', 'SELL']
    },
    {
        market:
            ['SPOT', 'FUTURE', 'MARGIN', 'OPTION']
    },
    {
        orderType:
            ['MARKET', 'LIMIT', 'STOP LIMIT', 'STOP MARKET', 'OCO']
    },
    {
        status:
            ['OPEN', 'CLOSE', 'CANCEL']
    }
]

// -**-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-**-- -**-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-**-- -**-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-**--

