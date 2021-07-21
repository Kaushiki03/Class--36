class Form{
    constructor(){

    }
    display(){
        var Title=createElement('h2')
        Title.html("Multiplayer car racing game")
        Title.position(130,0)
        var input=createInput("Name")
        input.position(130,160)
        var button=createButton("Play")
        button.position(250,200)
        var greeting=createElement('h3')
        button.mousePressed(function(){
            input.hide()
            button.hide()
            var name=input.value()
            playerCount=playerCount+1
            player.update(name)
            player.updateCount(playerCount)
            greeting.html("Hello"+name)
            greeting.position(130,160)
            
        })
    }

    

    
}