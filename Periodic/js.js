window.onload = function(){
	var wrap = document.getElementsByTagName("div")[0];
	var per=new Array("H","He","Li","Be","B","C","N","O","F","Ne","Na", "Mg","Al","Si","P","S", "Cl","Ar",  "K", "Ca", "Sc", "Ti",  "V",  "Cr",  "Mn",  "Fe",  "Co",  "Ni",  "Cu",  "Zn",  "Ga",  "Ge",  "As","Se","Br", "Kr","Rb",  "Sr",  "Y",  "Zr",  "Nb",  "Mo", "Tc", "Ru",  "Rh",  "Pd", "Ag", "Cd", "In","Sn", "Sb", "Te", "I", "Xe",  "Cs", "Ba", "La", "Ce", "Pr", "Nd", "Pm",  "Sm", "Eu", "Gd", "Tb",  "Dy",  "Ho",  "Er",  "Tm",  "Yb",  "Lu",  "Hf", "Ta",  "W",  "Re", "Os", "Ir", "Pt", "Au", "Hg", "Tl",  "Pb", "Bi", "Po", "At",  "Rn", "Fr", "Ra",  "Ac",  "Th",  "Pa",  "U", "Np", "Pu", "Am",  "Cm", "Bk", "Cf", "Es",  "Fm",  "Md",  "No","Lr", "Rf","Db", "Sg",  "Bh",  "Hs",  "Mt",  "Ds",  "Rg",  "Cn",  "Uut",  "Fl",  "Uup",  "Lv",  "Uus","Uuo");
	var xx = new Array("Hydrogen","Hydrogen","Hydrogen");
	var num = new Array("1.00794","1.00794","1.00794");
	for (var i=0;i<118;i++) {
		var d=document.createElement("div");
		var b = document.createElement("br")
		var s=document.createElement("span");
		var n = i +1;
		var node1=document.createTextNode(n);
		s.appendChild(node1);
		var st=document.createElement("strong");
		var node2=document.createTextNode(per[(i)]);
		// st.appendChild(node2);
		var para=document.createElement("p");
		var node3=document.createTextNode(xx[0]);
		var node4=document.createTextNode(num[0]);
		// para.appendChild(node3);
		// para.appendChild(b);
		// para.appendChild(node4);
		d.appendChild(s);
		d.appendChild(st);
		d.appendChild(para);
		d.style.backgroundColor="rgba(0, 127, 127, 0.1)";
		d.style.transform="rotateY("+(-180+(10*i))+"deg) translateZ(480px) translateY("+(0+(3.5*i))+"px)";
		wrap.appendChild(d);
	}
}
