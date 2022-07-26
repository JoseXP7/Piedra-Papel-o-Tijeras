function aleatorio(min, max) {
  return Math.floor(Math.random()*(max-min+1)+min)
}
function eleccion(jugada) {
  let resultado = ""
  if (jugada == 1) {
    resultado ="Piedra ✊"
  } else if (jugada == 2) {
    resultado = "Papel 📄"
  } else if (jugada == 3) {
    resultado = "Tijeras ✂️"
  } else {
    resultado ="Elegiste Mal..."
  }
  return resultado
}
// 1 es para piedra, 2 para papel, y 3 para tijera
let player = 0
let ia = 0
batalla = pelea(0,0)
function pelea(win, lose) {
  win = 0
  lose = 0
  while (win < 3 && lose < 3) {
    ia = aleatorio(1,3)
    player = prompt("Elige!: 1 para piedra, 2 para papel y 3 para tijera")
    //alert("Elegiste " + player)
    alert("IA elige: " + eleccion(ia))
    alert("Tu eliges: " + eleccion(player))
    //VERIFICACION
    if (ia == player) {
      alert("¡Es un Empate!")
    } else if (player == 1 && ia == 3 || player == 2 && ia == 1 || player == 3 && ia == 1 ) {
      alert("¡Has Ganado!")
      win++
    } else {
      alert("¡Perdiste!")
      lose++
    }
  }
  alert("¡Ganaste " + win + " veces!. ¡Perdiste " + lose + " veces!.")
}
