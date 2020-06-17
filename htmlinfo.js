<script>
function procesar() {
 
  var numeA = parseInt(document.getElementById("Num1").value);
  var numeB = parseInt(document.getElementById("Num2").value);
  var operaciones = document.getElementById("operaciones").value;
  var Resultado = 0;

  
if(operaciones == "sumar"){   
	Resultado = numeA + numeB; 
 } 
if(operaciones == "restar"){   
	Resultado = numeA - numeB;
 } 
if(operaciones == "dividir"){  
	Resultado = numeA / numeB;
 } 
if(operaciones == "multiplicar"){   
	Resultado = numeA * numeB;
 } 
alert(Resultado)
}
  

</script>
<h1>Aprendiendo a usar HTML</h1>

<label>Ingrese numero 1</label><br>
<input id="Num1" type="number"><br>
<label>Ingrese numero 2</label><br>
<input id="Num2" type="number"><br>
<label>Seleccione una operación</label><br>
<select id="operaciones">
  <option value="sumar">Sumar</option>
  <option value="restar">Restar</option>
  <option value="dividir">Dividir</option>
  <option value="multiplicar">Multiplicar</option>
  
</select>

<br><br>
<button onclick="procesar()">Evaluar</button>
