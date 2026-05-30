*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:Poppins;
}

body{
background:#090909;
color:white;
overflow-x:hidden;
}

section{
min-height:100vh;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
padding:40px;
text-align:center;
}

.hero{
background:
linear-gradient(
135deg,
#1a001f,
#3d0066,
#7a00ff
);
}

.hero h1{
font-size:5rem;
text-shadow:0 0 25px #b266ff;
}

button{
padding:15px 30px;
border:none;
border-radius:30px;
cursor:pointer;
background:#a855f7;
color:white;
margin-top:20px;
font-size:1rem;
}

#tempo{
font-size:2rem;
margin-top:20px;
color:#d8b4fe;
}

.spotify{
background:#111;
}

.song{
width:300px;
padding:15px;
margin:10px;
background:#181818;
border-radius:12px;
}

.grid{
display:grid;
grid-template-columns:
repeat(auto-fit,minmax(250px,1fr));
gap:20px;
width:100%;
max-width:1000px;
}

.grid img{
width:100%;
border-radius:15px;
transition:.3s;
}

.grid img:hover{
transform:scale(1.05);
}

.carta{
background:#0f0f0f;
}

#texto{
max-width:800px;
line-height:2;
font-size:1.1rem;
}

#resultado{
font-size:2rem;
margin:30px;
color:#c084fc;
}

.final{
background:
linear-gradient(
180deg,
#090909,
#240046
);
}

.final h1{
font-size:4rem;
}
