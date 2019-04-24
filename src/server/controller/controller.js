import {
    search,
    get,
    save,
    getUser,
    saveUser,
    getUserById,
    saveSteamApp,
    getSteamApps,
    saveGame,
    getGames,
    delGame,
    saveCarousel,
    getCarousels,
    saveGameDetail,
    getGameDetail,
    getGameById,
    updateGame,
    saveReview,
    getReview,
    delReview,
    updateReview
} from '../service/service.js';

export function list(request, response) {
    let callback = function (contact) {
        response.status(200);
        response.json(contact);
    };
    let searchQuery = {};
    if (request.query.lastName) {
        searchQuery = {
            lastName: request.query.lastName
        };
    }
    search(searchQuery, callback);
}

export function detail(request, response) {
    let callback = function (contact) {
        response.status(200);
        response.json(contact);
    };
    get(request.params.contactId, callback);
}

export function fetchUser(request, response) {
    let callback = function (contact) {
        response.status(200);
        response.json(contact);
    };
    getUserById(request.params, callback);
}

export function add(request, response) {
    let newContact = Object.assign({}, request.body),
        callback = function (contact) {
            response.status(200);
            response.json(contact);
        };
    save(newContact, callback);
}

export function addUser(request, response) {
    let newUser = Object.assign({}, request.body),
        callback = function (user) {
            response.status(200);
            response.json(user);
        };
    saveUser(newUser, callback);
}

export function autheticate(request, response) {
    if (request.body.username && request.body.password) {
        let callback = function (user) {
            if (user && user._id) {
                response.status(200);
                response.json(user);
            } else {
                response.status(400);
                response.json({
                    "message": 'Username or password is incorrect'
                });
            }
        }
        getUser(request.body, callback);
    } else {
        response.status(400);
        response.json({
            "message": 'Invalid input'
        });
    }

}

export function addSteamApp(request, response) {
    // let newApp = Object.assign({}, request.body),
    let callback = function (newApp) {
        response.status(200);
        response.json(newApp);
    };
    saveSteamApp(request.body, callback);
}

export function fetchSteamApp(request, response) {
    let callback = function (steamApp) {
        response.status(200);
        response.json(steamApp);
    };
    getSteamApps(request, callback);
}

export function addGame(request, response) {
    // let newApp = Object.assign({}, request.body),
    let callback = function (newApp) {
        response.status(200);
        response.json(newApp);
    };
    saveGame(request.body, callback);
}

export function editGame(request, response) {
    let callback = function (game) {
        response.status(200);
        response.json(game);
    };
    updateGame(request.params._id, request.body, callback);
}

export function fetchGame(request, response) {
    let callback = function (steamApp) {
        response.status(200);
        response.json(steamApp);
    };
    getGames(request, callback);
}

export function addCarousel(request, response) {
    // let newApp = Object.assign({}, request.body),
    let callback = function (newApp) {
        response.status(200);
        response.json(newApp);
    };
    saveCarousel(request.body, callback);
}

export function fetchCarousel(request, response) {
    let callback = function (games) {
        response.status(200);
        let result = [];
        for (let i = 0; i < games.length; i++) {
            let resultObject = {};
            resultObject.gameid = games[i]._id;
            resultObject.game = games[i].name;
            resultObject.titleimg = games[i].img;
            resultObject.contentimg1 = games[i].img;
            resultObject.contentimg2 = games[i].img1;
            resultObject.contentimg3 = games[i].img2;
            resultObject.contentimg4 = games[i].img3;
            result.push(resultObject);
        }
        response.json(result);

        // response.json(steamApp);
    };
    getCarousels(request, callback);
}

export function addGameDetail(request, response) {
    // let newApp = Object.assign({}, request.body),
    let callback = function (newApp) {
        response.status(200);
        response.json(newApp);
    };
    saveGameDetail(request.body, callback);
}

export function fetchGameDetail(request, response) {
    let callback = function (gd) {
        let gamedetail = gd;
        let cb = function (game) {
            if (!gamedetail || gamedetail == null) {
                response.status(400);
                response.json({
                    "error": "no such game"
                });
            } else {
                response.status(200);
                let result = new Object();
                result.img = game.img;
                result.img1 = game.img1;
                result.img2 = game.img2;
                result.img3 = game.img3;
                result.title = game.title;
                result.detail = game.detail;
                result.platform = game.platform;
                result.price = game.price;
                result.background = gamedetail.background;
                result.recommend = gamedetail.recommend;
                response.json(result);
            }
        };
        getGameById(request.params._id, cb);
    };
    getGameDetail(request.params._id, callback);
}

export function addReview(request, response) {
    // let newApp = Object.assign({}, request.body),
    let callback = function (newApp) {
        response.status(200);
        response.json(newApp);
    };
    saveReview(request.body, callback);
}

export function fetchReview(request, response) {
    let callback = function (review) {
        if (!review || review == null) {
            response.status(400);
            response.json({
                "error": "no such review"
            });
            return;
        }

        let users = new Map();
        let flag = 0;
        let cb = function (user) {
            flag++;
            users.set(String(user._id),user);
            if (flag===review.length){
                let results =[];
                for (let i = 0; i < review.length; i++) {
                    let result = {};
                    result._id = review[i]._id;
                    result.username = users.get(review[i].userid).username;
                    result.fullname = users.get(review[i].userid).firstName + users.get(review[i].userid).lastName;
                    result.title = review[i].title;
                    result.content = review[i].content;
                    result.rate = review[i].rate;   
                    results.push(result);
                }
                response.status(200);
                response.json(results);
            }
        };
        for (let i = 0; i < review.length; i++) {
            getUserById(review[i].userid, cb);
        }
        
    };

    getReview(request.params._id, callback);
}

export function deleteReview(request, response) {
    // let newApp = Object.assign({}, request.body),
    let callback = function (newApp) {
        response.status(200);
        response.json(newApp);
    };
    delReview(request.params._reviewid, callback);
}

export function editReview(request,response){
    let callback = function (newApp) {
        response.status(200);
        response.json(newApp);
    };
    updateReview(request.body,request.params._reviewid, callback);
}

export function deleteGame(request, response) {
    // let newApp = Object.assign({}, request.body),
    let callback = function (newApp) {
        response.status(200);
        response.json(newApp);
    };
    delGame(request.params._id, callback);
}