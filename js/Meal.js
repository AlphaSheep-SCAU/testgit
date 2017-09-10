var JsonMenu = {
	"dish":"","money":""
}

function open(){
	window.showModalDialog("http://www.baidu.com");
}

function printToConsole(){
	var mainHtml = document.getElementById("main");
	var childrenOfMainHtml = $(mainHtml).children("div.menu");
	for(var i = 0; i<childrenOfMainHtml.length;i++){
		var mealname_print = $(childrenOfMainHtml[i]).children("#mealname").text();
		var mealprice_print = $(childrenOfMainHtml[i]).children("#mealprice").text();
		JsonMenu.dish = mealname_print;
		JsonMenu.money = mealprice_print;
		console.log((i+1) +JsonMenu.dish + " " + JsonMenu.money);
	}
}

function addItem(){
	var child = document.getElementById("main");
	var node = document.createElement("div");
	node.setAttribute("class","menu");
	var AddedHTML = "<img src='img/logo.png' alt='Name'/>" +
	"<h4 id='mealname' class='meal'>菜名：<font id='name'></font></h3>" +
	"<h4 id='mealprice' class='meal'>价格：<font id='price'></font> <br/></h3>" ;
	//"<button class='delete' >Delete</button>" +
	//"<button class='edit' style='margin-left:10px' >Edit</button>";
	var btnDelete = document.createElement("button");
	var btnEdit = document.createElement("button");
	btnDelete.setAttribute("class","delete");
	btnEdit.setAttribute("class","edit");
	btnEdit.setAttribute("style","margin-left:10px");
	btnDelete.onclick = function(){
		btnDelete.parentElement.remove();
	};
	btnEdit.onclick = function(){
		var tempName = $(btnEdit).siblings("#mealname").children("#name").text();
		var tempPrice = $(btnEdit).siblings("#mealprice").children("#price").text();
		$(btnEdit).siblings("#mealname").html("<form>菜名：<input type='text' id='mealtext'>"
		+ "<button class='yes' onclick='Yes()'>确认</button> </form>");
		$(btnEdit).siblings("#mealprice").html("<form>" +
		"价格：<input type='text' id='mealmoney' />" +
		"</form>");
		getMeal(tempName,tempPrice);
		$("button.edit").hide();
		$("button.delete").hide();
	};
	btnDelete.innerHTML="Delete";
	btnEdit.innerHTML="Edit";
	node.innerHTML=AddedHTML;
	node.appendChild(btnDelete);
	node.appendChild(btnEdit);
	//node.appendChild(textNode);
	child.appendChild(node);
}

function editItem(){
	$("button.edit").click(function(){
		var tName = $(this).siblings("#mealname").children("#name").text();
		var tPrice = $(this).siblings("#mealprice").children("#price").text();
		$(this).parent().children("#mealname").html("<form>菜名：<input type='text' id='mealtext'>"
		+ "<button class='yes' onclick='Yes()'>确认</button> </form>");
		$(this).parent().children("#mealprice").html("<form>" +
		"价格：<input type='text' id='mealmoney' />" +
		"</form>");
		getMeal(tName,tPrice);
		$("button.edit").hide();
		$("button.delete").hide();
	});

	}

$(document).ready(function(){
	$("button.delete").click(function(){
		$(this).parent().remove();
	});
	
	$("button.edit").click(function(){
		var tName = $(this).siblings("#mealname").children("#name").text();
		var tPrice = $(this).siblings("#mealprice").children("#price").text();
		//var tName=document.getElementById("name").textContent;
		//var tPrice=document.getElementById("price").textContent;
		$(this).parent().children("#mealname").html("<form>菜名：<input type='text' id='mealtext'>"
		+ "<button class='yes' onclick='Yes()'>确认</button> </form>");
		$(this).parent().children("#mealprice").html("<form>" +
		"价格：<input type='text' id='mealmoney' />" +
		"</form>");
		getMeal(tName,tPrice);
		$("button.edit").hide();
		$("button.delete").hide();
	});
	
});

function Yes(){
	var name=document.getElementById("mealtext");
	var price=document.getElementById("mealmoney");
	var parent=$("button.yes").parents("h4#mealname");
	$("button.yes").parents("h4#mealname").html("菜名：" +"<font id='name'>" + name.value +"</font>");
	parent.next().html("价格：" +"<font id='price'>" + price.value +"</font>");
	$("button.edit").show();
	$("button.delete").show();
}

function getMeal(name,price){
	document.getElementById("mealtext").value = name;
	document.getElementById("mealmoney").value = price;
}
function showDialog(){
	$("div#main_modal").fadeIn(1100);
	//$("div#main_modal").css("display","block");
	//$("div.contain").css("opacity","0.3");
	//document.getElementById("main_body").style.opacity = 0.5;
	$("div#curtain").fadeIn();
	$("button.edit").attr("disabled","disabled");
	$("button.delete").attr("disabled","disabled");
	$("button.tool").attr("disabled","disabled");
}
function closeModal(){
	$("div#main_modal").fadeOut();
	//$("div#main_modal").css("display","none");
	//$("div.contain").css("opacity","1.0");
	$("div#curtain").fadeOut(1100);
	$("button.edit").removeAttr("disabled");
	$("button.delete").removeAttr("disabled");
	$("button.tool").removeAttr("disabled");
}