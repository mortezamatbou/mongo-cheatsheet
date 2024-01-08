db.users.insertMany([
    {
        _id: 1,
        username: 'mori',
        email: 'mori@lobdown.com',
        registerDate: '2023-01-06 16:53:25',
        template: {
            strategies: ['Ichimoku RSI', 'Price Action', 'RTM', 'ICT'],
            readyChecklist: ['', '', ''],
            mistakes: ['FOMO', 'Overtrade', 'No SL'],
            emotions: ['Fear', 'Greedy', 'Tired', 'Angry'],
            endDayQuestions: ['Did i follow my rules?', 'Did i hit my target?', 'Did i learn something new?']
        },
    },
    {
        _id: 2,
        username: 'hossein',
        email: 'hossein@lobdown.com',
        registerDate: '2023-01-06 19:25:26',
        template: {
            strategies: ['Ichimoku RSI', 'Price Action', 'RTM', 'ICT'],
            readyChecklist: ['', '', ''],
            mistakes: ['FOMO', 'Overtrade', 'No SL'],
            emotions: ['Fear', 'Greedy', 'Tired', 'Angry'],
            endDayQuestions: ['Did i follow my rules?', 'Did i hit my target?', 'Did i learn something new?']
        },
    }
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
            cls: {
                1: { price: 0.65, amount: 751, status: 'filled' }
            }
        },
        date: '2023-01-03',
        time: '19:08',
        creationDateTime: '2023-01-03 20:01',
        closeDateTime: '2023-01-03 22:47',
        status: 'OPEN',
        pnl: {
            amount: 751,
            profit_p: 10,
            profit: 75.1,
            loss: 0
        },
        timeframes: ["4h", "1h"],
        strategies: ["Ichimoku", "Price Action"]
    },
    {
        orderId: 2,
        userId: 2,
        symbol: 'ADAUSDT',
        side: 'SELL',
        market: 'SPOT',
        orderType: 'MARKET',
        amount: 450,
        avgPrice: 0.554,
        info: {
            ep: {
                1: { price: 0.554, amount: 450, status: 'filled' },
            },
            sl: {},
            rf: 0,
            cls: {}
        },
        date: '2023-01-03',
        time: '19:08',
        creationDateTime: '2023-01-03 20:01',
        closeDateTime: '2023-01-03 22:47',
        status: 'OPEN',
        pnl: {
            amount: 450,
            profit_p: 5,
            profit: 22.5,
            loss: 0
        },
        timeframes: ["4h", "1h"],
        strategies: ["RTM", "Price Action"]
    },
]);


db.orders.aggregate([
    {
        $lookup: {
            from: 'users',
            localField: 'userId',
            foreignField: '_id',
            as: 'o2'
        }
    }
]);


db.orders.aggregate([
    {
        $lookup: {
            from: 'users', localField: 'userId', foreignField: '_id', as: 'usr'
        }
    },
    {
        $project: {
            _id: 0,
            'usr.username': 1,
            'usr.email': 1,
            orderId: 1,
            symbol: 1,
            amount: 1,
            avgPrice: 1,
        }
    }
]);

db.orders.aggregate([
    {
        $lookup: {
            from: 'users',
            localField: 'userId',
            foreignField: '_id',
            as: 'usr'
        }
    },
    {
        $group: {
            _id: "$orderId",
            properties: { $push: { symbol: "$symbol", user: "$usr.username" } }
        }
    }
]);

db.orders.aggregate([
    {
        $lookup: {
            from: 'users',
            localField: 'userId',
            foreignField: '_id',
            as: 'usr'
        }
    },
    {
        $addFields: { username: "$usr.username" }
    },
    {
        $group: {
            _id: "$orderId",
        }
    }
]);

db.orders.aggregate([
    {
        $group: {
            _id: "$orderId",
            properties: { $push: { name: "$date" } }
        }
    }
])


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

