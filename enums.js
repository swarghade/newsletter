

module.exports = {

    'AccessDenied': 99,
    'ArticleNotFound': 1,
    'ArticleInvalid': 2,


    'AttemptedCSRF': 50,
    'AttemptedXSS': 51,
    'AttemptedFlood': 52,
    'AttemptedHPP': 53,
    

    'InvalidParameter' : 60,
    'InternalServerError' :  61,

    'UserNotFound' : 80,
    'WrongUsername': 81,
    'WrongPassword': 82,
    

    '1'  : "ArticleNotFound", 
    '2'  : "ArticleInvalid", 
    '50' : "AttemptedCSRF", 
    '51' : 'AttemptedXSS',
    '52' : 'AttemptedFlood',
    '53' : 'AttemptedHPP',
    '60' : "InvalidParameter", 
    '61' : "InternalServerError", 
    '80' : "UserNotFound", 
    '81' : "WrongUsername", 
    '82' : "WrongPassword", 
    '99' : "AccessDenied",

    'semantic': {
        '1'  : "Article not found on the server", 
        '2'  : "Article is invalid", 
        '50' : "Attempted CSRF", 
        '51' : 'Attempted XSS',
        '52' : 'Attempted DOS/DDOS',
        '53' : 'Attempted HTML PARAMETER POLUTION',
        '60' : "Invalid parameters.", 
        '61' : "Internal server error", 
        '80' : "User is not registered", 
        '81' : "Invalid username", 
        '82' : "Invalid password", 
        '99' : "Access denied"
    }
        
        
}