db.users.aggregate([
    {
        $set: {
            balance: {
                $floor: {
                    $multiply: [{ $rand: {} }, 10000]
                }
            }
        }
    },
    {
        $merge: 'users'
    }
]);

// ------------------------------------------------------------------------------------------------------------------------

db.orders.insertMany([
    {
        symbol: 'ADAUSDT',
        ep: [{ vol: 50, prc: 0.6 }, { vol: 50, prc: 0.65 }],
        sl: [{ vol: 50, prc: 0.55 }, { vol: 50, prc: 0.5 }],
        date: '2023-01-04',
        time: '19:08',
        side: 'Short',
        userId: 2,
        status: 'open',
        amount: 150
    },
    {
        symbol: 'BTCUSDT',
        side: 'Long',
        ep: [{ vol: 100, prc: 45270.5 }],
        tp: [{ vol: 100, prc: 45800.5 }],
        sl: [{ vol: 50, prc: 49895.4 }],
        date: '2023-01-04',
        time: '19:08',
        userId: 2,
        status: 'open',
        amount: 0.32
    }
]);


// Sample data
[
    {
        _id: ObjectId("65957f7b82792ff4dae97ffe"),
        symbol: 'ADAUSDT',
        ep: [{ vol: 50, prc: 0.6 }, { vol: 50, prc: 0.65 }],
        sl: [{ vol: 50, prc: 0.55 }, { vol: 50, prc: 0.5 }],
        date: '2023-01-03',
        time: '19:08',
        side: 'Long',
        userId: 1,
        status: 'open',
        amount: 320,
        orderId: 1
    },
    {
        _id: ObjectId("6595954382792ff4dae97fff"),
        symbol: 'ADAUSDT',
        side: 'Long',
        ep: [{ vol: 100, prc: 0.55 }],
        tp: [{ vol: 100, prc: 0.812 }],
        sl: [{ vol: 50, prc: 0.4 }],
        date: '2023-01-03',
        time: '19:08',
        userId: 1,
        status: 'open',
        amount: 626,
        orderId: 2
    }
];

[
    {
        _id: ObjectId("65957f7b82792ff4dae97ffe"),
        orderId: 2,
        userId: 1,
        symbol: 'ADAUSDT',
        date: '2023-01-03',
        time: '19:08',
        side: 'Long',
        amount: 320,
        ep: [{ vol: 50, prc: 0.6 }, { vol: 50, prc: 0.65 }],
        sl: [{ vol: 50, prc: 0.55 }, { vol: 50, prc: 0.5 }],
        status: 'open',
    }
];

// orders2
[
    {
        orderId: 2,
        userId: 1,
        symbol: 'ADAUSDT',
        date: '2023-01-03',
        time: '19:08',
        side: 'Long',
        amount: 320,
        orderType: ['MARKET', 'LIMIT', 'STOP MARKET', 'STOP LIMIT', 'OCO'],
        target: {
            ep: {
                1: { vol: 50, prc: 0.6, status: 'filled' },
                2: { vol: 50, prc: 0.65, status: 'pending' }
            },
            sl: {
                1: { vol: 50, prc: 0.55, status: 'pending' },
                2: { vol: 50, prc: 0.5, status: 'pending' },
                3: { vol: 50, prc: 0.5, status: 'pending' }
            },
            close: {
                // 1: { vol: 100, prc: 0.6, status: 'filled' },
            }
        },
        status: 'open',
    },
    {
        orderId: 2,
        userId: 1,
        symbol: 'ADAUSDT',
        date: '2023-01-03',
        time: '19:08',
        side: 'Long',
        amount: 320,
        orderType: ['MARKET', 'LIMIT', 'STOP MARKET', 'STOP LIMIT', 'OCO'],
        target: {
            ep: {
                1: { vol: 50, prc: 0.6, status: 'filled' },
                2: { vol: 50, prc: 0.65, status: 'pending' }
            },
            sl: {
                1: { vol: 50, prc: 0.55, status: 'pending' },
                2: { vol: 50, prc: 0.5, status: 'pending' },
                3: { vol: 50, prc: 0.5, status: 'pending' }
            },
            close: {
                // 1: { vol: 100, prc: 0.6, status: 'filled' },
            }
        },
        status: 'open',
    }
];


db.orders.insertMany([
    {
        orderId: 1,
        userId: 1,
        symbol: 'ADAUSDT',
        date: '2023-01-03',
        time: '19:08',
        side: 'Buy',
        market: 'Spot',
        amount: 320,
        orderType: 'MARKET',
        info: {
            ep: {
                1: { prc: 0.6, amount: 250.5, status: 'filled' },
                2: { prc: 0.55, amount: 250.5, status: 'filled' }
            },
            sl: {
                1: { prc: 0.5, vol: 50, status: 'pending' },
                2: { prc: 0.45, vol: 50, status: 'pending' },
            },
            close: {
                // 1: { vol: 100, prc: 0.6, status: 'filled' },
            }
        },
        status: 'open',
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



// ------------------

db.orders.aggregate([
    {
        $set: {
            amount: {
                $floor: {
                    $multiply: [{ $rand: {} }, 1000]
                }
            }
        }
    },
    { $merge: 'orders' }
]);

db.orders.aggregate([
    {
        $match: { amount: { $gt: 320 } }
    },
    {
        $project: { symbol: 1, status: 1, amount: 1, orderDate: { $concat: ["$date", " ", "$time"] } }
    }

]);

db.orders.aggregate([
    {
        $group: { _id: '$symbol', amount: { $sum: "$amount" } }
    }
]);

db.orders.aggregate([
    {
        $group: { _id: '$symbol', amount: { $sum: "$amount" } }
    }
])

db.orders.aggregate([
    {
        $match: { userId: { $eq: 1 } }
    },
    {
        $group: {
            _id: { symbol: '$symbol', userId: '$userId' },
            amount: { $sum: '$amount' }
        }
    }
]);

db.orders.aggregate([
    {
        $project: { symbol: 1, userId: 1, amount: 1 }
    },
    {
        $group: { _id: { symbol: '$symbol', userId: '$userId', date: '$date' }, amount: { $sum: '$amount' } }
    },
    {
        $sort: { 'amount': 1 }
    }
]);

db.orders.aggregate(
    [
        { $project: { symbol: 1, userId: 1, amount: 1, ep: 1 } },
        { $addFields: { ep: { $avg: "$ep.prc" } } },
        { $group: { _id: { symbol: '$symbol', userId: '$userId', date: '$date' }, amount: { $sum: '$amount' } } },
        { $sort: { 'amount': 1 } }
    ]
);

db.orders.aggregate([
    {
        $group: {
            _id: { userId: "$userId" },
            orderNo: { $count: {} }
        }
    }
])


db.orders.aggregate([
    { $unwind: "$ep" },
    { $project: { syumbol: 1, orderId: 1, amount: 1, ep: 1, sl: 1, userId: 1 } },
    { $group: { _id: { id: "$orderId" }, ep: { $avg: "$ep.prc" } } },
])

db.orders.aggregate([
    { $unwind: "$ep" },
    { $unwind: "$sl" },
    { $project: { symbol: 1, ep: 1, orderId: 1, sl: 1, _id: 0 } },
    { $match: { orderId: 2 } }
])

db.orders.aggregate([
    { $unwind: "$ep" },
    { $project: { symbol: 1, ep: 1, orderId: 1, _id: 0 } },
    { $match: { orderId: 3 } },
    { $sort: { "ep.prc": -1 } }
])

// ------------------------------------------------------------------------------------------------------------------------
