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
                2: { price: 0.55, amount: 501, status: 'pending' }
            },
            sl: {
                1: { price: 0.5, volume: 50, status: 'pending' },
                2: { price: 0.45, volume: 50, status: 'pending' },
            },
            cls: {}
        },
        date: '2023-01-03',
        time: '19:08',
        creationDate: '2023-01-03 20:01',
        closeDate: '2023-01-03 22:47',
        status: 'OPEN',
        pnl: {
            amount: 425.066,
            profit_p: 10,
            profit: 42.5,
            loss: 0
        }
    },
    {
        orderId: 2,
        userId: 2,
        symbol: 'ADAUSDT',
        date: '2023-01-04',
        time: '15:24',
        side: 'Buy',
        market: 'Future',
        amount: 415.5,
        orderType: 'LIMIT',
        info: {
            ep: {
                1: { vol: 50, prc: 0.51, status: 'filled' },
                2: { vol: 50, prc: 0.554, status: 'pending' }
            },
            sl: {
                1: { vol: 50, prc: 0.61, status: 'pending' },
                2: { vol: 50, prc: 0.688, status: 'pending' },
            },
            close: {
                // 1: { vol: 100, prc: 0.6, status: 'filled' },
            }
        },
        status: 'open',
    },
    {
        orderId: 3,
        userId: 2,
        symbol: 'ETHUSDT',
        date: '2023-01-04',
        time: '10:15',
        side: 'Buy',
        market: 'Spot',
        amount: 415.5,
        orderType: 'StopLimit',
        info: {
            ep: {
                1: { prc: 0.51, status: 'filled' },
                2: { prc: 0.554, status: 'pending' }
            },
            sl: {
                1: { prc: 0.61, status: 'pending' },
                2: { prc: 0.688, status: 'pending' },
            },
            close: {
                // 1: { vol: 100, prc: 0.6, status: 'filled' },
            }
        },
        status: 'open',
    }
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

