# localinclude
Test your local HTML include with any page on the Internet

## Install

Localinclude is a commmand line tool written in NodeJS, so you need to install it globally from npm.

```
npm install -g localinclude
```

## Usage

You can run localinclude from your project directory, here's a quick demo:

```
echo '<h1>LOCALINCLUDE is awesome!!!</h1>' > example.inc
localinclude --url https://www.google.com --dompos '#lga' --include example.inc
```

Once this is running visit the URL the terminal output reports and you'll see the Google homepage with the "LOCALINCLUDE is awesome!!!" written into it.

### Parameters explained

To use localinclude you need to provide 3 parameters:

 * `--url` The target page on the website you want to use. This needs to be available from where you are (so you can use localinclude with intranets).
 * `--dompos` A CSS selector string that tells localinclude where in the page to put your include.
 * `--include` A path to the file you want to include into the target page.
 * `--port` The port on which to run the local NodeJS server. Default is 8000.
