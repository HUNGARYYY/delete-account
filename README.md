
# delete-account

Automatically tell someone to delete their twitter account

# Usage:

after cloning run `npm install` in project directory

[Create an app on twitter](http://iag.me/socialmedia/how-to-create-a-twitter-app-in-8-easy-steps/) and put your api info inside a `config.json` file in the project root.

eg:

```json
{
  "api": {
    "consumer_key": "xxxxxx",
    "consumer_secret": "xxxxxxxxx",
    "access_token_key": "hahahahahaha",
    "access_token_secret": "hahahaxxxxxxhahahxxxx"
  }
}
```

Update the following lines in app.js using your preferred editor to reflect the account you want to @:

```javascript
if (!tweet.user || tweet.user.screen_name !== 'Tanner_Johnson') return;
```
```javascript
status: '.@tanner_johnson Delete your account.'
```

This line needs to contain the numerical account id that [you can find here:](http://mytwitterid.com/)
```javascript
'follow': '15899201'
```



run `npm start` in project directory

About to head home for the weekend its lit
