const React = require('react')
const Default = require('../components/Default.jsx')


class Homepage extends React.Component {
    render() {

        return (

            <html lang="en">
                <head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <link rel="stylesheet"  href="/css/main.css"/>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossOrigin="anonymous"></link>
                    <title>Grail Collect</title>
                </head>
                <body className="homeBody"> <div className="">
                    <img src="/css/GrailCollect.png" alt=""/>
                   
                    {/* <h1 className="brandFont">Grail Collect</h1> */}
                    
                    <a href="/collection" className="btn btn-outline-primary btn-sm" id="enterBtn">Enter Collection</a></div>
                </body>
            </html>

        )
    }
}

module.exports = Homepage